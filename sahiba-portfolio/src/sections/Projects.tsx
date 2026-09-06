import Github from "../components/Github";
import { ExternalLink } from "lucide-react";
import FadeContent from "../reactbits/FadeContent";
import SpotlightCard from "../reactbits/SpotlightCard";
import { portfolio } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeContent blur duration={1200}>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Full-stack and frontend projects spanning real-time apps, e-commerce, and everyday tools.
          </p>
        </FadeContent>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.projects.map((project, index) => (
            <FadeContent key={project.id} blur delay={150 + index * 100} duration={1200}>
              <SpotlightCard
                className="group h-full bg-card/50"
                spotlightColor="rgba(147, 197, 253, 0.18)"
              >
                <div className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-semibold">
                      {project.title}
                    </h3>
                    <span className="shrink-0 text-sm text-muted-foreground">
                      {project.year}
                    </span>
                  </div>

                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-5">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-accent"
                    >
                      Live preview
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Code
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
