'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui';
import { contactSchema, type ContactInput } from '@/lib/contact-schema';
import { services } from '@/content/services';
import { site } from '@/content/site';
import { cn } from '@/lib/utils';

/**
 * Contact form.
 *
 * Validated with the same Zod schema the route handler uses, so the two can
 * never disagree. Client validation here is a convenience only -- the server
 * re-validates everything, because this one is trivially bypassed.
 */
export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', company: '', service: '', message: '', website: '' },
  });

  const onSubmit = async (values: ContactInput) => {
    setStatus('sending');
    setServerError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setServerError(data.error ?? 'Something went wrong. Please try again.');
        setStatus('error');
        return;
      }

      reset();
      setStatus('sent');
    } catch {
      setServerError(`Could not reach the server. Please email us at ${site.email}.`);
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="rounded-[var(--radius-card)] bg-surface p-8 ring-line">
        <h2 className="mb-2 text-[1.25rem] font-semibold">Thanks — that reached us.</h2>
        <p className="text-[0.9375rem] leading-relaxed text-ink-muted">
          We read everything that comes in and reply within one working day. If it is urgent, email{' '}
          <a href={`mailto:${site.email}`} className="text-brand-tint hover:text-brand">
            {site.email}
          </a>{' '}
          directly.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus('idle')}>
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      {/* Honeypot. Hidden from people, irresistible to bots. */}
      <div aria-hidden="true" className="absolute h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name" error={errors.name?.message} required>
          <input
            id="name"
            type="text"
            autoComplete="name"
            className={inputClass(!!errors.name)}
            {...register('name')}
          />
        </Field>

        <Field label="Email" htmlFor="email" error={errors.email?.message} required>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={inputClass(!!errors.email)}
            {...register('email')}
          />
        </Field>

        <Field label="Company" htmlFor="company" error={errors.company?.message}>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            className={inputClass(!!errors.company)}
            {...register('company')}
          />
        </Field>

        <Field label="What is this about?" htmlFor="service" error={errors.service?.message}>
          <select id="service" className={inputClass(!!errors.service)} {...register('service')}>
            <option value="">Not sure yet</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Something else">Something else</option>
          </select>
        </Field>
      </div>

      <Field
        label="What are you trying to do?"
        htmlFor="message"
        error={errors.message?.message}
        required
        hint="A paragraph is plenty. What you have now, and what is going wrong with it, is the most useful thing to tell us."
      >
        <textarea
          id="message"
          rows={6}
          className={cn(inputClass(!!errors.message), 'resize-y')}
          {...register('message')}
        />
      </Field>

      {serverError ? (
        <p role="alert" className="text-sm text-fail">
          {serverError}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send it'}
        </Button>
        <p className="text-xs text-ink-subtle">We reply within one working day.</p>
      </div>
    </form>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    'w-full rounded-lg bg-surface px-3.5 py-2.5 text-[0.9375rem] text-ink transition-colors',
    'ring-line placeholder:text-ink-subtle',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand',
    hasError && 'ring-2 ring-fail',
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label}
        {required ? (
          <span className="ml-1 text-brand" aria-hidden="true">
            *
          </span>
        ) : null}
      </label>
      {hint ? <p className="text-xs leading-relaxed text-ink-subtle">{hint}</p> : null}
      {children}
      {error ? (
        <p role="alert" className="text-xs text-fail">
          {error}
        </p>
      ) : null}
    </div>
  );
}
