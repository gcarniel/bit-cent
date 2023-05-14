import { User } from '@/logic/core/interfaces/user'
import { Authentication } from '@/logic/firebase/auth/authentication'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface AuthenticationContextProps {
  loading: boolean
  user: User | null
  loginGoogle: () => void
  logout: () => void
}

const AuthenticationContext = createContext<AuthenticationContextProps>({
  loading: true,
  user: null,
  loginGoogle: async () => {},
  logout: async () => {},
})

export default AuthenticationContext

export function AuthenticationProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null)

  const authentication = new Authentication()

  const loginGoogle = async () => {
    const user = await authentication.loginGoogle()
    setUser(user)
    return user
  }

  const logout = async () => {
    await authentication.logout()
    setUser(null)
  }

  useEffect(() => {
    const unsubscribe = authentication.observer((user) => {
      setUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthenticationContext.Provider
      value={{
        loading,
        user,
        loginGoogle: loginGoogle,
        logout: logout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}
