import FadeContent from "../reactbits/FadeContent";
import { portfolio } from "../data/content";

export default function About() {
  return (
    <section id="about" className="bg-card/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <FadeContent blur duration={1200}>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            About me
          </h2>
        </FadeContent>

        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-16">
          <FadeContent blur delay={150} duration={1200}>
            <p className="text-lg leading-relaxed text-foreground">
              {portfolio.about.intro}
            </p>
          </FadeContent>

          <div className="space-y-6">
            {portfolio.about.paragraphs.map((paragraph, index) => (
              <FadeContent key={index} blur delay={250 + index * 100} duration={1200}>
                <p className="leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              </FadeContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
