'use client'
import { useEffect, useRef } from 'react'

const WEBM = 'https://res.cloudinary.com/dkits80xk/video/upload/f_webm,vc_vp9,q_auto:good/v1778683152/hero-animation_gep3ir.webm'
const MP4  = 'https://res.cloudinary.com/dkits80xk/video/upload/f_mp4,vc_h264,q_auto:good/v1778683152/hero-animation_gep3ir.mp4'
const POSTER = 'https://res.cloudinary.com/dkits80xk/video/upload/f_jpg,so_0,q_auto,w_900/v1778683152/hero-animation_gep3ir.jpg'

export function HeroVideo({ className }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const conn = (navigator as any).connection
    if (conn?.saveData || conn?.effectiveType === '2g') return

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      const vid = videoRef.current
      if (!vid) return
      vid.querySelectorAll('source').forEach((s) => {
        s.src = s.dataset.src!
      })
      vid.load()
      vid.play().catch(() => {})
      observer.disconnect()
    }, { rootMargin: '200px' })

    if (videoRef.current) observer.observe(videoRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay muted loop playsInline
      preload="none"
      poster={POSTER}
    >
      <source data-src={WEBM} type="video/webm" />
      <source data-src={MP4}  type="video/mp4"  />
    </video>
  )
}

