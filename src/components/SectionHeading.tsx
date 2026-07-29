import type { ReactNode } from 'react';
import Reveal from './Reveal';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  children,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignCls = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';
  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignCls} ${className}`}>
      {eyebrow && (
        <Reveal as="p" className="smallcaps text-xs text-brass-deep">
          {eyebrow}
        </Reveal>
      )}
      <Reveal as="h2" className="font-display text-4xl font-light leading-[1.1] text-charcoal text-balance sm:text-5xl">
        {title}
      </Reveal>
      {children && (
        <Reveal delay={0.1} className="mt-2 text-base font-light leading-relaxed text-charcoal-soft">
          {children}
        </Reveal>
      )}
    </div>
  );
}
