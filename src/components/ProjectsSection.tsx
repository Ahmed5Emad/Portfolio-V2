import { useState } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';

interface Project {
  title: string;
  description: string;
  images: string[];
  link: string;
  tags: string[];
}

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
  {
    title: 'Task & Project Management App',
    description: 'It is an app for Managing and creating tasks for better project and task management that is user friendly and easy to use.',
    images: ['images/project1.png'],
    link: 'https://www.figma.com/design/D5LD04Q5olqPwrnvVsSynr/Task-and-Project-management-App?m=auto&t=ne0kTfoH4UNTHOag-6',
    tags: ['UI/UX Design', 'Mobile App', 'Figma'],
  },
  {
    title: 'Recipe App Design',
    description: 'This is a recipe app with a friendly and warm user interface...',
    images: ['images/project2.png'],
    link: 'https://www.figma.com/design/R2FW362AM2HpaE0u6E28br/recipe-app?m=auto&t=ne0kTfoH4UNTHOag-6',
    tags: ['UI Design', 'Mobile App', 'User Experience'],
  },
  {
    title: 'E-Commerce Platform',
    description: 'An E-Commerce website and app for clothes Site...',
    images: ['images/project3.png'],
    link: 'https://www.figma.com/design/ICviq08xhRToqHTfN0NMGe/New-clothes-project?node-id=0-1&t=EBDMiQwsnviwmzoM-1',
    tags: ['Web Design', 'E-Commerce', 'Responsive'],
  },
  {
    title: 'Clothes Shopping App',
    description: 'A modern and user-friendly E-Commerce website...',
    images: ['images/project4.png'],
    link: 'https://www.figma.com/design/0weRLxvbAGB99nSUfhk0nC/Clothes-Shop?node-id=206-530&t=EBDMiQwsnviwmzoM-1',
    tags: ['Mobile Design', 'Shopping', 'UI/UX'],
  },
];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Featured Work</span>
          </div>
          <h2 className="text-orange-500 mb-4 text-2xl">Projects</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A collection of my recent design and development work
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-1000"></div>
              
              <div className="relative h-full rounded-2xl overflow-hidden bg-[#1e1e1e] border border-white/10 group-hover:border-orange-500/50 transition-all duration-300">
                {/* Image Container */}
                <div className="relative  overflow-hidden bg-gradient-to-br from-orange-500/5 to-transparent">
                  <ImageWithFallback
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="bg-orange-500/10 text-orange-500 border-orange-500/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-white group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-500 hover:gap-3 transition-all duration-300 group/link"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:rotate-45 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
