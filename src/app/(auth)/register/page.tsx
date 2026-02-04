import RegisterForm from "@/components/forms/register-form"

export default function RegisterPage() {
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
          Create your account
        </h2>
      </div>
      <RegisterForm />
    </div>
  )
}
