'use client'

import { useRef, useState } from 'react'

import { Button } from '@/components/ui/button'

type Status = 'idle' | 'loading' | 'success' | 'error'

const BUDGETS = ['Under €700', '€700–€1,500', '€1,500–€3,000', 'Over €3,000', 'Not sure yet']

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

/** Freezes the current errors into the list the summary renders until the next submit. */
function toSummaryItems(
  errors: Partial<Record<keyof FormValues, string>>,
): Array<{ field: keyof FormValues; message: string }> {
  return (Object.entries(errors) as Array<[keyof FormValues, string | undefined]>)
    .filter((entry): entry is [keyof FormValues, string] => Boolean(entry[1]))
    .map(([field, message]) => ({ field, message }))
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({})
  const [status, setStatus] = useState<Status>('idle')
  const [feedback, setFeedback] = useState('')
  /**
   * The error summary is a snapshot of the last submit attempt, not a live view of `errors`.
   * Deriving it live resized the block while the user was still working: blurring the final
   * field cleared its error, the summary shrank, and the submit button moved out from under
   * the pointer between mousedown and mouseup — so the click never landed and the form
   * could not be submitted a second time.
   */
  const [summary, setSummary] = useState<{
    text: string
    items: Array<{ field: keyof FormValues; message: string }>
  } | null>(null)
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
    if (field === 'name' && value.trim().length < 2) return 'Please enter your name.'
    if (field === 'email' && !EMAIL_PATTERN.test(value.trim()))
      return 'Please enter a valid email address.'
    if (field === 'message' && value.trim().length < 10)
      return 'Tell us briefly about the project (at least 10 characters).'
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
      setSummary({ text: 'A few fields need your attention.', items: toSummaryItems(nextErrors) })
      // Move focus to the summary so keyboard and screen reader users land on the problem.
      requestAnimationFrame(() => summaryRef.current?.focus())
      return
    }

    setStatus('loading')
    setSummary(null)
    setFeedback('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const result = await response.json()

      if (!response.ok) {
        const serverErrors = (result.errors ?? {}) as Partial<Record<keyof FormValues, string>>
        setErrors(serverErrors)
        setStatus('error')
        setSummary({
          text: result.error ?? 'The request was not sent. Please try again.',
          items: toSummaryItems(serverErrors),
        })
        requestAnimationFrame(() => summaryRef.current?.focus())
        return
      }

      setStatus('success')
      setFeedback(result.message ?? 'Thank you. We will get back to you shortly.')
      setValues(EMPTY)
    } catch {
      setStatus('error')
      setSummary({
        text: 'Something went wrong. Please try again, or email us directly.',
        items: [],
      })
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
        <h3 className="font-display text-3xl uppercase leading-none text-ink">Request sent</h3>
        <p className="mt-4 font-sans text-sm text-muted">{feedback}</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="link-underline mt-8 font-sans text-[12px] uppercase tracking-[0.16em] text-accent"
        >
          Send another request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Error summary: focusable, announced, and links each item to its field. */}
      <div ref={summaryRef} tabIndex={-1} aria-live="polite" className="focus:outline-none">
        {summary && (
          <div role="alert" className="border border-danger/50 bg-danger/5 p-5">
            <p className="font-sans text-sm text-danger">{summary.text}</p>
            {summary.items.length > 0 && (
              <ul className="mt-3 space-y-1">
                {summary.items.map((item) => (
                  <li key={item.field}>
                    <a
                      href={`#${item.field}`}
                      className="link-underline font-sans text-sm text-danger"
                    >
                      {item.message}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
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
          label="Business"
          value={values.business}
          onChange={update('business')}
          autoComplete="organization"
          hint="Optional"
        />

        <div>
          <label htmlFor="budget" className="eyebrow mb-2 block">
            Budget <span className="text-muted/60">· Optional</span>
          </label>
          <select
            id="budget"
            name="budget"
            value={values.budget}
            onChange={update('budget')}
            className={`${fieldClass} cursor-pointer`}
          >
            <option value="">Choose a range</option>
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
          Message <span aria-hidden="true" className="text-accent">*</span>
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
          placeholder="What are you building, and what does it need to achieve?"
          className={`${fieldClass} resize-y`}
        />
        {/* One fixed-height slot: swapping hint for error must not move the submit button. */}
        <div className="mt-2 min-h-[1.5rem]">
          {errors.message ? (
            <p id="message-error" className="font-sans text-xs text-danger">
              {errors.message}
            </p>
          ) : (
            <p id="message-hint" className="font-sans text-xs text-muted">
              The more specific you are, the more useful our reply.
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-5 pt-2">
        <Button type="submit" disabled={status === 'loading'} className="disabled:opacity-60">
          {status === 'loading' ? 'Sending…' : 'Send request'}
        </Button>
        <p className="font-sans text-xs text-muted">We reply within 24 hours on working days.</p>
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
      {/* Reserved height so showing or clearing an error never shifts the layout below. */}
      <div className="mt-2 min-h-[1.25rem]">
        {error && (
          <p id={`${id}-error`} className="font-sans text-xs text-danger">
            {error}
          </p>
        )}
      </div>
    </div>
  )
}
