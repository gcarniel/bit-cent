import { PageFinance } from '@/components/finance'
import { Landing } from '@/components/landing'
import { Loading } from '@/components/template/Loading'
import { useUser } from '@/hooks/useUser'

export default function Home() {
  const { user, loading } = useUser()

  if (loading) {
    return <Loading />
  }

  return user ? <PageFinance /> : <Landing />
}
