import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PageHeader } from '@/components/blocks/PageHeader';
import { CtaBand } from '@/components/blocks/CtaBand';
import { Container, Section, Badge, ButtonLink } from '@/components/ui';
import { JsonLd } from '@/components/JsonLd';
import { jobPostingSchema, breadcrumbSchema } from '@/lib/schema';
import { roles, getRole } from '@/content/roles';
import { site } from '@/content/site';

export function generateStaticParams() {
  return roles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role) return {};

  return {
    title: role.title,
    description: role.summary,
    alternates: { canonical: `/careers/${role.slug}` },
  };
}

export default async function RolePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role) notFound();

  const trail = [
    { name: 'Home', href: '/' },
    { name: 'Careers', href: '/careers' },
    { name: role.title, href: `/careers/${role.slug}` },
  ];

  return (
    <>
      <JsonLd
        schema={[
          jobPostingSchema({
            slug: role.slug,
            title: role.title,
            description: `${role.summary} ${role.about}`,
            employmentType: role.employmentType,
            location: role.location,
            posted: role.posted,
          }),
          breadcrumbSchema(trail),
        ]}
      />

      <PageHeader eyebrow={role.team} title={role.title} answer={role.summary} breadcrumb={trail}>
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <Badge tone="brand">{role.employmentType.replace('_', '-').toLowerCase()}</Badge>
          <Badge>{role.location}</Badge>
          {!role.open ? <Badge tone="warn">Closed</Badge> : null}
        </div>
      </PageHeader>

      <Section>
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-10">
            <p className="text-[1.0625rem] leading-relaxed text-ink-muted">{role.about}</p>

            <RoleList title="What you will do" items={role.responsibilities} />
            <RoleList title="What we are looking for" items={role.requirements} />
            <RoleList title="Nice to have" items={role.niceToHave} />

            <div className="border-t border-line pt-8">
              <h2 className="mb-3 text-[1.25rem] font-semibold">How to apply</h2>
              <p className="mb-6 text-[0.9375rem] leading-relaxed text-ink-muted">
                Email {site.email} with the role in the subject line. Send something you built and a
                paragraph on what was hard about it — that tells us more than a CV does. No cover
                letter needed.
              </p>
              <ButtonLink href={`mailto:${site.email}?subject=${encodeURIComponent(role.title)}`}>
                Apply by email
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Not quite this role?"
        body="We read everything that comes in. If you do adjacent work well, tell us what you would want to be doing."
        action="Get in touch"
      />
    </>
  );
}

function RoleList({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;

  return (
    <div>
      <h2 className="mb-4 text-[1.25rem] font-semibold">{title}</h2>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-muted">
            <span className="mt-2 size-1 shrink-0 rounded-full bg-brand" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
