import React from 'react'

interface PageTitleProps {
  title: string
  icon?: any
  subtitle?: string
  className?: string
}

export function PageTitle({
  title,
  subtitle,
  icon,
  className,
}: PageTitleProps) {
  return (
    <div className={`flex items-center gap-2 ${className ?? ''}`}>
      {icon && (
        <div
          className={`
                text-zinc-500
            `}
        >
          {React.cloneElement(icon, {
            stroke: 1,
            size: subtitle ? 50 : 24,
          })}
        </div>
      )}
      <div className="flex flex-col text-zinc-500">
        <h1 className="text-2xl font-black">{title}</h1>
        {subtitle && <h2 className="text-sm font-thin -mt-1">{subtitle}</h2>}
      </div>
    </div>
  )
}
