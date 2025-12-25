import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={"/assets/logo.svg"} alt='logo' width={150} height={30} />
    </Link>
  )
}

export default Logo
