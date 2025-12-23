import Image from 'next/image'
import React from 'react'

const Last = () => {
  return (
    <div className='flex justify-center items-center flex-col space-y-2'>
      <Image src={"/assets/barry-hero.png"} alt='avatar' height={120} width={120} />
      <h3 className='text-2xl'>Babysits is also a supporter of Make-A-Wish® International</h3>
      <p>Want to help grant wishes to children with critical illnesses?</p>
    </div>
  )
}

export default Last
