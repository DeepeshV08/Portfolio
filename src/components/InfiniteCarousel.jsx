'use client'
import { useEffect, useRef } from "react";
import CarouselCard from "./CarouselCard";
import gsap from '../libs/gsap'

const CARD_WIDTH = 300;
const CARD_HEIGHT = 320;
const SCALE = 1.35;
const CARD_GAP = 15;

const DURATION = 25

const TRACK_H = CARD_HEIGHT * SCALE

const InfiniteCarousel = ({projects}) => {

    const trackRef = useRef(null)
    const tweenRef = useRef(null)
    const doubled = [...projects , ...projects]

    useEffect(() => {
        const singleWidth = projects.length * (CARD_HEIGHT + CARD_GAP);

        tweenRef.current = gsap.to(trackRef.current,{
            x: -singleWidth,
            ease: 'none',
            duration: DURATION,
            repeat: -1
        })

        return ()=> tweenRef.current?.kill()

    })
  return (
    <div
    style={{padding: `${TRACK_H * 1.2}px 0 24px`}}
     className="overflow-hidden ">
      <div ref={trackRef} style={{gap: `${CARD_GAP}px`, width: 'max-content'}} className="track flex items-center">
       {doubled.map((project, i) => (
  <CarouselCard
    key={i}
    project={project}
    onHoverStart={() => tweenRef.current?.pause()}
    onHoverEnd={() => tweenRef.current?.play()}
  />
    ))}
      </div>
    </div>
  )
}

export default InfiniteCarousel
