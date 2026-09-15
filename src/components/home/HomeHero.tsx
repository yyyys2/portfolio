import { animate, motion, useMotionValue, useTransform } from "framer-motion"
import type { AnimationPlaybackControls } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import FeaturedProjectPanel from "@/components/home/FeaturedProjectPanel"
import { featuredProjects } from "@/data/featuredProjects"
import { useReducedMotion } from "@/hooks/useReducedMotion"

type Point = { x: number; y: number }
type ConnectorGeometry = { start: Point; end: Point }

const emptyGeometry: ConnectorGeometry = {
  start: { x: 0, y: 0 },
  end: { x: 0, y: 0 },
}

function createConnectorPath(geometry: ConnectorGeometry, offsetY = 0) {
  const { start, end } = geometry
  const adjustedEndY = end.y + offsetY
  const distance = Math.max(80, end.x - start.x)

  return `M ${start.x} ${start.y} C ${start.x + distance * 0.3} ${start.y}, ${end.x - distance * 0.35} ${adjustedEndY}, ${end.x} ${adjustedEndY}`
}

export default function HomeHero() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [geometry, setGeometry] = useState(emptyGeometry)
  const [panelPaused, setPanelPaused] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const periodRef = useRef<HTMLSpanElement>(null)
  const panelAnchorRef = useRef<HTMLSpanElement>(null)
  const floatControlsRef = useRef<AnimationPlaybackControls | null>(null)
  const reducedMotion = useReducedMotion()
  const floatY = useMotionValue(0)
  const path = useTransform(floatY, (value) => createConnectorPath(geometry, value))
  const endpointY = useTransform(floatY, (value) => geometry.end.y + value)

  useEffect(() => {
    const hero = heroRef.current
    const period = periodRef.current
    const panelAnchor = panelAnchorRef.current
    if (!hero || !period || !panelAnchor) return

    let frame = 0
    const measure = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const heroRect = hero.getBoundingClientRect()
        const periodRect = period.getBoundingClientRect()
        const anchorRect = panelAnchor.getBoundingClientRect()

        setGeometry({
          start: {
            x: periodRect.right - heroRect.left,
            y: periodRect.top + periodRect.height * 0.58 - heroRect.top,
          },
          end: {
            x: anchorRect.left + anchorRect.width / 2 - heroRect.left,
            y: anchorRect.top + anchorRect.height / 2 - heroRect.top,
          },
        })
      })
    }

    const observer = new ResizeObserver(measure)
    observer.observe(hero)
    observer.observe(period)
    observer.observe(panelAnchor)
    window.addEventListener("resize", measure)
    document.fonts.ready.then(measure)
    measure()

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener("resize", measure)
    }
  }, [selectedIndex])

  useEffect(() => {
    floatY.set(0)
    if (reducedMotion) {
      floatControlsRef.current?.stop()
      floatControlsRef.current = null
      return
    }

    const controls = animate(floatY, [0, -8, 0, 6, 0], {
      duration: 5.2,
      ease: "easeInOut",
      repeat: Infinity,
    })
    floatControlsRef.current = controls

    return () => {
      controls.stop()
      floatControlsRef.current = null
    }
  }, [floatY, reducedMotion])

  useEffect(() => {
    const controls = floatControlsRef.current
    if (!controls) return

    if (panelPaused) controls.pause()
    else controls.play()
  }, [panelPaused])

  const changeProject = (direction: -1 | 1) => {
    setSelectedIndex(
      (current) =>
        (current + direction + featuredProjects.length) % featuredProjects.length
    )
  }

  return (
    <section ref={heroRef} className="home-hero" aria-labelledby="home-title">
      <div className="home-hero__decoration home-hero__decoration--top" aria-hidden="true" />
      <div className="home-hero__decoration home-hero__decoration--bottom" aria-hidden="true" />

      <div className="home-hero__copy">
        <motion.p
          className="home-hero__eyebrow"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32 }}
        >
          FRONTEND DEVELOPER · 7 YEARS
        </motion.p>
        <motion.h1
          id="home-title"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, delay: 0.07 }}
        >
          <span>Frontend</span>
          <span className="home-hero__title-accent">
            Developer<span ref={periodRef} className="home-hero__period">.</span>
          </span>
        </motion.h1>
        <motion.p
          className="home-hero__description"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, delay: 0.14 }}
        >
          화면은 사용하기 편하게, 코드는 고치기 쉽게.
        </motion.p>
        <motion.a
          className="home-hero__cta"
          href="#/projects"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, delay: 0.21 }}
        >
          프로젝트 보기 <span aria-hidden="true">→</span>
        </motion.a>
      </div>

      <motion.div
        className="home-hero__panel-wrap"
        style={{ y: floatY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.52, delay: 0.3, ease: "easeOut" }}
        onPointerEnter={() => setPanelPaused(true)}
        onPointerLeave={() => setPanelPaused(false)}
        onFocusCapture={() => setPanelPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setPanelPaused(false)
        }}
      >
        <FeaturedProjectPanel
          projects={featuredProjects}
          selectedIndex={selectedIndex}
          onSelect={setSelectedIndex}
          anchorRef={panelAnchorRef}
        />
      </motion.div>

      <svg className="home-hero__connector" aria-hidden="true">
        <motion.path d={path} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 0.72 }} />
        <motion.circle cx={geometry.end.x} cy={endpointY} r="4.5" />
      </svg>

      <div className="home-hero__index">
        <p>
          <span>FEATURED</span>
          {String(selectedIndex + 1).padStart(2, "0")} / {String(featuredProjects.length).padStart(2, "0")}
        </p>
        <div>
          <button type="button" onClick={() => changeProject(-1)} aria-label="이전 대표 프로젝트">←</button>
          <span aria-hidden="true" />
          <button type="button" onClick={() => changeProject(1)} aria-label="다음 대표 프로젝트">→</button>
        </div>
        <span className="sr-only" aria-live="polite">
          {featuredProjects[selectedIndex]?.title}, {selectedIndex + 1} / {featuredProjects.length}
        </span>
      </div>
    </section>
  )
}
