import LoginForm from "@/components/forms/login-form"

export default function LoginPage() {
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <LoginForm />
    </div>
  )
}
