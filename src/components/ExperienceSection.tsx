import { Briefcase, Calendar } from 'lucide-react';

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
      period: "2025 - Present",
      description: "Working with various clients to create intuitive and visually appealing digital experiences.",
      achievements: [
        "Designed and developed 6+ successful projects for diverse clients",
        "Increased user engagement by 40% through improved UX design",
        "Collaborated with cross-functional teams to deliver projects on time"
      ],
      technologies: ["Figma", "Adobe Photoshop", "Tailwind CSS", "JavaScript", "HTML/CSS"]
    },
    {
      title: "Front-End Developer",
      company: "National Telecommunication Institute",
      position: "Intern",
      period: "2025 June - 2025 August",
      description: "Built responsive websites and web applications with modern technologies.",
      achievements: [
        "Implemented responsive designs with pixel-perfect accuracy",
        "Optimized website performance and loading times",
        "Collaborated with designers to bring concepts to life"
      ],
      technologies: ["React", "Tailwind CSS", "JavaScript", "HTML/CSS"]
    },
    {
      title: "UI/UX Designer",
      company: "DEPI",
      period: "2024 - 2025",
      description: "Created user-centered designs for web and mobile applications.",
      achievements: [
        "Developed comprehensive design systems for multiple clients",
        "Conducted user research and usability testing sessions",
        "Created wireframes, prototypes, and high-fidelity mockups"
      ],
      technologies: ["Figma", "Adobe XD", "Photoshop", "Illustrator"]
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
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
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-500/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-orange-500 ring-4 ring-white dark:ring-[#121212] z-10" />

                {/* Content card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-1000" />
                    
                    <div className="relative p-6 rounded-2xl bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-white/10 group-hover:border-orange-500/50 transition-all duration-300 shadow-sm hover:shadow-lg">
                      {/* Period badge */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-sm mb-4 ${
                        index % 2 === 0 ? 'md:float-right md:ml-4' : 'md:float-left md:mr-4'
                      }`}>
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>

                      <h3 className="text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                      <h4 className="text-orange-500 mb-4">{exp.position}</h4>
                      <h4 className="text-orange-500 mb-4">{exp.company}</h4>
                      <p className="text-gray-600 dark:text-white/80 mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-white/70 flex items-start gap-2">
                            <span className="text-orange-500 mt-1">•</span>
                            <span className="flex-1">{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      {exp.technologies && (
                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
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
