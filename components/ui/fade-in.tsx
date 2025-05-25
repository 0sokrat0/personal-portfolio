"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  threshold?: number
  once?: boolean
  distance?: number
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 1000,
  direction = "up",
  threshold = 0.1,
  once = true,
  distance = 10,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: "10px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [once, threshold])

  const getDirectionClasses = () => {
    switch (direction) {
      case "up":
        return `translate-y-[${distance}px]`
      case "down":
        return `translate-y-[-${distance}px]`
      case "left":
        return `translate-x-[${distance}px]`
      case "right":
        return `translate-x-[-${distance}px]`
      default:
        return ""
    }
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isVisible ? "opacity-100 transform-none" : `opacity-0 ${getDirectionClasses()}`,
        className,
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  )
}
