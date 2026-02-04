import { z } from "zod"
import { loginSchema, registerSchema, verifyEmailSchema } from "@/lib/validations/auth.schema"
import apiClient from "./client"

type LoginData = z.infer<typeof loginSchema>
type RegisterData = z.infer<typeof registerSchema>
type VerifyEmailData = z.infer<typeof verifyEmailSchema>

export const authApi = {
  login: (data: LoginData) => apiClient.post("/auth/login", data),
  register: (data: RegisterData) => apiClient.post("/auth/register", data),
  verifyEmail: (data: VerifyEmailData) => apiClient.post("/auth/verify-email", data),
  logout: () => apiClient.post("/auth/logout"),
  userData: () => apiClient.get("/auth/user-data"),
}
