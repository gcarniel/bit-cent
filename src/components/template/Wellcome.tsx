import { useUser } from '@/hooks/useUser'

export function Wellcome() {
  const { user } = useUser()

  function renderizarNome() {
    return (
      <span className="hidden sm:inline">, {user?.name?.split(' ')[0]}</span>
    )
  }

  return <div className={`text-3xl font-black`}>Olá{renderizarNome()} 🤑</div>
}
