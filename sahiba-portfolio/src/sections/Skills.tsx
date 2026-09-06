import FadeContent from "../reactbits/FadeContent";
import { portfolio } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="bg-card/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <FadeContent blur duration={1200}>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Tech stack
          </h2>
        </FadeContent>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.skills.map((skill, index) => (
            <FadeContent key={skill.name} blur delay={80 + index * 60} duration={1200}>
              <div className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30">
                <span className="font-display text-lg font-medium">{skill.name}</span>
                <p className="mt-1 text-sm text-muted-foreground">{skill.note}</p>
              </div>
            </FadeContent>
          ))}
        </div>

        <FadeContent blur delay={300} duration={1200}>
          <h3 className="mt-12 font-display text-xl font-semibold">Tools & services</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {portfolio.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
