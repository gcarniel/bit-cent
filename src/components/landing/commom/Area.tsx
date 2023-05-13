import { ReactNode } from 'react'

interface AreaProps {
  children: ReactNode
  className?: string
  id?: string
}

export function Area({ children, id, className }: AreaProps) {
  return (
    <div
      id={id ?? ''}
      className={`flex justify-center w-full ${className ?? ''}`}
    >
      <div className={`px-7 xl:px-0 w-full xl:w-[1200px]`}>{children}</div>
    </div>
  )
}
