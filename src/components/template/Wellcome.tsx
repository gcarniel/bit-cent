import { userMock } from '@/data/constants/userMock'
import { useContext } from 'react'

export function Wellcome() {
  const usuario = userMock

  function renderizarNome() {
    return (
      <span className="hidden sm:inline">{usuario?.name?.split(' ')[0]}</span>
    )
  }

  return <div className={`text-3xl font-black`}>Olá {renderizarNome()} 👋</div>
}
