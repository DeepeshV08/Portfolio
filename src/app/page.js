'use client'
import InfiniteCarousel from '@/components/InfiniteCarousel'
import TextReveal from '@/components/TextReveal'
import { projects } from '@/data/projects'
import { useRef } from 'react'


const page = () => {

  const triggerRef = useRef(null)

  const handleHoverEnter = () => {
    triggerRef.current?.play()
  }
  const handleHoverLeave = () => {
    triggerRef.current?.reverse()
  }
  
  return (
   <main className='h-screen w-full flex items-center text-white'>
    <InfiniteCarousel projects={projects}></InfiniteCarousel>
   </main>
  )
}

export default page
