import { ReactNode } from "react"
import { Navigate } from "react-router"
import { useAuth } from "src/utils/auth"

type Props = {
  children: ReactNode
}

export const AuthMiddleware = ({ children }: Props) => {
  const { isLogged } = useAuth();

  if (!isLogged) {
    return (
      <Navigate to='/signin' replace />
    )
  }

  return (
    <>
      {children}
    </>
  )
}