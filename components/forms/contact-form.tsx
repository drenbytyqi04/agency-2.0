'use client'

import { useRef, useState } from 'react'

import { Button } from '@/components/ui/button'

type Status = 'idle' | 'loading' | 'success' | 'error'

const BUDGETS = ['Nën 700€', '700€–1.500€', '1.500€–3.000€', 'Mbi 3.000€', 'Nuk jam i sigurt']

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const fieldClass =
  'w-full min-h-[48px] border border-line bg-transparent px-4 py-3 font-sans text-base text-ink placeholder:text-muted/50 transition-colors duration-200 focus:border-accent focus:outline-none'

interface FormValues {
  name: string
  email: string
  business: string
  budget: string
  message: string
}

const EMPTY: FormValues = { name: '', email: '', business: '', budget: '', message: '' }

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({})
  const [status, setStatus] = useState<Status>('idle')
  const [feedback, setFeedback] = useState('')
  const summaryRef = useRef<HTMLDivElement>(null)

  const update = (field: keyof FormValues) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setValues((previous) => ({ ...previous, [field]: event.target.value }))
  }

  /** Validated on blur, not on every keystroke, so errors don't fire mid-typing. */
  const validateField = (field: keyof FormValues) => () => {
    setErrors((previous) => ({ ...previous, [field]: fieldError(field, values[field]) }))
  }

  function fieldError(field: keyof FormValues, value: string): string | undefined {
    if (field === 'name' && value.trim().length < 2) return 'Shkruaj emrin.'
    if (field === 'email' && !EMAIL_PATTERN.test(value.trim()))
      return 'Shkruaj një email të vlefshëm.'
    if (field === 'message' && value.trim().length < 10)
      return 'Përshkruaj shkurt projektin (të paktën 10 karaktere).'
    return undefined
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextErrors: Partial<Record<keyof FormValues, string>> = {}
    for (const field of ['name', 'email', 'message'] as const) {
      const error = fieldError(field, values[field])
      if (error) nextErrors[field] = error
    }

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('error')
      setFeedback('Disa fusha kërkojnë vëmendje.')
      // Move focus to the summary so keyboard and screen reader users land on the problem.
      requestAnimationFrame(() => summaryRef.current?.focus())
      return
    }

    setStatus('loading')
    setFeedback('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const result = await response.json()

      if (!response.ok) {
        setErrors(result.errors ?? {})
        setStatus('error')
        setFeedback(result.error ?? 'Kërkesa nuk u dërgua. Provo përsëri.')
        requestAnimationFrame(() => summaryRef.current?.focus())
        return
      }

      setStatus('success')
      setFeedback(result.message ?? 'Faleminderit. Do të kthehemi së shpejti.')
      setValues(EMPTY)
    } catch {
      setStatus('error')
      setFeedback('Diçka shkoi keq. Provo përsëri ose na shkruaj me email.')
      requestAnimationFrame(() => summaryRef.current?.focus())
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="border border-accent/40 bg-surface p-10"
      >
        <span aria-hidden="true" className="mb-6 block h-px w-10 bg-accent" />
        <h3 className="font-display text-3xl uppercase leading-none text-ink">Kërkesa u dërgua</h3>
        <p className="mt-4 font-sans text-sm text-muted">{feedback}</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="link-underline mt-8 font-sans text-[12px] uppercase tracking-[0.16em] text-accent"
        >
          Dërgo një kërkesë tjetër
        </button>
      </div>
    )
  }

  const errorList = Object.entries(errors).filter(([, message]) => Boolean(message))

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Error summary: focusable, announced, and links each item to its field. */}
      <div ref={summaryRef} tabIndex={-1} aria-live="polite" className="focus:outline-none">
        {status === 'error' && errorList.length > 0 && (
          <div role="alert" className="border border-danger/50 bg-danger/5 p-5">
            <p className="font-sans text-sm text-danger">{feedback}</p>
            <ul className="mt-3 space-y-1">
              {errorList.map(([field, message]) => (
                <li key={field}>
                  <a href={`#${field}`} className="link-underline font-sans text-sm text-danger">
                    {message}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        {status === 'error' && errorList.length === 0 && feedback && (
          <p role="alert" className="border border-danger/50 bg-danger/5 p-5 font-sans text-sm text-danger">
            {feedback}
          </p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id="name"
          label="Emri"
          required
          value={values.name}
          error={errors.name}
          onChange={update('name')}
          onBlur={validateField('name')}
          autoComplete="name"
        />
        <Field
          id="email"
          label="Email"
          type="email"
          required
          value={values.email}
          error={errors.email}
          onChange={update('email')}
          onBlur={validateField('email')}
          autoComplete="email"
          inputMode="email"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id="business"
          label="Biznesi"
          value={values.business}
          onChange={update('business')}
          autoComplete="organization"
          hint="Opsionale"
        />

        <div>
          <label htmlFor="budget" className="eyebrow mb-2 block">
            Buxheti <span className="text-muted/60">· Opsionale</span>
          </label>
          <select
            id="budget"
            name="budget"
            value={values.budget}
            onChange={update('budget')}
            className={`${fieldClass} cursor-pointer`}
          >
            <option value="">Zgjidh një interval</option>
            {BUDGETS.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="eyebrow mb-2 block">
          Mesazhi <span aria-hidden="true" className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          value={values.message}
          onChange={update('message')}
          onBlur={validateField('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : 'message-hint'}
          placeholder="Çfarë po ndërton dhe çfarë duhet të arrijë?"
          className={`${fieldClass} resize-y`}
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 font-sans text-xs text-danger">
            {errors.message}
          </p>
        ) : (
          <p id="message-hint" className="mt-2 font-sans text-xs text-muted">
            Sa më konkret, aq më e saktë përgjigjja jonë.
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-5 pt-2">
        <Button type="submit" disabled={status === 'loading'} className="disabled:opacity-60">
          {status === 'loading' ? 'Duke dërguar…' : 'Dërgo kërkesën'}
        </Button>
        <p className="font-sans text-xs text-muted">Përgjigjemi brenda 24 orësh, ditëve të punës.</p>
      </div>
    </form>
  )
}

interface FieldProps {
  id: keyof FormValues
  label: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: () => void
  error?: string
  required?: boolean
  type?: string
  autoComplete?: string
  inputMode?: 'email' | 'text' | 'tel'
  hint?: string
}

function Field({
  id,
  label,
  value,
  onChange,
  onBlur,
  error,
  required,
  type = 'text',
  autoComplete,
  inputMode,
  hint,
}: FieldProps) {
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined

  return (
    <div>
      <label htmlFor={id} className="eyebrow mb-2 block">
        {label}{' '}
        {required ? (
          <span aria-hidden="true" className="text-accent">
            *
          </span>
        ) : (
          hint && <span className="text-muted/60">· {hint}</span>
        )}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        className={fieldClass}
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 font-sans text-xs text-danger">
          {error}
        </p>
      )}
    </div>
  )
}
