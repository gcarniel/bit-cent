import { User } from '@/logic/core/interfaces/user'
import services from '@/logic/core/services'
import { ReactNode, createContext, useEffect, useState } from 'react'

interface AuthenticationContextProps {
  loading: boolean
  user: User | null
  loginGoogle: () => void
  logout: () => void
  updateUser: (user: User) => Promise<void>
}

const AuthenticationContext = createContext<AuthenticationContextProps>({
  loading: true,
  user: null,
  loginGoogle: async () => {},
  logout: async () => {},
  updateUser: async () => {},
})

export default AuthenticationContext

export function AuthenticationProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null)

  const loginGoogle = async () => {
    const user = await services.user.loginGoogle()
    setUser(user)
    return user
  }

  const logout = async () => {
    await services.user.logout()
    setUser(null)
  }

  const updateUser = async (newUser: User) => {
    if (user && user.email !== newUser.email) return logout()
    if (user && user.email === newUser.email) {
      await services.user.save(user)
    }
  }

  useEffect(() => {
    const unsubscribe = services.user.observerUser((user) => {
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
        updateUser,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}
