import { Briefcase, Calendar } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface Experience {
  title: string;
  company: string;
  position?: string;
  period: string;
  description: string;
  achievements: string[];
  technologies?: string[];
}

export function ExperienceSection() {
  const experiences: Experience[] = [
    {
      title: "UI/UX Designer & Front-End Developer",
      company: "Freelance",
      period: "Jan 2025 - Present",
      description:
        "Designing and developing responsive platforms, translating complex client requirements into intuitive digital experiences.",
      achievements: [
        "Designed and developed responsive e-commerce and education platforms, improving user engagement",
        "Engineered scalable, production-ready front-end solutions using React, Next.js, and Tailwind CSS",
        "Translated complex client requirements into detailed wireframes, interactive prototypes, and pixel-perfect UIs in Figma",
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Figma"],
    },
    {
      title: "Front-End Developer",
      company: "Digital Egypt Pioneers Initiative (DEPI)",
      period: "Nov 2025 - Jul 2026",
      description:
        "Building responsive interfaces and reusable React components for modern web applications.",
      achievements: [
        "Built responsive, mobile-friendly web pages using CSS and Tailwind utility classes ensuring cross-device compatibility",
        "Developed reusable UI elements in React with clean, consistent styling across applications",
        "Managed state and data flow using React Hooks and integrated RESTful APIs",
      ],
      technologies: ["React", "Tailwind CSS", "TypeScript", "JavaScript", "HTML/CSS"],
    },
    {
      title: "Front-End Developer",
      company: "National Telecommunication Institute (NTI)",
      position: "Intern",
      period: "Jun 2025 - Aug 2025",
      description:
        "Developed responsive, production-ready UIs and transformed Figma designs into functional applications.",
      achievements: [
        "Developed responsive UIs that improve user engagement using React, Next.js, and Tailwind CSS",
        "Transformed Figma designs into production-ready applications and websites",
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML/CSS"],
    },
    {
      title: "UI/UX Designer",
      company: "Digital Egypt Pioneers Initiative (DEPI)",
      position: "Intern",
      period: "Oct 2024 - Jun 2025",
      description:
        "Built scalable design systems and conducted user research to create user-centered digital experiences.",
      achievements: [
        "Built and maintained a scalable Figma design system, improving design handoff efficiency",
        "Conducted user interviews and usability testing, iteratively refining core user experiences",
        "Developed wireframes, user flows, and interactive prototypes for web and mobile applications",
      ],
      technologies: ["Figma", "User Research", "Prototyping", "Design Systems"],
    },
    {
      title: "Cloud Computing",
      company: "Huawei Technologies",
      position: "Intern",
      period: "Jul 2024 - Oct 2024",
      description:
        "Gained foundational knowledge of scalable cloud systems and DevOps workflows in a large-scale enterprise environment.",
      achievements: [
        "Learned cloud infrastructure fundamentals and scalable system architecture",
        "Gained exposure to DevOps workflows in an enterprise environment",
      ],
      technologies: ["Cloud Computing", "DevOps"],
    },
  ];

  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-3xl" />

      <div className="max-w-5xl w-full relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 mb-4">
            <Briefcase className="w-4 h-4" />
            <span className="text-sm">Career Journey</span>
          </div>
          <h2 className="text-orange-500 mb-4 text-2xl">Experience</h2>
          <p className="text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
            My professional journey in design and development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-500/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 transition-all duration-700 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-orange-500 ring-4 ring-white dark:ring-[#121212] z-10" />

                {/* Content card */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  } ml-12 md:ml-0`}
                >
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-1000" />

                    <div className="relative p-6 rounded-2xl bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-white/10 group-hover:border-orange-500/50 transition-all duration-300 shadow-sm hover:shadow-lg">
                      {/* Period badge */}
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-sm mb-4 md:float-right md:ml-4`}
                      >
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>

                      <h3 className="text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      {exp.position && (
                        <h4 className="text-orange-500 mb-4">{exp.position}</h4>
                      )}
                      <h4 className="text-orange-500 mb-4">{exp.company}</h4>
                      <p className="text-gray-600 dark:text-white/80 mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <ul className={`space-y-2 mb-4`}>
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-600 dark:text-white/70 flex items-start gap-2"
                          >
                            <span className="text-orange-500 mt-1">•</span>
                            <span className="flex-1">{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      {exp.technologies && (
                        <div className={`flex flex-wrap gap-2 }`}>
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
