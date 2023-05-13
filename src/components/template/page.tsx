interface PageProps {
  external?: boolean
  children: any
  className?: string
}

export function Page({ children, className, external }: PageProps) {
  return (
    <div
      className={`flex flex-col min-h-screen 
                  bg-gradient-to-r from-zinc-900 via-black to-zinc-900
                  ${className ?? ''}
      `}
    >
      {children}
    </div>
  )
}
