'use client';

import { useEffect, useRef, useState } from 'react';

const SCRAMBLE_GLYPHS = '01<>[]{}#@$%&*?/\\';

export function ScrambleTitle({
  prefix,
  accent,
}: {
  prefix: string;
  accent: string;
}) {
  const finalText = `${prefix}${accent}`;
  const [displayText, setDisplayText] = useState(accent);
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (reducedMotion.matches) return;

    const startDelay = window.setTimeout(() => {
      const startedAt = performance.now();
      const duration = 1350;

      const scramble = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const revealedCharacters = Math.floor(progress * (accent.length + 2));

        setDisplayText(
          Array.from(accent)
            .map((character, index) => {
              if (character === ' ' || index < revealedCharacters) {
                return character;
              }

              return SCRAMBLE_GLYPHS[
                Math.floor(Math.random() * SCRAMBLE_GLYPHS.length)
              ];
            })
            .join(''),
        );

        if (progress < 1) {
          animationFrame.current = requestAnimationFrame(scramble);
        } else {
          setDisplayText(accent);
        }
      };

      animationFrame.current = requestAnimationFrame(scramble);
    }, 180);

    return () => {
      window.clearTimeout(startDelay);
      if (animationFrame.current !== null) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [accent]);

  return (
    <span aria-label={finalText}>
      <span aria-hidden="true">{prefix}</span>
      <span aria-hidden="true" className="text-primary">
        {displayText}
      </span>
      <span
        aria-hidden="true"
        className="scramble-cursor ml-[0.04em] inline-block animate-pulse font-mono text-primary"
      >
        _
      </span>
    </span>
  );
}
