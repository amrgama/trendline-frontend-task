import { Button } from "@/components/ui/button"

export default function ErrorMessage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset?: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      <h3 className="text-lg font-semibold text-red-600">Something went wrong!</h3>
      <p className="text-sm text-gray-500">{error.message}</p>
      {reset && (
        <Button onClick={reset} variant="outline">
          Try again
        </Button>
      )}
    </div>
  )
}
