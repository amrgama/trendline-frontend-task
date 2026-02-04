import axios from "axios"
import { getToken } from "@/lib/token"

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://tinytales.trendline.marketing/api",
  headers: {
    "Content-Type": "application/json",
  },
})

apiClient.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default apiClient
