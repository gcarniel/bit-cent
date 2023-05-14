import { Id } from '@/logic/core/shared/Id'
import { UserMenu } from './UserMenu'
import { Wellcome } from './Wellcome'

export default function Header() {
  return (
    <div
      className={`
            flex justify-between items-center
            p-7 border-b border-zinc-900
        `}
    >
      <Wellcome />
      <UserMenu />
    </div>
  )
}
