'use client'
import React from 'react'

import courseData from "../data/music_courses.json"
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'
import { div } from 'motion/react-client'
interface Course{
    id:number,
    title:String,
    slug:String,
    description:String,
    price:Number,
    instructor:String,
    isFeatured:boolean,

}
const FeaturedCourses = () => {
  const featured =   courseData.courses.filter((item:Course)=>item.isFeatured)
  return (
    <div className='py-12 bg-gray-900'>
    <div>
        <div className='text-center'>
            <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>
Featured Courses
            </h2>
            <p className=''>Learn With The Best

            </p>
        </div>
    </div>
    <div className='mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
       {
        featured.map((item:Course)=>{
            return (
                <div key={item.id} className='justify-center flex'>
                  <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
      
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
         {item.title}
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
    {item.description}
        </p>
       
        <p className='mt-2'>{item.instructor}</p>
        
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            {item.price}
          </span>
        </button>
         <Link className='top-2 relative' href={`/courses/${item.slug}`}>Learn More</Link>
      </BackgroundGradient>
      </div>
            )
        })
       }
        </div>
    </div>
    <div className='mt-20 text-center'>
<Link href={"/courses"} className='px-3 py-3 rounded-2xl bg-amber-50 text-black'>View All Courses</Link>
    </div>
    </div>
  )
}

export default FeaturedCourses
