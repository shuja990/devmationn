import Link from 'next/link';
import { Mail } from 'lucide-react';
import { LinkedinIcon } from '@/components/brand/SocialIcons';

import { Logo } from '@/components/brand/Logo';
import { Container } from '@/components/ui';
import { footerNav, site } from '@/content/site';

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface/40">
      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <Link href="/" aria-label="DevMations — home">
              <Logo />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-ink-muted">
              An AI engineering agency. We build agents, evaluation systems and the products around
              them.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <SocialLink href={site.socials.linkedin} label="LinkedIn">
                <LinkedinIcon className="size-4" />
              </SocialLink>
              <SocialLink href={`mailto:${site.email}`} label="Email">
                <Mail className="size-4" />
              </SocialLink>
            </div>
          </div>

          {footerNav.map((group) => (
            <div key={group.heading} className="flex flex-col gap-3">
              <p className="font-mono text-[0.625rem] tracking-[0.16em] text-ink-subtle uppercase">
                {group.heading}
              </p>
              <ul className="flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-muted transition-colors hover:text-ink"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 border-t border-line py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-ink-subtle">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="font-mono text-xs text-ink-muted transition-colors hover:text-ink"
          >
            {site.email}
          </a>
        </div>
      </Container>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noreferrer noopener'}
      className="inline-flex size-9 items-center justify-center rounded-lg bg-surface-2 text-ink-muted transition-colors hover:bg-surface-3 hover:text-ink"
    >
      {children}
    </a>
  );
}
