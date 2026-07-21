import { motion } from "motion/react";
import { Mail, Phone, Linkedin } from "lucide-react";

const contacts = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "ahmed2077emad@gmail.com",
    href: "mailto:ahmed2077emad@gmail.com",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone",
    value: "+20 102 160 1622",
    href: "tel:+201021601622",
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
    value: "Ahmed Emad",
    href: "https://www.linkedin.com/in/ahmed5emad",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border px-6 py-48">
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
            Contact
          </span>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            Let&apos;s Work Together
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Have a project in mind? I&apos;m always interested in hearing about
            new opportunities.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.label === "LinkedIn" ? "_blank" : undefined}
              rel={c.label === "LinkedIn" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex flex-col items-center gap-3 rounded-sm border border-border p-6 transition-colors hover:border-gold/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                {c.icon}
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{c.label}</p>
                <p className="text-sm text-foreground group-hover:text-gold transition-colors">
                  {c.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 border-t border-border pt-8"
        >
          <p className="font-mono text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Ahmed Emad. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
