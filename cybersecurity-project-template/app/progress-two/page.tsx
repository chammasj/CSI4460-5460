import type { Metadata } from 'next';
import {
  ContentCard,
  FieldPrompt,
  PageIntro,
  ReportBody,
  SiteShell,
} from '@/components/site-shell';

export const metadata: Metadata = { title: 'Second Progress Report' };

export default function SecondProgressReport() {
  return (
    <SiteShell currentPath="/progress-two">
      <PageIntro
        eyebrow="03 / Validation checkpoint"
        title="Second Progress Report"
        description="Show that the core research is converging and define the remaining path to presentation and final submission."
        due="November 14, 2026"
      />
      <ReportBody>
        <ContentCard number="01" title="Current status">
          <FieldPrompt>
            Summarize overall progress, current confidence, and the central
            claim or outcome beginning to emerge.
          </FieldPrompt>
        </ContentCard>
        <ContentCard number="02" title="Results since checkpoint one">
          <FieldPrompt>
            Document completed experiments, implementation milestones, analysis,
            review synthesis, or security evaluation.
          </FieldPrompt>
        </ContentCard>
        <ContentCard number="03" title="What the evidence says">
          <FieldPrompt>
            Interpret the strongest results. Explain what they support, what
            remains uncertain, and any limitations.
          </FieldPrompt>
        </ContentCard>
        <ContentCard number="04" title="Remaining risks">
          <FieldPrompt>
            Identify open technical issues, research gaps, resource needs, and
            mitigation plans.
          </FieldPrompt>
        </ContentCard>
        <ContentCard number="05" title="Final execution plan">
          <FieldPrompt>
            Set dated milestones for completing the research, drafting the
            paper, preparing the December 12 presentation, and publishing the
            final report.
          </FieldPrompt>
        </ContentCard>
        <ContentCard number="06" title="Team contributions">
          <FieldPrompt>
            Record each member’s work since the first report and final-stage
            ownership.
          </FieldPrompt>
        </ContentCard>
      </ReportBody>
    </SiteShell>
  );
}
