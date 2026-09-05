import { ArrowRight, CalendarDays, Fingerprint, Users } from 'lucide-react';
import Link from 'next/link';
import { ScrambleTitle } from '@/components/scramble-title';
import { ContentCard, FieldPrompt, SiteShell } from '@/components/site-shell';

const members = ['Member One', 'Member Two', 'Member Three'];

export default function Home() {
  return (
    <SiteShell currentPath="/">
      <section className="relative overflow-hidden border-b border-white/10 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div
          className="scan-grid absolute inset-0 opacity-55"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div>
            <div className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              <span className="h-px w-10 bg-primary" />
              CSI 4460 / 5460 · Fall 2026
            </div>
            <p className="font-mono text-sm text-white/55">
              GROUP IDENTIFIER / EDIT BELOW
            </p>
            <h1 className="mt-3 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-7xl">
              <ScrambleTitle prefix="Project " accent="Slopcode" />
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/66">
              Replace this line with a precise one-sentence description of your
              cybersecurity research topic.
            </p>
          </div>

          <div className="border-l-2 border-primary bg-white/[0.035] p-6 backdrop-blur-sm">
            <div className="mb-5 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/45">
                Research unit
              </span>
              <Users className="h-5 w-5 text-primary" aria-hidden="true" />
            </div>
            <ul className="space-y-4">
              {members.map((member, index) => (
                <li
                  key={member}
                  className="flex items-center gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                >
                  <span className="font-mono text-xs text-primary">
                    0{index + 1}
                  </span>
                  <span className="text-base font-medium text-white">
                    {member}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-background px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                01 / Proposal
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                Define the research mission.
              </h2>
              <p className="mt-5 max-w-md leading-7 text-muted-foreground">
                The proposal is concise, specific, and built around an original
                cybersecurity research question.
              </p>
              <div className="mt-8 flex items-center gap-3 border-y border-border py-4 font-mono text-sm">
                <CalendarDays
                  className="h-4 w-4 text-primary"
                  aria-hidden="true"
                />
                Due September 26, 2026
              </div>
            </div>

            <div className="space-y-4">
              <ContentCard number="01" title="Problem statement">
                <FieldPrompt>
                  What security problem are you solving? Define the system,
                  users, threat, and scope in concrete terms.
                </FieldPrompt>
              </ContentCard>
              <ContentCard number="02" title="Why it matters">
                <FieldPrompt>
                  Explain the impact of the problem and why it is important or
                  interesting to information security.
                </FieldPrompt>
              </ContentCard>
              <ContentCard number="03" title="Research question & contribution">
                <FieldPrompt>
                  State the central question and the new design, analysis,
                  implementation, experiment, or review you expect to
                  contribute.
                </FieldPrompt>
              </ContentCard>
              <ContentCard number="04" title="Key research challenges">
                <FieldPrompt>
                  Identify the hardest technical or methodological uncertainties
                  the team must resolve.
                </FieldPrompt>
              </ContentCard>
              <ContentCard number="05" title="Plan of attack">
                <FieldPrompt>
                  Describe your methods, evaluation criteria, datasets, tools,
                  prototype, simulation, or analytical approach.
                </FieldPrompt>
              </ContentCard>
              <ContentCard number="06" title="Milestones & resources">
                <FieldPrompt>
                  List dated milestones through December 13 and note any special
                  resources or instructor support you may need.
                </FieldPrompt>
              </ContentCard>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-5 border border-primary/35 bg-primary/5 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <Fingerprint
                className="mt-0.5 h-6 w-6 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div>
                <p className="font-semibold">Next checkpoint</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Document early research, decisions, and evidence in the first
                  progress report.
                </p>
              </div>
            </div>
            <Link
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
              href="/progress-one"
            >
              Open report template{' '}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
