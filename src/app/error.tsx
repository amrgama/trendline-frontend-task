"use client"

import ErrorMessage from "@/components/shared/error-message"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <ErrorMessage error={error} reset={reset} />
    </div>
  )
}
