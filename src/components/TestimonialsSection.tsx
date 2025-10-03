import { useState } from 'react';
import { Quote, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp Inc.",
      content: "Ahmed's design work exceeded our expectations. His attention to detail and user-centric approach resulted in a 40% increase in user engagement.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "StartupXYZ",
      content: "Working with Ahmed was a game-changer. He transformed our vision into a beautiful, functional product that our users love.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Digital Solutions",
      content: "Ahmed's ability to blend creativity with functionality is impressive. He delivered a design that perfectly represents our brand.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/5 dark:bg-pink-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl w-full relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 mb-4">
            <Quote className="w-4 h-4" />
            <span className="text-sm">What Clients Say</span>
          </div>
          <h2 className="text-orange-500 mb-4">Testimonials</h2>
          <p className="text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
            Don't just take my word for it - here's what some of my clients have to say
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className={`absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl blur transition duration-500 ${
                activeIndex === index ? 'opacity-25' : 'opacity-0'
              }`}></div>
              
              <div className={`relative h-full p-8 rounded-2xl bg-white dark:bg-[#1e1e1e] border transition-all duration-300 shadow-sm ${
                activeIndex === index ? 'border-orange-500/50 scale-105' : 'border-gray-200 dark:border-white/10'
              }`}>
                <Quote className="w-10 h-10 text-orange-500/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                  ))}
                </div>

                <p className="text-gray-700 dark:text-white/80 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-white/10">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-orange-500/10">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-white/60">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
