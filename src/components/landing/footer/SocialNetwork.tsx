import React from 'react'
import Link from 'next/link'

interface SocialNetworkProps {
  icon: any
  url: string
}

export function SocialNetwork({ url, icon }: SocialNetworkProps) {
  return (
    <Link href={url} target="_blank">
      <div className="bg-zinc-800 rounded-lg p-1 mr-3 cursor-pointer">
        {React.cloneElement(icon, {
          size: 35,
          strokeWidth: 1,
          className: 'text-indigo-400',
        })}
      </div>
    </Link>
  )
}
