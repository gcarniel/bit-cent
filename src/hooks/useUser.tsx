import AuthenticationContext from '@/contexts/AuthenticationContext'
import { useContext } from 'react'

export function useUser() {
  const props = useContext(AuthenticationContext)

  return { ...props }
}
