import { useEffect, useRef } from "react";

const vertexSrc = `attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = 0.5 * (position + 1.0);
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const fragmentSrc = `precision highp float;
varying vec2 vUv;
uniform float uTime;
uniform float uScroll;
uniform vec3 uColorA;
uniform vec3 uColorB;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
    f.y
  );
}

void main() {
  vec2 uv = vUv;
  float n = noise(uv * 3.0 + uTime * 0.015);
  n += 0.5 * noise(uv * 6.0 - uTime * 0.025);
  n += 0.25 * noise(uv * 12.0 + uTime * 0.04);
  n = n / 1.75;

  float scrollFactor = clamp(uScroll * 0.3, 0.0, 1.0);
  float mixFactor = (uv.y * 0.55 + scrollFactor * 0.35) + n * 0.1;
  vec3 color = mix(uColorA, uColorB, clamp(mixFactor, 0.0, 1.0));

  float vignette = 1.0 - length(uv - 0.5) * 0.55;
  color *= vignette;

  gl_FragColor = vec4(color, 1.0);
}`;

function getColors() {
  const isDark = document.documentElement.classList.contains("dark");
  return isDark
    ? [
        [0.039, 0.039, 0.043],
        [0.784, 0.663, 0.373],
      ]
    : [
        [0.88, 0.86, 0.82],
        [0.78, 0.66, 0.48],
      ];
}

export function ShaderHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef(0);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const uTimeRef = useRef<WebGLUniformLocation | null>(null);
  const uScrollRef = useRef<WebGLUniformLocation | null>(null);
  const uColorARef = useRef<WebGLUniformLocation | null>(null);
  const uColorBRef = useRef<WebGLUniformLocation | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const runningRef = useRef(true);
  const mountedRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      (canvas.getContext("webgl") as WebGLRenderingContext) ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext);
    if (!gl) return;

    glRef.current = gl;

    const [colorA, colorB] = getColors();

    const vs = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(vs, vertexSrc);
    gl.compileShader(vs);

    const fs = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(fs, fragmentSrc);
    gl.compileShader(fs);

    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);
    programRef.current = program;

    const quad = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    uTimeRef.current = gl.getUniformLocation(program, "uTime");
    uScrollRef.current = gl.getUniformLocation(program, "uScroll");
    uColorARef.current = gl.getUniformLocation(program, "uColorA");
    uColorBRef.current = gl.getUniformLocation(program, "uColorB");
    const uResolution = gl.getUniformLocation(program, "uResolution");

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas!.width = window.innerWidth * dpr;
      canvas!.height = window.innerHeight * dpr;
      gl.viewport(0, 0, canvas!.width, canvas!.height);
      if (uResolution)
        gl.uniform2f(uResolution, canvas!.width, canvas!.height);
    };
    resize();
    window.addEventListener("resize", resize);

    gl.uniform3fv(uColorARef.current, colorA);
    gl.uniform3fv(uColorBRef.current, colorB);

    const onScroll = () => {
      scrollRef.current = window.scrollY / window.innerHeight;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const themeObserver = new MutationObserver(() => {
      const [ca, cb] = getColors();
      if (glRef.current && uColorARef.current && uColorBRef.current) {
        glRef.current.uniform3fv(uColorARef.current, ca);
        glRef.current.uniform3fv(uColorBRef.current, cb);
      }
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    if (!prefersReduced) {
      runningRef.current = true;
      const loop = (t: number) => {
        if (!runningRef.current || !mountedRef.current) return;
        if (glRef.current && uTimeRef.current && uScrollRef.current) {
          glRef.current.uniform1f(uTimeRef.current, t * 0.001);
          glRef.current.uniform1f(uScrollRef.current, scrollRef.current);
          glRef.current.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        }
        requestAnimationFrame(loop);
      };
      requestAnimationFrame(loop);
    } else {
      gl.uniform1f(uTimeRef.current, 0);
      gl.uniform1f(uScrollRef.current, 0);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    return () => {
      mountedRef.current = false;
      runningRef.current = false;
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,#c8a165_0%,#f5f2ed_70%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,#c8a165_0%,#0a0a0b_70%)]" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ filter: "contrast(1.05)" }}
      />
    </>
  );
}
