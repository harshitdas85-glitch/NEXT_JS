import React from 'react'
import { Spotlight } from './ui/Spotlight'
import Link from 'next/link'
import { Button } from './ui/moving-border'
import { Noto_Serif_JP } from 'next/font/google'
import { Figtree } from 'next/font/google'
const japan = Noto_Serif_JP({
  subsets: ['latin-ext'],
  weight: '400', // You can add multiple weights here
  variable: '--font-jp',    // Rename this to match the font
});
const fig = Figtree({
  subsets: ['latin-ext'],
  weight: '300', // You can add multiple weights here
  variable: '--font-fif',    // Rename this to match the font
});
const Herosection = () => {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
         <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60 absolute "
        fill="silver"
      />
      <div className='p-4 relative z-10 w-full text-center'>
           <h1 className={`mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 ${japan.className}`}>Master the art of music</h1>
            <p
            className={`mt-4 font-normal  md:text-lg text-neutral-300 max-w-2xl  mx-auto ${japan.className}`}
            >Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>
            <div className="mt-4"></div>
        <div className='mt-4'>
        <Link href={"/courses"}><Button
        borderRadius="1.7rem"
        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Explore Courses
      </Button></Link>
      
      </div>
      </div>
    </div>
  )
}

export default Herosection
