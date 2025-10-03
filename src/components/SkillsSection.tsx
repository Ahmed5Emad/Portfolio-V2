import { useState } from 'react';
import { Figma, Github } from 'lucide-react';

export function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const skills = [
    {
      id: 'figma',
      icon: <Figma className="w-20 h-20" />,
      description: 'Used for designing UI/UX experiences. It helps me create prototypes and high-fidelity designs for web and mobile applications.',
    },
    {
      id: 'photoshop',
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect className="fill-current" height="33.92" rx="3" width="33.92" x="7.04" y="7.04" />
          <path className="fill-white" d="M11.77,15.52h6.71c3.44,0,5.78,1.93,5.78,5.05,0,3.5-2.61,5.18-5.88,5.18H14.91v6.44H11.77Zm3.14,7.71H18c1.88,0,3.05-.81,3.05-2.59s-1.3-2.6-3-2.6H14.91Z" />
          <path className="fill-white" d="M28.6,28.53a2.36,2.36,0,0,0,2.58,1.74c1.45,0,2-.56,2-1.44s-.54-1.3-2.51-1.79c-3.87-.95-4.56-2.14-4.56-3.87s1.29-3.66,4.84-3.66,4.85,2,5,3.68H33.06c-.14-.57-.54-1.52-2.25-1.52-1.34,0-1.76.61-1.76,1.25s.43,1.08,2.53,1.57c4,.94,4.65,2.3,4.65,4.13,0,2.09-1.62,3.86-5.16,3.86s-5.14-1.75-5.43-3.95Z" />
        </svg>
      ),
      description: 'Used for creating visual elements. It helps me create logos, icons, and other visual elements for web and mobile applications.',
    },
    {
      id: 'css',
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" fill="currentColor"/>
        </svg>
      ),
      description: 'Used for styling and layout. It helps me create responsive and accessible designs.',
    },
    {
      id: 'javascript',
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="3" fill="currentColor"/>
          <path d="M7.5 15.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9h-2v6.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V9h-2v6.5zm6.5-3c0 1.65 1.35 3 3 3s3-1.35 3-3v-.5h-2v.5c0 .55-.45 1-1 1s-1-.45-1-1c0-.55.45-1 1-1h.5c1.38 0 2.5-1.12 2.5-2.5S18.38 9 17 9s-2.5 1.12-2.5 2.5v.5h2v-.5c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1h-.5c-1.38 0-2.5 1.12-2.5 2.5z" fill="#121212"/>
        </svg>
      ),
      description: 'Used for adding interactivity and functionality. It helps me create dynamic and responsive web applications.',
    },
    {
      id: 'html',
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" fill="currentColor"/>
        </svg>
      ),
      description: 'Used for structuring and organizing content. It helps me create semantic and accessible HTML.',
    },
    {
      id: 'illustrator',
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect className="fill-current" height="33.92" rx="3" width="33.92" x="7.04" y="7.04" />
          <path className="fill-white" d="M18.18,28.57l-1.47,4.25H13.63l5.76-16.68H23.3l6,16.68H26l-1.53-4.25ZM23.76,26c-1.32-3.82-2.12-6.09-2.5-7.51h0C20.82,20,19.94,22.72,18.88,26Z" />
          <path className="fill-white" d="M31.37,15.18h3v2.93h-3Zm0,5.24h3v12.4h-3Z" />
        </svg>
      ),
      description: 'Used for vector design. It helps me create logos, illustrations, and scalable graphics.',
    },
    {
      id: 'github',
      icon: <Github className="w-20 h-20" />,
      description: 'Used for version control. It helps me collaborate with other developers and manage different versions of code.',
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-center text-orange-500 mb-12">Skills</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {skills.map((skill) => (
            <button
              key={skill.id}
              onClick={() => setSelectedSkill(skill.id)}
              className="flex items-center justify-center p-6 rounded-xl bg-[#1e1e1e] text-white hover:text-orange-500 hover:scale-110 transition-all duration-300"
            >
              {skill.icon}
            </button>
          ))}
        </div>

        {selectedSkill && (
          <div className="text-center">
            <p className="text-white/90 max-w-3xl mx-auto">
              {skills.find((s) => s.id === selectedSkill)?.description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
