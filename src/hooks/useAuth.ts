import { useAppSelector } from '../store/store'

export function useAuth() {
  const { userFI, email, token, id } = useAppSelector((state) => state.auth)
  return {
    isAuth: !!id,
    userFI,
    email,
    token,
    id,
  }
}
