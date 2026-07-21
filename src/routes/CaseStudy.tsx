import { useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "../content/projects";
import { GalleryLightbox } from "../components/GalleryLightbox";

export function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const prevImage = useCallback(() => {
    if (!project) return;
    setLightboxIndex((i) => (i === 0 ? project.images.gallery.length - 1 : i - 1));
  }, [project]);

  const nextImage = useCallback(() => {
    if (!project) return;
    setLightboxIndex((i) => (i === project.images.gallery.length - 1 ? 0 : i + 1));
  }, [project]);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-6">
        <h1 className="font-display text-4xl">Project not found</h1>
        <button
          onClick={() => navigate("/")}
          className="mt-6 font-mono text-xs uppercase tracking-wider text-gold hover:underline"
        >
          Back to home
        </button>
      </div>
    );
  }

  return (
    <article className="min-h-screen pt-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-3 font-mono text-sm uppercase tracking-wider text-gold transition-colors hover:text-copper"
          >
          <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 grid gap-8 md:grid-cols-[2fr_1fr]"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
              {project.role}
            </span>
            <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {project.brief}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              Timeline: {project.timeline}
            </span>
            <div className="flex gap-3 mt-2">
              {project.links.figma && (
                <a
                  href={project.links.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-gold transition-colors hover:text-copper"
                >
                  <ExternalLink className="h-3 w-3" />
                  Figma
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-gold transition-colors hover:text-copper"
                >
                  <ExternalLink className="h-3 w-3" />
                  Live Demo
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-gold transition-colors hover:text-copper"
                >
                  <Github className="h-3 w-3" />
                  Source
                </a>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 overflow-hidden rounded-sm"
        >
          <img
            src={project.images.hero}
            alt={project.title}
            className="w-full object-cover"
          />
        </motion.div>

        <div className="mt-16 grid gap-16 md:grid-cols-2">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
              Context
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {project.context}
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
              Approach
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {project.approach}
            </p>
          </motion.section>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
            Highlights
          </h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {project.highlights.map((h, i) => (
              <li
                key={i}
                className="rounded-sm border border-border p-4 text-sm leading-relaxed text-muted-foreground"
              >
                {h}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-16 pb-16"
        >
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
            Outcomes
          </h2>
          <ul className="mt-4 space-y-3">
            {project.outcomes.map((o, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {o}
              </li>
            ))}
          </ul>
        </motion.section>

        {project.images.gallery.length > 0 && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 pb-24"
          >
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
              Gallery
            </h2>
            <div className="mt-4 columns-1 sm:columns-2 md:columns-3 gap-3 [column-fill:_balance]">
              {project.images.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => openLightbox(i)}
                  className="break-inside-avoid mb-3 w-full rounded-sm overflow-hidden border border-border transition-opacity hover:opacity-80 text-left"
                >
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="w-full"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </motion.section>
        )}

        {!project.images.gallery.length && (
          <div className="pb-24" />
        )}
      </div>

      <div className="border-t border-border px-6 py-12 text-center">
        <button
          onClick={() => navigate("/")}
          className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-gold transition-colors hover:text-copper"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all projects
        </button>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <GalleryLightbox
            images={project.images.gallery}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </article>
  );
}
