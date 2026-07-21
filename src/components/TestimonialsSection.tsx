import { motion } from "motion/react";

const testimonials = [
  {
    name: "Abdullah Albar",
    role: "CEO & Founder, Kaptain",
    content:
      "Great experience working with him. He redesigned the 2 UIs and built a clean, well-structured admin panel. Very easy to communicate with, understood the product well, and delivered high-quality work.",
    url: "https://www.upwork.com/freelancers/~01460a8313a82b3237",
  },
  {
    name: "Oxana Demchenko",
    content:
      "I enjoyed working with Ahmed and will likely have additional jobs for him in the future.",
    url: "https://www.upwork.com/freelancers/~01460a8313a82b3237",
  },
  {
    name: "Ted Stevenson",
    role: "Senior User Researcher, Amazon",
    content:
      "Good advice in user research interview for online course/marketing materials.",
    url: "https://www.upwork.com/freelancers/~01460a8313a82b3237",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
            Testimonials
          </span>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            What Clients Say
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.a
              key={i}
              href={t.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group block rounded-sm border border-border p-6 transition-colors hover:border-gold/30"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className="h-3 w-3 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">
                  {t.name}
                </p>
                {t.role && (
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {t.role}
                  </p>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
