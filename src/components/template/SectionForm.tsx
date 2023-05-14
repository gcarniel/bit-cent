import { Button } from '@mantine/core'
import { ReactNode } from 'react'

interface SectionFormProps {
  title: string
  description: string
  footerMessage: string
  canSave: boolean
  save: () => void
  children: ReactNode
}

export function SectionForm({
  title,
  description,
  footerMessage,
  canSave,
  save,
  children,
}: SectionFormProps) {
  return (
    <div
      className={`
            flex flex-col overflow-hidden
            border border-zinc-800 rounded-lg
        `}
    >
      <div className="flex flex-col p-7">
        <div className="text-3xl font-black">{title}</div>
        <div className="mt-4 text-zinc-400">{description}</div>
        <div className="mt-3">{children}</div>
      </div>
      <div
        className={`
                flex justify-end md:justify-between items-center
                bg-black px-7 py-5
            `}
      >
        <span className="hidden md:inline text-zinc-400">{footerMessage}</span>
        <Button
          color={canSave ? 'green' : 'gray'}
          className={canSave ? 'bg-green-500' : 'bg-gray-800'}
          onClick={() => (canSave ? save() : null)}
        >
          Salvar
        </Button>
      </div>
    </div>
  )
}
