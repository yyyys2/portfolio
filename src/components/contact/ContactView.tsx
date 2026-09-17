import { animate, motion, useMotionValue, useTransform } from "framer-motion"
import type { AnimationPlaybackControls } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "@/hooks/useReducedMotion"

type Method = "email" | "github" | "resume"
const methods: Method[] = ["email", "github", "resume"]

const methodData = {
  email: { label: "EMAIL", value: "bellelaide1005@gmail.com", note: "기본 메일 앱으로 연결됩니다." },
  github: { label: "GITHUB", value: "github.com/yyyys2", note: "새 탭에서 열립니다." },
  resume: { label: "RESUME", value: "김윤영 프론트엔드 이력서", note: "PDF 파일로 다운로드됩니다." },
}

export default function ContactView() {
  const [method, setMethod] = useState<Method>("email")
  const [copyState, setCopyState] = useState<"idle" | "success" | "error">("idle")
  const [paused, setPaused] = useState(false)
  const [geometry, setGeometry] = useState({ start: { x: 0, y: 0 }, end: { x: 0, y: 0 } })
  const mainRef = useRef<HTMLElement>(null), periodRef = useRef<HTMLSpanElement>(null), anchorRef = useRef<HTMLSpanElement>(null)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const timerRef = useRef<number | null>(null)
  const controlsRef = useRef<AnimationPlaybackControls | null>(null)
  const reducedMotion = useReducedMotion()
  const floatY = useMotionValue(0)
  const selected = methodData[method]

  useEffect(() => () => { if (timerRef.current) window.clearTimeout(timerRef.current) }, [])

  useEffect(() => {
    const main = mainRef.current, period = periodRef.current, anchor = anchorRef.current
    if (!main || !period || !anchor) return
    let frame = 0
    const measure = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(() => {
      const m = main.getBoundingClientRect(), p = period.getBoundingClientRect(), a = anchor.getBoundingClientRect(), fy = floatY.get()
      setGeometry({ start: { x: p.right - m.left, y: p.top + p.height * .74 - m.top }, end: { x: a.left + a.width / 2 - m.left, y: a.top + a.height / 2 - m.top - fy } })
    }) }
    const observer = new ResizeObserver(measure); observer.observe(main); observer.observe(period); observer.observe(anchor)
    window.addEventListener("resize", measure); document.fonts.ready.then(measure); measure()
    return () => { cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener("resize", measure) }
  }, [floatY])

  useEffect(() => {
    floatY.set(0)
    if (reducedMotion) return
    const controls = animate(floatY, [0, -5, 0, 4, 0], { duration: 6, ease: "easeInOut", repeat: Infinity })
    controlsRef.current = controls
    return () => controls.stop()
  }, [floatY, reducedMotion])

  useEffect(() => { if (!controlsRef.current) return; if (paused) controlsRef.current.pause(); else controlsRef.current.play() }, [paused])

  const endY = useTransform(floatY, value => geometry.end.y + value)
  const path = useTransform(floatY, value => {
    const adjustedY = geometry.end.y + value, distance = Math.max(100, geometry.end.x - geometry.start.x)
    return `M ${geometry.start.x} ${geometry.start.y} C ${geometry.start.x + distance * .38} ${geometry.start.y}, ${geometry.end.x - distance * .32} ${adjustedY + 5}, ${geometry.end.x} ${adjustedY}`
  })

  const selectTab = (index: number) => {
    const next = (index + methods.length) % methods.length
    setMethod(methods[next] ?? "email"); tabRefs.current[next]?.focus()
  }
  const handleTabKey = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "ArrowRight") { event.preventDefault(); selectTab(index + 1) }
    else if (event.key === "ArrowLeft") { event.preventDefault(); selectTab(index - 1) }
    else if (event.key === "Home") { event.preventDefault(); selectTab(0) }
    else if (event.key === "End") { event.preventDefault(); selectTab(methods.length - 1) }
  }
  const copyEmail = async () => {
    if (timerRef.current) window.clearTimeout(timerRef.current)
    try { await navigator.clipboard.writeText(methodData.email.value); setCopyState("success") }
    catch { setCopyState("error") }
    timerRef.current = window.setTimeout(() => setCopyState("idle"), 2000)
  }

  return <>
    <main ref={mainRef} className="contact-main">
      <div className="contact-ornament contact-ornament--left" aria-hidden="true" /><div className="contact-ornament contact-ornament--upper" aria-hidden="true" /><div className="contact-ornament contact-ornament--right" aria-hidden="true" />
      <section className="contact-hero" aria-labelledby="contact-page-title"><p>CONTACT · GET IN TOUCH</p><h1 id="contact-page-title">Contact<span ref={periodRef}>.</span></h1><div>채용 및 프로젝트 관련 연락을 기다립니다.</div></section>
      <motion.section className="quick-contact-wrap" style={{ y: floatY }} onPointerEnter={() => setPaused(true)} onPointerLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false) }}>
        <div className="quick-contact">
          <header><i /><i /><i /><strong>QUICK CONTACT</strong><b>● INTERACTIVE</b><span>•••</span></header>
          <div className="quick-contact__body"><p>연락 방법을 선택하세요.</p>
            <div className="contact-tabs" role="tablist" aria-label="연락 방법">{methods.map((item,index) => <button key={item} ref={node => { tabRefs.current[index] = node }} type="button" role="tab" aria-selected={method === item} tabIndex={method === item ? 0 : -1} onClick={() => setMethod(item)} onKeyDown={event => handleTabKey(event,index)}>{item.toUpperCase()}</button>)}</div>
            <motion.section key={method} role="tabpanel" className="contact-method" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .18 }}>
              <p>{selected.label}</p><h2>{selected.value}</h2><div className={`contact-method__actions${method !== "email" ? " is-single" : ""}`}>
                {method === "email" && <><a href={`mailto:${methodData.email.value}`}>이메일 작성 →</a><button type="button" onClick={copyEmail}>{copyState === "success" ? "복사됨 ✓" : "주소 복사"}</button></>}
                {method === "github" && <a href="https://github.com/yyyys2" target="_blank" rel="noreferrer noopener">GitHub 보기 →</a>}
                {method === "resume" && <a href={`${import.meta.env.BASE_URL}assets/resume/kim_yun_young_resume.pdf`} download="kim_yun_young_resume.pdf">이력서 다운로드 ↓</a>}
              </div><span aria-live="polite">{copyState === "error" ? "복사하지 못했습니다. 이메일 주소를 직접 선택해 주세요." : selected.note}</span>
            </motion.section>
          </div>
        </div>
        <span ref={anchorRef} className="quick-contact__anchor" aria-hidden="true" />
      </motion.section>
      <svg className="contact-connector" aria-hidden="true"><motion.path d={path} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: .45 }} /><motion.circle cx={geometry.end.x} cy={endY} r="7.5" /><motion.circle className="inner" cx={geometry.end.x} cy={endY} r="2.5" /></svg>
    </main>
    <footer className="contact-footer">© 2026 KIM YOON YOUNG. ALL RIGHTS RESERVED.</footer>
  </>
}
