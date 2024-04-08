import { ReactNode } from "react"

interface AuthModalProps {
    children: ReactNode
}
const AuthModal = ({children}: AuthModalProps) => {
  return (
    <div className="bg-violet-50">{children}</div>
  )
}

export default AuthModal