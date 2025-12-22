import Link from 'next/link'
import React from 'react'

const RegisterButton = ({buttonText}) => {
  return (
    <Link href={"/"} className='btn'>
      {buttonText}
    </Link>
  )
}

export default RegisterButton
