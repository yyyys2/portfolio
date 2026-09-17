import { animate, motion, useMotionValue, useTransform } from "framer-motion"
import type { AnimationPlaybackControls } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import ComponentPlayground from "@/components/about/ComponentPlayground"

type Point = { x: number; y: number }
type Geometry = { start: Point; end: Point }

const emptyGeometry: Geometry = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } }

function createPath(geometry: Geometry, offsetY = 0) {
  const { start, end } = geometry
  const endY = end.y + offsetY
  const distance = Math.max(100, end.x - start.x)
  return `M ${start.x} ${start.y} C ${start.x + distance * 0.34} ${start.y + 18}, ${end.x - distance * 0.28} ${endY - 22}, ${end.x} ${endY}`
}

export default function AboutHero() {
  const [geometry, setGeometry] = useState(emptyGeometry)
  const [paused, setPaused] = useState(false)
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
            x: periodRect.right - heroRect.left,
            y: periodRect.top + periodRect.height * 0.62 - heroRect.top,
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
  }, [floatY])

  useEffect(() => {
    floatY.set(0)
    if (reducedMotion) return
    const controls = animate(floatY, [0, -5, 0, 4, 0], {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
    })
    controlsRef.current = controls
    return () => controls.stop()
  }, [floatY, reducedMotion])

  useEffect(() => {
    if (!controlsRef.current) return
    if (paused) controlsRef.current.pause()
    else controlsRef.current.play()
  }, [paused])

  return (
    <section ref={heroRef} className="about-hero" aria-labelledby="about-title">
      <div className="about-hero__ornament about-hero__ornament--upper" aria-hidden="true" />
      <div className="about-hero__ornament about-hero__ornament--lower" aria-hidden="true" />
      <div className="about-hero__ornament about-hero__ornament--line" aria-hidden="true" />
      <div className="about-hero__idea" aria-hidden="true">IDEAS<br />INTO<br />USABLE<br />EXPERIENCES<br />—</div>

      <div className="about-hero__copy">
        <p className="about-hero__eyebrow">ABOUT · FRONTEND DEVELOPER</p>
        <h1 id="about-title" className="about-hero__title">
          <span>화면을 만드는</span>
          <span className="about-hero__accent">방식<span ref={periodRef} className="about-hero__period">.</span></span>
        </h1>
        <p className="about-hero__description">
          React와 TypeScript를 중심으로 웹 서비스를 개발해왔습니다.<br />
          신규 구축부터 운영·유지보수, Svelte 기반 webOS 프로젝트를 경험했습니다.
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
        <div className="about-playground-shell"><ComponentPlayground anchorRef={targetRef} /></div>
      </motion.div>

      <svg className="about-hero__connector" aria-hidden="true">
        <motion.path d={path} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.45, delay: 0.25 }} />
        <motion.circle className="about-hero__end-ring" cx={geometry.end.x} cy={endY} r="7" />
        <motion.circle className="about-hero__end-dot" cx={geometry.end.x} cy={endY} r="2.5" />
      </svg>
    </section>
  )
}
