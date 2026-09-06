import Github from "../components/Github";
import { ArrowDown } from "lucide-react";
import BlurText from "../reactbits/BlurText";
import ShinyText from "../reactbits/ShinyText";
import Magnet from "../reactbits/Magnet";
import { portfolio } from "../data/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-1/4 h-[40rem] w-[40rem] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -right-1/4 bottom-1/4 h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <span className="mb-6 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground">
          {portfolio.availability}
        </span>

        <BlurText
          text={`Hi, I'm ${portfolio.name}`}
          delay={80}
          animateBy="words"
          className="font-display text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        />

        <h1 className="mt-6 font-display text-2xl font-medium text-gradient sm:text-3xl lg:text-4xl">
          <ShinyText text={portfolio.title} speed={3} />
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {portfolio.tagline}
        </p>

        <p className="mt-4 text-sm text-muted-foreground">
          {portfolio.phone} · {portfolio.email} · {portfolio.location}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Magnet padding={60} magnetStrength={3}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition-transform hover:scale-105"
            >
              View work
              <ArrowDown className="h-4 w-4" />
            </a>
          </Magnet>

          <Magnet padding={60} magnetStrength={3}>
            <a
              href={portfolio.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-8 py-4 font-medium transition-colors hover:border-primary/40"
            >
              GitHub
              <Github className="h-4 w-4" />
            </a>
          </Magnet>
        </div>
      </div>
    </section>
  );
}
