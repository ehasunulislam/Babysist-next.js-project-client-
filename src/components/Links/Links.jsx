"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Links = ({href, children}) => {
    const pathName = usePathname();
  return (
    <Link className={`${pathName.startsWith(href) && "text-blue-400"} font-medium`} href={href}>
        {children}
    </Link>
  )
}

export default Links
