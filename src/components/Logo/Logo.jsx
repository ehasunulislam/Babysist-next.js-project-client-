import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div>
      <Image src={"/public/logo.svg"} alt='logo' />
    </div>
  )
}

export default Logo
