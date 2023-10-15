import React from 'react'
import Link from 'next/link'

const JoinTeam = () => {
  return (
    <div className='container py-12 lg:py-32 flex items-center justify-center'>
        <div className='w-full lg:w-[414px] flex flex-col items-center justify-center'>
            <h2 className='text-center mb-4'>Join our team to be a part of our story</h2>
            <span className='b1 text-mediumgray mb-8 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span>
            <Link href="/" className="button border border-yellow bg-yellow">Join Now</Link>

        </div>



    </div>
  )
}

export default JoinTeam
