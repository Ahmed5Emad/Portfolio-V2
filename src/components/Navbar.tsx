import { useState, useEffect } from 'react';

export function Navbar() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact'];
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
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1e1e1e]/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={scrollToTop}
            className="text-white hover:text-orange-500 transition-colors group"
          >
            <span className="text-xl">
              <span className="text-orange-500 group-hover:text-white transition-colors">A</span>
              <span className="group-hover:text-orange-500 transition-colors">E</span>
            </span>
          </button>
          
          <ul className="flex gap-10">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative transition-colors duration-300 hover:text-orange-500 ${
                    activeSection === item.id ? 'text-orange-500' : 'text-white'
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
        </div>
      </div>
    </nav>
  );
}
