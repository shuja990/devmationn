'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

import { Logo } from '@/components/brand/Logo';
import { Container, ButtonLink } from '@/components/ui';
import { ServiceIcon } from '@/components/brand/ServiceIcon';
import { aiServices, engineeringServices, serviceGroupLabels } from '@/content/services';
import { primaryNav } from '@/content/site';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close both menus on navigation, without an effect. Adjusting state
  // during render is the documented pattern for reacting to a changed value;
  // React discards this render and immediately re-runs with the new state.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setServicesOpen(false);
    setMobileOpen(false);
  }

  // Dismiss the mega-menu on outside click or Escape — the two gestures
  // people actually use to get out of a menu.
  useEffect(() => {
    if (!servicesOpen) return;

    const onClick = (e: MouseEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setServicesOpen(false);
    };

    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [servicesOpen]);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-colors duration-200',
        scrolled ? 'border-b border-line bg-canvas/85 backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between gap-4" aria-label="Main">
          <Link href="/" className="shrink-0" aria-label="DevMations — home">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            <li ref={servicesRef} className="relative">
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                className={cn(
                  'inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm transition-colors',
                  isActive('/services') ? 'text-ink' : 'text-ink-muted hover:text-ink',
                )}
              >
                Services
                <ChevronDown
                  className={cn('size-3.5 transition-transform', servicesOpen && 'rotate-180')}
                  aria-hidden="true"
                />
              </button>

              {servicesOpen ? (
                <div className="absolute top-full left-1/2 z-50 mt-2 w-[42rem] -translate-x-1/2 rounded-[var(--radius-card)] bg-surface p-2 shadow-2xl ring-line">
                  <div className="grid grid-cols-2 gap-2">
                    <MenuColumn heading={serviceGroupLabels.ai} services={aiServices} />
                    <div className="flex flex-col">
                      <MenuColumn
                        heading={serviceGroupLabels.engineering}
                        services={engineeringServices}
                      />
                      <Link
                        href="/services"
                        className="mt-auto rounded-lg px-3 py-2.5 text-sm text-brand-tint transition-colors hover:bg-surface-2"
                      >
                        All services &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              ) : null}
            </li>

            {primaryNav
              .filter((item) => item.href !== '/services')
              .map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'rounded-lg px-3 py-2 text-sm transition-colors',
                      isActive(item.href) ? 'text-ink' : 'text-ink-muted hover:text-ink',
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
          </ul>

          <div className="flex items-center gap-2">
            <ButtonLink href="/contact" size="sm" className="hidden sm:inline-flex">
              Book a call
            </ButtonLink>
            {!mobileOpen ? (
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-expanded={false}
                aria-label="Open menu"
                className="inline-flex size-10 items-center justify-center rounded-lg text-ink-muted transition-colors hover:text-ink lg:hidden"
              >
                <Menu className="size-5" />
              </button>
            ) : null}
          </div>
        </nav>
      </Container>

      {mobileOpen ? <MobileSheet onClose={() => setMobileOpen(false)} /> : null}
    </header>
  );
}

function MenuColumn({
  heading,
  services,
}: {
  heading: string;
  services: (typeof aiServices)[number][];
}) {
  return (
    <div className="flex flex-col">
      <p className="px-3 pt-2.5 pb-1.5 font-mono text-[0.625rem] tracking-[0.16em] text-ink-subtle uppercase">
        {heading}
      </p>
      {services.map((service) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          className="group flex gap-2.5 rounded-lg px-3 py-2 transition-colors hover:bg-surface-2"
        >
          <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md bg-brand/12 text-brand-tint">
            <ServiceIcon name={service.icon} className="size-3.5" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-medium text-ink">{service.shortTitle}</span>
            <span className="block text-xs leading-snug text-ink-subtle">{service.blurb}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}

function MobileSheet({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 top-0 z-50 flex flex-col bg-canvas lg:hidden">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex size-10 items-center justify-center rounded-lg text-ink-muted hover:text-ink"
          >
            <X className="size-5" />
          </button>
        </div>
      </Container>

      <div className="flex-1 overflow-y-auto pb-10">
        <Container>
          {[
            { heading: serviceGroupLabels.ai, items: aiServices },
            { heading: serviceGroupLabels.engineering, items: engineeringServices },
          ].map((group) => (
            <div key={group.heading}>
              <p className="pt-5 pb-2 font-mono text-[0.625rem] tracking-[0.16em] text-ink-subtle uppercase">
                {group.heading}
              </p>
              <ul className="flex flex-col">
                {group.items.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="block border-b border-line py-3 text-[0.9375rem] text-ink"
                    >
                      {service.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <ul className="flex flex-col pt-6">
            {primaryNav
              .filter((i) => i.href !== '/services')
              .concat([{ title: 'Contact', href: '/contact' }])
              .map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block border-b border-line py-3 text-[0.9375rem] text-ink"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
          </ul>

          <ButtonLink href="/contact" size="lg" className="mt-8 w-full">
            Book a call
          </ButtonLink>
        </Container>
      </div>
    </div>
  );
}
