import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const texts = ["UI/UX Designer", "Front-End Engineer", "Creative Developer"];

export function HeroIntro() {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((i) => (i + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Portfolio-V2/files/ahmed-emad-cv.pdf";
    link.download = "Ahmed_Emad_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6 inline-block font-mono text-xs uppercase tracking-[0.2em] text-ink dark:text-gold"
        >
          Available for freelance work
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-6xl leading-[0.95] tracking-tight text-ink dark:text-white sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Ahmed Emad
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-6 h-8"
        >
          <span className="font-display text-xl italic text-ink/70 dark:text-white/70 sm:text-2xl">
            {texts[textIndex]}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink/60 dark:text-white/50"
        >
          UI/UX Designer & Front-End Engineer — I craft human-centered digital
          experiences that bridge design and engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={handleDownloadCV}
            className="group inline-flex items-center gap-2 rounded-full border border-ink/20 bg-ink/5 px-6 py-3 text-sm text-ink backdrop-blur-sm transition-all duration-300 dark:border-white/20 dark:bg-white/5 dark:text-white hover:bg-gold hover:text-ink"
          >
            <Download className="h-4 w-4" />
            Download CV
          </button>

          <div className="flex gap-3">
            <a
              href="https://github.com/ahmed5emad"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink/20 p-3 text-ink/60 transition-all duration-300 hover:border-gold hover:text-gold dark:border-white/20 dark:text-white/60"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed5emad"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink/20 p-3 text-ink/60 transition-all duration-300 hover:border-gold hover:text-gold dark:border-white/20 dark:text-white/60"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:ahmed2077emad@gmail.com"
              className="rounded-full border border-ink/20 p-3 text-ink/60 transition-all duration-300 hover:border-gold hover:text-gold dark:border-white/20 dark:text-white/60"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="h-10 w-px bg-gradient-to-b from-gold/50 to-transparent" />
      </motion.div>
    </div>
  );
}
