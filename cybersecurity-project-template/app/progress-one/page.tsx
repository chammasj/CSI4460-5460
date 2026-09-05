import type { Metadata } from 'next';
import {
  ContentCard,
  FieldPrompt,
  PageIntro,
  ReportBody,
  SiteShell,
} from '@/components/site-shell';

export const metadata: Metadata = { title: 'First Progress Report' };

export default function FirstProgressReport() {
  return (
    <SiteShell currentPath="/progress-one">
      <PageIntro
        eyebrow="02 / Status checkpoint"
        title="First Progress Report"
        description="A concise record of what the team has learned, built, tested, and changed since the proposal."
        due="October 24, 2026"
      />
      <ReportBody>
        <ContentCard number="01" title="Executive status">
          <FieldPrompt>
            In 3–5 sentences, state whether the project is on track and
            summarize the most important development.
          </FieldPrompt>
        </ContentCard>
        <ContentCard number="02" title="Work completed">
          <FieldPrompt>
            List the research, design, analysis, implementation,
            experimentation, or review work completed so far.
          </FieldPrompt>
        </ContentCard>
        <ContentCard number="03" title="Evidence & early findings">
          <FieldPrompt>
            Present concrete evidence: literature reviewed, prototype behavior,
            experiment setup, data collected, or analytical findings.
          </FieldPrompt>
        </ContentCard>
        <ContentCard number="04" title="Challenges & decisions">
          <FieldPrompt>
            Describe blockers, unexpected results, scope changes, and the
            reasoning behind any important decisions.
          </FieldPrompt>
        </ContentCard>
        <ContentCard number="05" title="Plan to checkpoint two">
          <FieldPrompt>
            Define the next deliverables, owners, and target dates leading to
            the second report on November 14.
          </FieldPrompt>
        </ContentCard>
        <ContentCard number="06" title="Team contributions">
          <FieldPrompt>
            Briefly identify each member’s contributions and immediate
            responsibilities.
          </FieldPrompt>
        </ContentCard>
      </ReportBody>
    </SiteShell>
  );
}
