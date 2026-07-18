import { Mail, Phone, Linkedin, Send } from 'lucide-react';

export function ContactSection() {
  const contacts = [
    {
      icon: <Mail className="w-8 h-8" />,
      href: 'mailto:ahmed2077emad@gmail.com',
      label: 'Email',
      value: 'ahmed2077emad@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Phone className="w-8 h-8" />,
      href: 'tel:+201021601622',
      label: 'Phone',
      value: '+20 102 160 1622',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      href: 'https://www.linkedin.com/in/ahmed5emad',
      label: 'LinkedIn',
      value: 'Ahmed Emad',
      color: 'from-blue-600 to-blue-800',
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 mb-4">
            <Send className="w-4 h-4" />
            <span className="text-sm">Get In Touch</span>
          </div>
          <h2 className="text-orange-500 mb-4 text-2xl">Contact</h2>
          <p className="text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
            If you have a project in mind or would like to discuss how I can help you achieve your goals, please don't hesitate to contact me. I'm always excited to explore new opportunities and collaborate with like-minded individuals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.label === 'LinkedIn' ? '_blank' : undefined}
              rel={contact.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
              className="group relative"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${contact.color} rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-1000`}></div>
              
              <div className="relative flex flex-col items-center gap-4 p-6 rounded-2xl bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-white/10 group-hover:border-orange-500/50 transition-all duration-300 shadow-sm">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                  {contact.icon}
                </div>
                <div className="text-center">
                  <p className="text-gray-600 dark:text-white/70 text-sm mb-1">{contact.label}</p>
                  <p className="text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors text-sm">{contact.value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="mailto:ahmed2077emad@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Send me an email
          </a>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-white/10 text-center">
          <p className="text-gray-500 dark:text-white/50 text-sm">
            © {new Date().getFullYear()} Ahmed Emad. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
