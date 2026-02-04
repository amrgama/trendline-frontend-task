import { useAuth } from "./use-auth"

export const useUser = () => {
  const { user } = useAuth()
  return user
}
