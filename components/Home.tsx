import React from 'react'
import  Image from 'next/image'
import Homebg  from '@/image/bg.jpg'
function Home() {
  return (
    <div>
    <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <Image src={Homebg}
       alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />

      <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">Wellcome to My Profolio</h2>
        <p className="sm:text-lg text-base text-center text-gray-200"> I&apos;m  <span className='font-semibold text-sky-800'>Neha</span> Shahzad </p>
        <div className='bg-sky-800 text-white text-sm sm:text-lg p-3 sm:p-7 rounded-full'> UI/UX WebDesigned-Developing-Graphic Art </div>

      </div>
    </div>
    </div>
  )
}

export default Home
