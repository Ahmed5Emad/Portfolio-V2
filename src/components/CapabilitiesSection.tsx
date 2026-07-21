import { motion } from "motion/react";

const groups = [
  {
    name: "Design",
    description: "User research, wireframing, prototyping, design systems",
    tools: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Pen & Paper"],
  },
  {
    name: "Engineering",
    description: "Front-end architecture, responsive development, API integration",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    name: "Tools & Workflow",
    description: "Version control, deployment, collaboration, project management",
    tools: ["Git", "GitHub", "Supabase", "Vite", "Bun", "npm", "Zed"],
  },
];

const marqueeTools = [
  "Figma", "React", "TypeScript", "Tailwind CSS", "Next.js",
  "JavaScript", "HTML5", "CSS3", "Git", "GitHub",
  "Supabase", "Photoshop", "Illustrator", "Figma", "React",
  "TypeScript", "Tailwind CSS", "Next.js", "JavaScript", "Zed", "Bun", "npm",
];

const brandColors = [
  "text-[#a259ff]/20",  // Figma purple
  "text-[#61dafb]/20",  // React blue
  "text-[#3178c6]/20",  // TypeScript blue
  "text-[#06b6d4]/20",  // Tailwind cyan
  "text-[#000000]/20 dark:text-white/20",  // Next.js
  "text-[#f7df1e]/20",  // JavaScript yellow
  "text-[#e34f26]/20",  // HTML5 orange
  "text-[#1572b6]/20",  // CSS3 blue
  "text-[#f05032]/20",  // Git orange
  "text-[#181717]/20 dark:text-white/20",  // GitHub
  "text-[#3ecf8e]/20",  // Supabase green
  "text-[#001e36]/20 dark:text-white/20",  // Photoshop
  "text-[#ff9a00]/20",  // Illustrator orange
  "text-[#e0851e]/20",  // Zed amber
];

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
            Toolkit
          </span>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            Capabilities
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {groups.map((group, i) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="font-mono text-sm text-gold">{group.name}</span>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {group.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 overflow-hidden">
          <div className="flex animate-marquee gap-8">
            {marqueeTools.map((tool, i) => (
              <span
                key={`${tool}-${i}`}
                className={`whitespace-nowrap font-display text-5xl italic leading-none tracking-tight ${brandColors[i % brandColors.length]} hover:opacity-40 transition-opacity`}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
