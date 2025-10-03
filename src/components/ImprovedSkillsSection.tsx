import { useState } from 'react';
import { Palette, Code, Layers, GitBranch } from 'lucide-react';
import { Tabs } from './ui/tabs';
import { Progress } from './ui/progress';

interface Skill {
  name: string;
  level: number;
  icon?: React.ReactNode;
  color: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

export function ImprovedSkillsSection() {
  const [activeTab, setActiveTab] = useState('design');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories: SkillCategory[] = [
    {
      id: 'design',
      title: 'Design Tools',
      icon: <Palette className="w-5 h-5" />,
      skills: [
        { name: 'Figma', level: 95, color: 'from-purple-500 to-pink-500' },
        { name: 'Adobe Photoshop', level: 85, color: 'from-blue-500 to-cyan-500' },
        { name: 'Adobe Illustrator', level: 80, color: 'from-orange-500 to-yellow-500' },
        { name: 'UI/UX Design', level: 95, color: 'from-green-500 to-emerald-500' },
      ],
    },
    {
      id: 'frontend',
      title: 'Front-End',
      icon: <Code className="w-5 h-5" />,
      skills: [
        { name: 'HTML5', level: 95, color: 'from-orange-600 to-red-500' },
        { name: 'CSS3/Tailwind', level: 83, color: 'from-blue-400 to-blue-600' },
        { name: 'JavaScript', level: 88, color: 'from-yellow-400 to-yellow-600' },
        { name: 'React', level: 75, color: 'from-cyan-400 to-blue-500' },
      ],
    },
    {
      id: 'workflow',
      title: 'Workflow',
      icon: <Layers className="w-5 h-5" />,
      skills: [
        { name: 'Responsive Design', level: 95, color: 'from-indigo-500 to-purple-500' },
        { name: 'Prototyping', level: 92, color: 'from-pink-500 to-rose-500' },
        { name: 'User Research', level: 75, color: 'from-teal-500 to-cyan-500' },
        { name: 'Wireframing', level: 85, color: 'from-violet-500 to-purple-600' },
      ],
    },
    {
      id: 'tools',
      title: 'Dev Tools',
      icon: <GitBranch className="w-5 h-5" />,
      skills: [
        { name: 'Git/GitHub', level: 80, color: 'from-gray-700 to-gray-900' },
        { name: 'VS Code', level: 95, color: 'from-blue-600 to-blue-800' },
        { name: 'Chrome DevTools', level: 75, color: 'from-red-500 to-orange-500' },
        { name: 'NPM/Yarn', level: 65, color: 'from-red-600 to-pink-600' },
      ],
    },
  ];

  const activeCategory = skillCategories.find(cat => cat.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-center text-orange-500 mb-4 text-2xl">Skills & Expertise</h2>
        <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and design capabilities
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-orange-500 text-white scale-105'
                  : 'bg-[#1e1e1e] text-white/70 hover:text-white hover:bg-[#252525]'
              }`}
            >
              {category.icon}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {activeCategory.skills.map((skill, index) => (
            <div
              key={skill.name}
              className="relative group"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6 rounded-2xl bg-[#1e1e1e] border border-white/10 hover:border-orange-500/50 transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-white">{skill.name}</h3>
                  <span className={`text-sm px-3 py-1 rounded-full bg-gradient-to-r ${skill.color} text-white transition-all duration-300 ${
                    hoveredSkill === skill.name ? 'scale-110' : ''
                  }`}>
                    {skill.level}%
                  </span>
                </div>
                
                {/* Custom Progress Bar */}
                <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${skill.level}%`,
                      transform: hoveredSkill === skill.name ? 'scaleY(1.2)' : 'scaleY(1)',
                    }}
                  />
                  
                  {/* Shine effect */}
                  <div 
                    className={`absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-1000 ${
                      hoveredSkill === skill.name ? 'translate-x-full' : '-translate-x-full'
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Description */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20">
          <p className="text-white/90 text-center">
            {activeTab === 'design' && "Expert in modern design tools with a focus on creating intuitive, user-centered interfaces that drive engagement and conversion."}
            {activeTab === 'frontend' && "Proficient in modern web technologies, building responsive and performant applications with clean, maintainable code."}
            {activeTab === 'workflow' && "Strong foundation in UX principles and design thinking, ensuring every project is backed by research and user insights."}
            {activeTab === 'tools' && "Experienced with industry-standard development tools and version control, ensuring smooth collaboration and efficient workflows."}
          </p>
        </div>
      </div>
    </section>
  );
}
