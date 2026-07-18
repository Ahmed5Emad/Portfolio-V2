import { Star, Quote } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const UPWORK_URL = "https://www.upwork.com/freelancers/~01460a8313a82b3237?mp_source=share";

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: "Abdullah Albar",
      role: "CEO & Founder",
      company: "Kaptain",
      content: "Great experience with him. He redesigned the 2 UI's and built a clean, well-structured admin panel. Very easy to communicate with, understood the product well, and delivered high-quality work. Would definitely recommend.",
      rating: 5,
    },
    {
      name: "Oxana Demchenko",
      role: "",
      company: "",
      content: "I enjoyed working with Ahmed and will likely have additional jobs for him in the future.",
      rating: 5,
    },
    {
      name: "Ted Stevenson",
      role: "Senior User Researcher",
      company: "Amazon",
      content: "Good advice in user research interview for online course/marketing materials.",
      rating: 5,
    },
  ];

  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="testimonials" ref={ref}>
      <div className="text-center px-6 pt-28 pb-14">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 mb-4">
          <Quote className="w-4 h-4" />
          <span className="text-sm">What Clients Say</span>
        </div>
        <h2 className="text-orange-500 text-2xl">Testimonials</h2>
      </div>

      <div className={`max-w-7xl mx-auto px-6 pb-24 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {testimonials.map((testimonial, index) => (
            <a
              key={index}
              href={UPWORK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block break-inside-avoid mb-4 group rounded-2xl overflow-hidden bg-white/80 dark:bg-[#1e1e1e]/80 backdrop-blur-lg border border-gray-200 dark:border-white/10 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 cursor-pointer"
            >
              <div className="p-5 space-y-3">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                  ))}
                </div>

                <p className="text-gray-600 dark:text-white/60 text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3 pt-3 border-t border-gray-200 dark:border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white text-sm font-bold shadow-sm shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-900 dark:text-white text-sm font-semibold group-hover:text-orange-500 transition-colors truncate">{testimonial.name}</p>
                    {testimonial.role && (
                      <p className="text-xs text-gray-500 dark:text-white/50 mt-0.5 truncate">{testimonial.role}{testimonial.company ? ` at ${testimonial.company}` : ''}</p>
                    )}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
