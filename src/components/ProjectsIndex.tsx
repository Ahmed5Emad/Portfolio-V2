import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { projects } from "../content/projects";

export function ProjectsIndex() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
            Portfolio
          </span>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            Selected Work
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {projects.map((project, i) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="break-inside-avoid mb-5 group cursor-pointer rounded-sm border border-border transition-colors hover:border-gold/30"
              onClick={() => navigate(`/projects/${project.slug}`)}
            >
              <div className="overflow-hidden rounded-t-sm">
                <img
                  src={project.images.hero}
                  alt={project.title}
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <span className="font-mono text-xs text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 font-display text-lg tracking-tight leading-snug transition-colors group-hover:text-gold">
                  {project.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {project.brief}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {project.role}
                  </span>
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
