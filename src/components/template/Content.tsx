import { ReactNode } from 'react'

interface ContentProps {
  children: ReactNode
  className?: string
}

export function Content(props: ContentProps) {
  return (
    <div
      className={`
          flex flex-col p-7
          ${props.className ?? ''}
      `}
    >
      {props.children}
    </div>
  )
}
