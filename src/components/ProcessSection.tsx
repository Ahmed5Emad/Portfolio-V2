import { Search, Pencil, Code2, Rocket } from 'lucide-react';

export function ProcessSection() {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Research & Discovery',
      description: 'Understanding user needs, business goals, and market trends through comprehensive research and analysis.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Pencil className="w-8 h-8" />,
      title: 'Design & Prototype',
      description: 'Creating wireframes, mockups, and interactive prototypes that bring ideas to life and validate concepts.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Develop & Build',
      description: 'Transforming designs into clean, performant code with attention to detail and best practices.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Test & Launch',
      description: 'Rigorous testing, refinement, and deployment to ensure a seamless user experience.',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section className="py-20 px-6 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-orange-500 mb-4 text-2xl">My Process</h2>
        <p className="text-center text-gray-600 dark:text-white/70 mb-16 max-w-2xl mx-auto">
          A proven workflow that delivers exceptional results from concept to launch
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-orange-500/50 to-transparent -z-10" />
              )}
              
              <div className="relative h-full p-6 rounded-2xl bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 shadow-sm">
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-4 shadow-sm`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-gray-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-white/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
