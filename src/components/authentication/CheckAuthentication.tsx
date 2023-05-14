import { ReactNode, useContext } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '@/hooks/useUser'
import { Loading } from '../template/Loading'

interface CheckAuthenticationProps {
  children: ReactNode
}

export function CheckAuthentication({
  children,
}: CheckAuthenticationProps): any {
  const router = useRouter()

  const { loading, user } = useUser()

  if (loading) {
    return <Loading />
  } else if (user?.email) {
    return children
  } else {
    router.push('/')
    return <Loading />
  }
}
