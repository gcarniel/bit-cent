import { IconBrandGoogle } from '@tabler/icons-react'
import { MenuItem } from './menuItem'
import { useUser } from '@/hooks/useUser'

export default function Menu() {
  const { loginGoogle } = useUser()
  return (
    <div className="flex gap-2">
      <MenuItem url="#inicio" className="hidden sm:flex">
        Início
      </MenuItem>
      <MenuItem url="#vantagens" className="hidden sm:flex">
        Vantagens
      </MenuItem>
      <MenuItem url="#depoimentos" className="hidden sm:flex">
        Depoimentos
      </MenuItem>
      <MenuItem
        className="bg-gradient-to-r from-indigo-600 to-cyan-600"
        onClick={loginGoogle}
      >
        <div className="flex items-center gap-2">
          <IconBrandGoogle size={15} />
          <span>Login</span>
        </div>
      </MenuItem>
    </div>
  )
}
