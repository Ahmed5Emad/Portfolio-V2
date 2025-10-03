import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience' , 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#1e1e1e]/80 backdrop-blur-lg border-b border-gray-200 dark:border-white/10 transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={scrollToTop}
            className="text-gray-900 dark:text-white hover:text-orange-500 transition-colors group"
          >
            <span className="text-xl">
              <span className="text-orange-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">A</span>
              <span className="group-hover:text-orange-500 transition-colors">E</span>
            </span>
          </button>
          
          <div className="flex items-center gap-8">
            <ul className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`relative transition-colors duration-300 hover:text-orange-500 ${
                      activeSection === item.id ? 'text-orange-500' : 'text-gray-900 dark:text-white'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
            
            <ThemeToggle isDark={isDark} toggle={toggleTheme} />
          </div>
        </div>
      </div>
    </nav>
  );
}
