import type { Metadata } from 'next';
import { Download, Presentation } from 'lucide-react';
import {
  ContentCard,
  FieldPrompt,
  PageIntro,
  ReportBody,
  SiteShell,
} from '@/components/site-shell';

export const metadata: Metadata = { title: 'Final Report' };

export default function FinalReport() {
  return (
    <SiteShell currentPath="/final-report">
      <PageIntro
        eyebrow="04 / Research record"
        title="Final Report"
        description="Publish the team’s conference-style technical paper and preserve the core research contribution in a clear, readable format."
        due="December 13, 2026 · 1:00 PM"
      />
      <ReportBody>
        <section className="mb-8 grid gap-4 sm:grid-cols-2">
          <a
            href="#report-link"
            className="group border border-primary/40 bg-primary/5 p-6 transition-colors hover:border-primary"
          >
            <Download className="h-6 w-6 text-primary" aria-hidden="true" />
            <h2 className="mt-5 font-semibold">Final paper</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Replace this link with the HTML or Word version of your technical
              paper.
            </p>
          </a>
          <a
            href="#slides-link"
            className="group border border-border bg-card p-6 transition-colors hover:border-primary/50"
          >
            <Presentation className="h-6 w-6 text-primary" aria-hidden="true" />
            <h2 className="mt-5 font-semibold">Presentation slides</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Replace this link with the slides used for the December 12
              presentation.
            </p>
          </a>
        </section>

        <ContentCard number="01" title="Abstract">
          <FieldPrompt>
            Summarize the problem, method, most important result, and research
            contribution.
          </FieldPrompt>
        </ContentCard>
        <ContentCard number="02" title="Problem & motivation">
          <FieldPrompt>
            State the problem precisely and explain why it is important or
            interesting to cybersecurity.
          </FieldPrompt>
        </ContentCard>
        <ContentCard number="03" title="Related work">
          <FieldPrompt>
            Compare the project to relevant prior systems, techniques, and
            research. Make the distinction from earlier work explicit.
          </FieldPrompt>
        </ContentCard>
        <ContentCard number="04" title="Methodology / system design">
          <FieldPrompt>
            Present the research approach thoroughly enough for readers to
            understand and assess the work.
          </FieldPrompt>
        </ContentCard>
        <ContentCard number="05" title="Evaluation & results">
          <FieldPrompt>
            Report experiments, analysis, implementation outcomes, or review
            findings with appropriate evidence.
          </FieldPrompt>
        </ContentCard>
        <ContentCard number="06" title="Research contributions">
          <FieldPrompt>
            Clearly enumerate what the project adds to existing knowledge or
            practice in information security.
          </FieldPrompt>
        </ContentCard>
        <ContentCard number="07" title="Limitations & conclusions">
          <FieldPrompt>
            Discuss limitations, draw supported conclusions, and identify
            worthwhile future work.
          </FieldPrompt>
        </ContentCard>
        <ContentCard number="08" title="References">
          <FieldPrompt>
            List every cited source in one consistent academic citation style.
          </FieldPrompt>
        </ContentCard>

        <aside className="mt-8 border-l-2 border-primary bg-primary/5 p-5 text-sm leading-6 text-muted-foreground">
          The guidelines set no formal page limit; most reports are expected to
          be about 7–15 pages and are evaluated on technical content, not
          length. Submit in HTML or Word format, link the file here, and send
          the project URL to the TA.
        </aside>
      </ReportBody>
    </SiteShell>
  );
}
