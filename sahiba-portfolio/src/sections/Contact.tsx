import Github from "../components/Github";
import { Mail, Phone } from "lucide-react";
import FadeContent from "../reactbits/FadeContent";
import Magnet from "../reactbits/Magnet";
import ShinyText from "../reactbits/ShinyText";
import { portfolio } from "../data/content";

const socialLinks = [
  { icon: Mail, label: "Email", href: `mailto:${portfolio.email}` },
  { icon: Phone, label: "Phone", href: `tel:${portfolio.phone}` },
  { icon: Github, label: "GitHub", href: portfolio.social.github },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-card/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <FadeContent blur duration={1200}>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Let's build something together
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            I'm open for freelance and full-time opportunities. If you have a project in mind, let's talk.
          </p>
        </FadeContent>

        <FadeContent blur delay={200} duration={1200}>
          <a
            href={`mailto:${portfolio.email}`}
            className="mt-10 inline-block font-display text-2xl font-medium text-gradient transition-transform hover:scale-105 sm:text-3xl"
          >
            <ShinyText text={portfolio.email} speed={4} />
          </a>
        </FadeContent>

        <FadeContent blur delay={350} duration={1200}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((link) => (
              <Magnet key={link.label} padding={40} magnetStrength={2.5}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </a>
              </Magnet>
            ))}
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
