import { ExternalLink, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './ui/ImageWithFallback';

const projects = [
  {
    title: 'Task & Project Management App',
    description: 'It is an app for Managing and creating tasks for better project and task management that is user friendly and easy to use.',
    images: ['/Portfolio-V2/images/project1.png'],
    link: 'https://www.figma.com/design/D5LD04Q5olqPwrnvVsSynr/Task-and-Project-management-App?m=auto&t=ne0kTfoH4UNTHOag-6',
    tags: ['UI/UX Design', 'Mobile App', 'Figma'],
  },
  {
    title: 'Recipe App Design',
    description: 'This is a recipe app with a friendly and warm user interface...',
    images: ['/Portfolio-V2/images/project2.png'],
    link: 'https://www.figma.com/design/R2FW362AM2HpaE0u6E28br/recipe-app?m=auto&t=ne0kTfoH4UNTHOag-6',
    tags: ['UI Design', 'Mobile App', 'User Experience'],
  },
  {
    title: 'E-Commerce Platform',
    description: 'An E-Commerce website and app for clothes Site...',
    images: ['/Portfolio-V2/images/project3.png'],
    link: 'https://www.figma.com/design/ICviq08xhRToqHTfN0NMGe/New-clothes-project?node-id=0-1&t=EBDMiQwsnviwmzoM-1',
    demoLink: 'https://ahmed5emad.github.io/E-commerce-Demo/index.html',
    tags: ['Web Design', 'E-Commerce', 'Responsive'],
  },
  {
    title: 'Clothes Shopping App',
    description: 'A modern and user-friendly E-Commerce website...',
    images: ['/Portfolio-V2/images/project4.png'],
    link: 'https://www.figma.com/design/0weRLxvbAGBz99nSUfhk0nC/Clothes-Shop?node-id=206-530&t=EBDMiQwsnviwmzoM-1',
    tags: ['Mobile Design', 'Shopping', 'UI/UX'],
  },
  {
    title: 'Modern Dashboard',
    description: 'This is a sleek and modern dashboard UI design created for an analytics platform....',
    images: ['/Portfolio-V2/images/project5.png'],
    link: 'https://www.figma.com/design/8V28mHXhiAvufxmv5oO83t/Dashboards?node-id=0-1&t=Ok0UpXnXGYZfdv7E-1',
    tags: ['Web Design', 'Dashboard', 'Responsive'],
  },
  {
    title: 'Coffee Business Landing Page',
    description: 'This is a profesional landing page UI design created for an Coffee business....',
    images: ['/Portfolio-V2/images/project6.png'],
    link: 'https://www.figma.com/proto/NXk7gIgLGGarJlos8EXxxA/Coffee?node-id=1-3&t=kbZrmMPtu4JIevjW-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    tags: ['Web Design', 'Landing page', 'Animation'],
  },
  {
    title: 'App and Dashboard For boat trip',
    description: 'This is a sleek and modern dashboard UI design for app and dashboard for boat trip app management....',
    images: ['/Portfolio-V2/images/project7.png'],
    link: 'https://www.figma.com/design/jAKew3BgHr8UfijHGMXCZP/boats?node-id=42-1573&t=D43uk0N2TWtTtFVL-1',
    tags: ['Web Design', 'App Design', 'Dashboard'],
  },
  {
    title: 'Focus — Deep Work Engine',
    description: 'A full-stack productivity app with task management, project tracking, goal tracking, and a Pomodoro focus timer.',
    images: ['/Portfolio-V2/images/project8.png'],
    link: 'https://github.com/Ahmed5Emad/Focus',
    demoLink: 'https://focus-peach-eight.vercel.app',
    tags: ['React', 'TypeScript', 'Supabase', 'Full-Stack', 'UI/UX'],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects">
      <div className="text-center px-6 pt-28 pb-14">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 mb-4">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm">Featured Work</span>
        </div>
        <h2 className="text-orange-500 text-2xl">Projects</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {projects.map((project, i) => (
            <div key={i} className="break-inside-avoid mb-4 group rounded-2xl overflow-hidden bg-white/80 dark:bg-[#1e1e1e]/80 backdrop-blur-lg border border-gray-200 dark:border-white/10 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
              <div className="overflow-hidden">
                <ImageWithFallback
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-auto block"
                />
              </div>

              <div className="p-5 space-y-3 flex flex-col flex-1">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag, t) => (
                    <span key={t} className="px-2 py-0.5 text-[11px] font-medium text-orange-500 bg-orange-500/10 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-gray-900 dark:text-white font-bold text-base group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-white/60 text-sm leading-relaxed line-clamp-2 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-orange-500 group/link"
                  >
                    View <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:rotate-45" />
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-orange-500 group/link"
                    >
                      Live Demo <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:rotate-45" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
