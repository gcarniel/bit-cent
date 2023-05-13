import { Area } from '../commom/Area'
import { Logo } from '../commom/Logo'
import Menu from '../menu'

export function Header() {
  return (
    <Area className="bg-black fixed z-50">
      <div className="flex items-center justify-between h-20 ">
        <Logo />
        <Menu />
      </div>
    </Area>
  )
}
