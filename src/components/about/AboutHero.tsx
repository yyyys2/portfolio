import { animate, motion, useMotionValue, useTransform } from "framer-motion"
import type { AnimationPlaybackControls } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import ComponentPlayground from "@/components/about/ComponentPlayground"
import type { ComponentId } from "@/components/about/ComponentPlayground"

type Point = { x: number; y: number }
type Geometry = { start: Point; end: Point }

const emptyGeometry: Geometry = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } }

function createPath(geometry: Geometry, offsetY = 0) {
  const { start, end } = geometry
  const endY = end.y + offsetY
  const distance = Math.max(100, end.x - start.x)
  return `M ${start.x} ${start.y} C ${start.x + distance * 0.38} ${start.y}, ${end.x - distance * 0.35} ${endY + 4}, ${end.x} ${endY}`
}

export default function AboutHero() {
  const [geometry, setGeometry] = useState(emptyGeometry)
  const [paused, setPaused] = useState(false)
  const [selectedComponent, setSelectedComponent] = useState<ComponentId>("button")
  const heroRef = useRef<HTMLElement>(null)
  const periodRef = useRef<HTMLSpanElement>(null)
  const targetRef = useRef<HTMLSpanElement>(null)
  const controlsRef = useRef<AnimationPlaybackControls | null>(null)
  const reducedMotion = useReducedMotion()
  const floatY = useMotionValue(0)
  const path = useTransform(floatY, (value) => createPath(geometry, value))
  const endY = useTransform(floatY, (value) => geometry.end.y + value)

  useEffect(() => {
    const hero = heroRef.current
    const period = periodRef.current
    const target = targetRef.current
    if (!hero || !period || !target) return

    let frame = 0
    const measure = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const heroRect = hero.getBoundingClientRect()
        const periodRect = period.getBoundingClientRect()
        const targetRect = target.getBoundingClientRect()
        const currentFloatY = floatY.get()
        setGeometry({
          start: {
            x: periodRect.right - heroRect.left - 0.8,
            y: periodRect.top + periodRect.height / 2 - heroRect.top,
          },
          end: {
            x: targetRect.left + targetRect.width / 2 - heroRect.left,
            y: targetRect.top + targetRect.height / 2 - heroRect.top - currentFloatY,
          },
        })
      })
    }

    const observer = new ResizeObserver(measure)
    observer.observe(hero)
    observer.observe(period)
    observer.observe(target)
    window.addEventListener("resize", measure)
    document.fonts.ready.then(measure)
    measure()
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener("resize", measure)
    }
  }, [floatY, selectedComponent])

  useEffect(() => {
    floatY.set(0)
    if (reducedMotion) return
    const controls = animate(floatY, [0, -8, 0, 6, 0], {
      duration: 5.2,
      ease: "easeInOut",
      repeat: Infinity,
    })
    controlsRef.current = controls
    return () => {
      controls.stop()
      controlsRef.current = null
    }
  }, [floatY, reducedMotion])

  useEffect(() => {
    if (!controlsRef.current) return
    if (paused) controlsRef.current.pause()
    else controlsRef.current.play()
  }, [paused, reducedMotion])

  return (
    <section ref={heroRef} className="about-hero" aria-labelledby="about-title">
      <div className="about-hero__copy">
        <p className="about-hero__eyebrow">ABOUT · FRONTEND DEVELOPER</p>
        <h1 id="about-title" className="about-hero__title">
          <span>About</span>
          <span className="about-hero__accent">
            <span className="about-hero__word">Me</span>
            <span className="about-hero__period">
              <span className="sr-only">.</span>
              <span ref={periodRef} className="about-hero__period-dot" aria-hidden="true" />
            </span>
          </span>
        </h1>
        <p className="about-hero__description">
          서비스를 이해하고, 오래 쓰이는 UI를 만듭니다. <br />
          프론트엔드 개발자 김윤영입니다.
        </p>
      </div>

      <motion.div
        className="about-playground-wrap"
        style={{ y: floatY }}
        onPointerEnter={() => setPaused(true)}
        onPointerLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false)
        }}
      >
        <div className="about-playground-shell"><ComponentPlayground anchorRef={targetRef} selectedComponent={selectedComponent} onSelectComponent={setSelectedComponent} /></div>
      </motion.div>

      <svg className="about-hero__connector" aria-hidden="true">
        <motion.path d={path} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.45, delay: 0.25 }} />
        <motion.circle className="about-hero__end-ring" cx={geometry.end.x} cy={endY} r="7" />
        <motion.circle className="about-hero__end-dot" cx={geometry.end.x} cy={endY} r="2.5" />
      </svg>
    </section>
  )
}
