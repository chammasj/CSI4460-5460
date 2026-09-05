import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';

const navItems = [
  { href: '/', label: 'Front + Proposal', short: 'Proposal' },
  {
    href: '/progress-one',
    label: 'First Progress Report',
    short: 'Progress 01',
  },
  {
    href: '/progress-two',
    label: 'Second Progress Report',
    short: 'Progress 02',
  },
  { href: '/final-report', label: 'Final Report', short: 'Final' },
];

export function SiteShell({
  children,
  currentPath,
}: {
  children: ReactNode;
  currentPath: string;
}) {
  return (
    <div className="min-h-screen bg-[#081116] text-foreground">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#081116]/94 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] items-center gap-5 px-5 py-4 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3 text-white"
            aria-label="Project Cipher home"
          >
            <span className="grid h-9 w-9 place-items-center border border-primary/50 bg-primary/10">
              <ShieldCheck
                className="h-5 w-5 text-primary"
                aria-hidden="true"
              />
            </span>
            <span className="hidden text-sm font-semibold tracking-wide xl:inline">
              PROJECT CIPHER
            </span>
          </Link>

          <nav
            aria-label="Project sections"
            className="ml-auto min-w-0 overflow-x-auto"
          >
            <ul className="flex w-max items-center gap-1">
              {navItems.map((item, index) => {
                const active = item.href === currentPath;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={`group flex items-center gap-2 border px-3 py-2 text-sm transition-colors sm:px-4 ${
                        active
                          ? 'border-primary/60 bg-primary/10 text-white'
                          : 'border-transparent text-white/55 hover:border-white/10 hover:text-white'
                      }`}
                    >
                      <span className="font-mono text-[11px] text-primary/80">
                        0{index + 1}
                      </span>
                      <span className="hidden md:inline">{item.label}</span>
                      <span className="md:hidden">{item.short}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/10 bg-[#081116] px-5 py-8 text-white/45 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 font-mono text-xs uppercase tracking-[0.12em] sm:flex-row sm:items-center sm:justify-between">
          <span>CSI 4460 / 5460 · Fall 2026</span>
          <span>Replace all instructional text before submission</span>
        </div>
      </footer>
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
  due,
}: {
  eyebrow: string;
  title: string;
  description: string;
  due: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 px-5 py-14 sm:px-8 lg:px-12 lg:py-18">
      <div
        className="scan-grid absolute inset-0 opacity-45"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {eyebrow}
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/62">
              {description}
            </p>
          </div>
          <div className="border-l-2 border-primary px-5 py-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
              Submission deadline
            </p>
            <p className="mt-2 text-sm font-semibold text-white">{due}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContentCard({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="group grid border border-border bg-card transition-colors hover:border-primary/50 sm:grid-cols-[76px_1fr]">
      <div className="border-b border-border bg-muted/55 p-5 font-mono text-xs text-primary sm:border-b-0 sm:border-r">
        {number}
      </div>
      <div className="p-5 sm:p-6">
        <h2 className="text-lg font-semibold tracking-[-0.015em]">{title}</h2>
        <div className="mt-3">{children}</div>
      </div>
    </section>
  );
}

export function FieldPrompt({ children }: { children: ReactNode }) {
  return (
    <p className="border-l border-primary/40 pl-4 leading-7 text-muted-foreground">
      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
        Replace with your content
      </span>
      <br />
      {children}
    </p>
  );
}

export function ReportBody({ children }: { children: ReactNode }) {
  return (
    <section className="bg-background px-5 py-14 sm:px-8 lg:px-12 lg:py-18">
      <div className="mx-auto max-w-4xl space-y-4">{children}</div>
    </section>
  );
}
