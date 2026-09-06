import FadeContent from "../reactbits/FadeContent";
import { portfolio } from "../data/content";

export default function Resume() {
  return (
    <section id="resume" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <FadeContent blur duration={1200}>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Education
            </h2>
          </FadeContent>
          <div className="mt-8 space-y-6">
            {portfolio.education.map((item, index) => (
              <FadeContent key={item.degree} blur delay={150 + index * 100} duration={1200}>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-display text-lg font-medium">{item.degree}</h3>
                  <p className="mt-1 text-muted-foreground">{item.school}</p>
                  <p className="mt-2 text-sm text-primary">
                    {item.period} · {item.location}
                  </p>
                </div>
              </FadeContent>
            ))}
          </div>
        </div>

        <div>
          <FadeContent blur duration={1200}>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Certifications
            </h2>
          </FadeContent>
          <div className="mt-8 space-y-6">
            {portfolio.certifications.map((item, index) => (
              <FadeContent key={item.title} blur delay={150 + index * 100} duration={1200}>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-display text-lg font-medium">{item.title}</h3>
                  <p className="mt-1 text-muted-foreground">{item.issuer}</p>
                </div>
              </FadeContent>
            ))}
          </div>

          <FadeContent blur delay={350} duration={1200}>
            <h3 className="mt-10 font-display text-xl font-semibold">Languages</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {portfolio.languages.map((language) => (
                <span
                  key={language}
                  className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground"
                >
                  {language}
                </span>
              ))}
            </div>
          </FadeContent>

          <FadeContent blur delay={450} duration={1200}>
            <h3 className="mt-8 font-display text-xl font-semibold">Interests</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {portfolio.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground"
                >
                  {interest}
                </span>
              ))}
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  );
}
