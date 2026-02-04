import VerifyEmailForm from "@/components/forms/verify-email-form"

export default function VerifyEmailPage() {
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
          Verify your email
        </h2>
      </div>
      <VerifyEmailForm />
    </div>
  )
}
