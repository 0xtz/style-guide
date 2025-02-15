import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center space-y-4 py-12 px-4 text-center md:py-24 lg:py-32 border-b border-border/50">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04)_0%,rgba(51, 51, 51)_80%)] dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0)_100%)]"></div>
        <div className="space-y-4">
          <div className="inline-block rounded-full px-3 py-1 text-xs sm:text-sm border border-border/50 bg-background">
            v0.0.1
          </div>

          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Your Team-Level Style Guide
          </h1>
          <p className="mx-auto max-w-[700px] text-sm text-muted-foreground sm:text-base md:text-lg">
            The ultimate guide to maintaining a clean, consistent, and scalable
            codebase. Designed to help teams write clear, maintainable, and
            high-quality code that stands the test of time.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            className={buttonVariants({
              variant: "default",
              size: "lg",
            })}
            href="/docs"
          >
            Open Docs
          </Link>

          <Link
            className={buttonVariants({
              variant: "outline",
              size: "lg",
            })}
            href="https://github.com/0xtz/style-guide"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contribute
          </Link>
        </div>
      </section>

      {/* Key Sections */}
      <section id="features" className="container space-y-6 py-12 md:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
            Key Sections
          </h2>
          <p className="max-w-[85%] text-sm text-muted-foreground sm:text-base">
            Essential components of our comprehensive guide
          </p>
        </div>

        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {[
            {
              title: "Why This Guide?",
              description: [
                "Set clear coding standards to improve collaboration.",
                "Ensure long-term maintainability and scalability.",
                "Reduce technical debt and onboarding time for new developers.",
              ],
            },
            {
              title: "What's Inside?",
              description: [
                "✔ Code style rules & best practices",
                "✔ Folder structures & naming conventions",
                "✔ Performance optimizations",
                "✔ Common pitfalls & how to avoid them",
                "✔ Team collaboration guidelines",
              ],
            },
            {
              title: "Who Is This For?",
              description: [
                "Teams working on large-scale React/Next.js applications",
                "Developers who care about clean, maintainable code",
                "Organizations aiming for long-term scalability",
              ],
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border border-border/50 bg-background p-6 transition-all hover:border-foreground/20"
            >
              <div className="space-y-2 text-start">
                <h3 className="font-bold">{feature.title}</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {feature.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container space-y-6 py-12 md:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <p className="text-sm text-muted-foreground">
            {/* // TODO: add footer ? maybe */}
            no need for footer now ⚡
          </p>
        </div>
      </footer>
    </main>
  );
}
