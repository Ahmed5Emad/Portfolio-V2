import { motion } from "motion/react";

const experiences = [
  {
    title: "UI/UX Designer & Front-End Developer",
    company: "Freelance",
    period: "Jan 2025 – Present",
    items: [
      "Designed and developed responsive e-commerce and education platforms",
      "Built production-ready solutions with React, Next.js, Tailwind CSS",
      "Translated client requirements into wireframes, prototypes, and pixel-perfect UIs",
    ],
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Figma"],
  },
  {
    title: "Front-End Developer",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "Nov 2025 – Jul 2026",
    items: [
      "Built responsive, mobile-friendly web pages with CSS and Tailwind",
      "Developed reusable React components with consistent styling",
      "Managed state and data flow with React Hooks and RESTful APIs",
    ],
    tags: ["React", "Tailwind CSS", "TypeScript", "JavaScript"],
  },
  {
    title: "Front-End Developer Intern",
    company: "National Telecommunication Institute (NTI)",
    period: "Jun 2025 – Aug 2025",
    items: [
      "Developed responsive UIs using React, Next.js, and Tailwind CSS",
      "Transformed Figma designs into production-ready applications",
    ],
    tags: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "UI/UX Designer Intern",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "Oct 2024 – Jun 2025",
    items: [
      "Built a scalable Figma design system improving handoff efficiency",
      "Conducted user interviews and usability testing to refine experiences",
      "Created wireframes, user flows, and interactive prototypes",
    ],
    tags: ["Figma", "User Research", "Prototyping", "Design Systems"],
  },
  {
    title: "Cloud Computing Intern",
    company: "Huawei Technologies",
    period: "Jul 2024 – Oct 2024",
    items: [
      "Learned cloud infrastructure and scalable system architecture",
      "Gained exposure to DevOps workflows in an enterprise environment",
    ],
    tags: ["Cloud Computing", "DevOps"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
            Career
          </span>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            Experience
          </h2>
        </div>

        <div className="relative space-y-0">
          <div className="absolute left-0 top-0 h-full w-px bg-border" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-[-3.5px] top-1.5 h-2 w-2 rounded-full bg-gold" />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-xl tracking-tight">
                  {exp.title}
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {exp.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-gold">{exp.company}</p>

              <ul className="mt-3 space-y-1.5">
                {exp.items.map((item, j) => (
                  <li
                    key={j}
                    className="text-sm leading-relaxed text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-3 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-0.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
