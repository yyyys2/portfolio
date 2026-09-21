import { animate, motion, useMotionValue, useTransform } from "framer-motion"
import type { AnimationPlaybackControls } from "framer-motion"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { selectedProjects } from "@/data/selectedProjects"
import type { ProjectId, SelectedProject } from "@/data/selectedProjects"

type Career = {
  id: string; index: string; period: string; company: string; role: string; duties: string[]; projects?: SelectedProject[]; technologies: string[]
}

const ocubeProjectIds = new Set<ProjectId>(["ai-agent", "tv-overlay-shopping", "digital-signage-management"])

const careers: Career[] = [
  { id: "ocube", index: "01", period: "2021 — NOW", company: "주식회사 오큐브", role: "Senior Frontend Developer", duties: ["React·TypeScript 기반 웹 서비스 및 관리자 시스템 개발", "상태 관리 구조와 공통 UI 아키텍처 설계", "webOS 기반 디바이스 서비스 및 운영 화면 개발"], projects: selectedProjects.filter(project => ocubeProjectIds.has(project.id)), technologies: ["React", "TypeScript", "Zustand", "TanStack Query", "Svelte", "webOS"] },
  { id: "academy", index: "02", period: "2020 — 2021", company: "엘컴퓨터학원", role: "Team Lead · Instructor", duties: ["HTML/CSS와 Spring Boot 기반 학생 관리 프로그램 개발", "교육 과정 운영과 개발 실습 지도"], technologies: ["HTML", "CSS", "JavaScript", "Spring Boot"] },
  { id: "ungim", index: "03", period: "2020", company: "운김", role: "Founder · Frontend Developer", duties: ["SI 프로젝트의 웹 기획·디자인·프론트엔드 개발", "프로젝트 일정과 고객 요구사항 조율"], technologies: ["JavaScript", "Vue", "UI Design"] },
  { id: "wecom", index: "04", period: "2018 — 2020", company: "위컴 WECOM", role: "Frontend Developer", duties: ["자사 솔루션 모바일 웹과 웹사이트 프론트엔드 개발", "운영 서비스 유지보수와 화면 개선"], technologies: ["JavaScript", "Vue", "SCSS"] },
]

export default function ExperienceView() {
  const [selectedId, setSelectedId] = useState("ocube")
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const geometry = useMotionValue({ start: { x: 0, y: 0 }, end: { x: 0, y: 0 } })
  const heroRef = useRef<HTMLElement>(null)
  const periodRef = useRef<HTMLSpanElement>(null)
  const anchorRefs = useRef<Record<string, HTMLSpanElement | null>>({})
  const floatControlsRef = useRef<AnimationPlaybackControls | null>(null)
  const [previewHovered, setPreviewHovered] = useState(false)
  const [previewFocused, setPreviewFocused] = useState(false)
  const reducedMotion = useReducedMotion()
  const floatY = useMotionValue(0)
  const selectedCareer = careers.find(career => career.id === selectedId) ?? careers[0]
  const endpointX = useTransform(() => geometry.get().end.x)
  const endpointY = useTransform(() => geometry.get().end.y + floatY.get())
  const path = useTransform(() => {
    const { start, end } = geometry.get()
    const distance = Math.max(100, end.x - start.x)
    const endY = end.y + floatY.get()
    return `M ${start.x} ${start.y} C ${start.x + distance * .38} ${start.y}, ${end.x - distance * .35} ${endY + 4}, ${end.x} ${endY}`
  })

  useLayoutEffect(() => {
    const hero = heroRef.current, period = periodRef.current, anchor = anchorRefs.current[selectedId]
    if (!hero || !period || !anchor) return
    let disposed = false
    let frame = 0
    const measure = () => {
      // Font/resize callbacks can outlive a selection. Never measure a stale node.
      if (disposed || !hero.isConnected || !period.isConnected || !anchor.isConnected) return
      const h = hero.getBoundingClientRect(), p = period.getBoundingClientRect(), a = anchor.getBoundingClientRect()
      if (!a.width || !a.height) return
      // Publish both endpoints together; the path and dot subscribe to this same value.
      geometry.set({ start: { x: p.right - h.left - .8, y: p.top + p.height / 2 - h.top }, end: { x: a.left + a.width / 2 - h.left, y: a.top + a.height / 2 - h.top - floatY.get() } })
    }
    const scheduleMeasure = () => {
      if (disposed) return
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(measure)
    }
    const observer = new ResizeObserver(scheduleMeasure)
    observer.observe(hero); observer.observe(period); observer.observe(anchor)
    window.addEventListener("resize", scheduleMeasure)
    document.fonts.ready.then(scheduleMeasure)
    // Update before paint, including when hovering/focusing pauses the float animation.
    measure()
    return () => {
      disposed = true
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener("resize", scheduleMeasure)
    }
  }, [selectedId, floatY, geometry])

  useEffect(() => {
    floatY.set(0)
    if (reducedMotion) return

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
    if (previewHovered || previewFocused) controls?.pause()
    else controls?.play()
  }, [previewHovered, previewFocused, reducedMotion])

  const openDetail = (id: string) => {
    setSelectedId(id)
    setExpandedId(current => current === id ? null : id)
    window.setTimeout(() => document.getElementById(`career-row-${id}`)?.scrollIntoView({ block: "start", behavior: "smooth" }), 80)
  }

  return <main className="experience-main">
    <section ref={heroRef} className="experience-hero" aria-labelledby="experience-page-title">
      <div className="experience-hero__copy"><p>EXPERIENCE · CAREER</p><h1 id="experience-page-title">Experience<span className="experience-hero__period"><span className="sr-only">.</span><span ref={periodRef} className="experience-hero__period-dot" aria-hidden="true" /></span></h1><strong>2018 — NOW</strong><div>웹 서비스 구축부터 운영·유지보수까지의 경험을 정리했습니다.</div></div>
      <motion.div
        className="career-preview"
        style={{ y: floatY, rotate: "var(--hero-preview-tilt)" }}
        onPointerEnter={() => setPreviewHovered(true)}
        onPointerLeave={() => setPreviewHovered(false)}
        onFocusCapture={() => setPreviewFocused(true)}
        onBlurCapture={event => {
          if (!event.currentTarget.contains(event.relatedTarget)) setPreviewFocused(false)
        }}
      >
        <div className="career-preview__chrome">
          <div className="career-preview__window-dots" aria-hidden="true"><i /><i /><i /></div>
          <strong>CAREER OVERVIEW</strong><span>2018 — NOW</span>
        </div>
        <div className="career-preview__body">
          <nav className="career-preview__navigation" aria-label="미리볼 경력 선택">
            <p>커리어 타임라인 <span>{String(careers.length).padStart(2, "0")}</span></p>
            <div className="career-preview__choices">
              {careers.map(item => <button
                key={item.id}
                type="button"
                className="career-preview__choice"
                aria-pressed={selectedId === item.id}
                aria-controls="career-preview-summary"
                onClick={() => setSelectedId(item.id)}
              >
                <span ref={node => { anchorRefs.current[item.id] = node }} className="career-preview__anchor" aria-hidden="true" />
                <span className="career-preview__number" aria-hidden="true">{item.index}</span>
                <span className="career-preview__company"><strong>{item.company}</strong><small>{item.period}</small></span>
                <span className="career-preview__arrow" aria-hidden="true">↗</span>
              </button>)}
            </div>
          </nav>
          <section id="career-preview-summary" className="career-preview__summary" aria-labelledby="career-preview-company">
            <div className="career-preview__summary-content" key={selectedCareer.id}>
              <header><h2 id="career-preview-company">{selectedCareer.company}</h2><p>{selectedCareer.role}</p></header>
              <ul className="career-preview__duties">{selectedCareer.duties.map(duty => <li key={duty}>{duty}</li>)}</ul>
              {selectedCareer.projects ? <div className="career-preview__projects">
                <h3>대표 프로젝트</h3>
                <div>{selectedCareer.projects.map(project => <a key={project.id} href={`#/projects?project=${project.id}`}>{project.title}<span aria-hidden="true">↗</span></a>)}</div>
              </div> : <div className="career-preview__technologies">
                <h3>사용 기술</h3><ul>{selectedCareer.technologies.map(technology => <li key={technology}>{technology}</li>)}</ul>
              </div>}
            </div>
            <button className="career-preview__cta" type="button" aria-expanded={expandedId === selectedId} aria-controls={`career-detail-${selectedId}`} onClick={() => openDetail(selectedId)}>
              {expandedId === selectedId ? "경력 상세 접기" : "이 경력 자세히 보기"}<span aria-hidden="true">{expandedId === selectedId ? "↑" : "↓"}</span>
            </button>
          </section>
        </div>
      </motion.div>
      <svg className="experience-connector" aria-hidden="true"><motion.path d={path} /><motion.circle cx={endpointX} cy={endpointY} r="7.5" /><motion.circle className="inner" cx={endpointX} cy={endpointY} r="2.5" /></svg>
    </section>

    <section className="career-list" aria-label="경력 목록">
      {careers.map(career => <div key={career.id} className={`career-entry${selectedId === career.id ? " is-selected" : ""}${expandedId === career.id ? " is-open" : ""}`}>
        <button id={`career-row-${career.id}`} className="career-row" type="button" aria-expanded={expandedId === career.id} aria-controls={`career-detail-${career.id}`} onMouseEnter={() => setSelectedId(career.id)} onFocus={() => setSelectedId(career.id)} onClick={() => openDetail(career.id)}>
          <span>{career.index}</span><b>{career.period}</b><strong>{career.company}</strong><em>{career.role}</em><i>{expandedId === career.id ? "접기 ↑" : "상세 보기 →"}</i>
        </button>
        {expandedId === career.id && <CareerDetail career={career} />}
      </div>)}
    </section>
    <section className="experience-resume" aria-labelledby="experience-resume-title"><p>RESUME</p><h2 id="experience-resume-title">PDF 이력서 다운로드</h2><a href={`${import.meta.env.BASE_URL}assets/resume/kim_yun_young_resume.pdf`} download="kim_yun_young_resume.pdf">이력서 다운로드 ↓</a></section>
    <footer className="experience-footer"><a href="#/contact">CONTACT ↗</a><span>bellelaide1005@gmail.com</span><p>© 2026 KIM YOON YOUNG. ALL RIGHTS RESERVED.</p></footer>
  </main>
}

function CareerDetail({ career }: { career: Career }) {
  return <motion.section id={`career-detail-${career.id}`} className="career-detail" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <header><p>{career.period} · {career.role}</p><h2>{career.company}</h2><span>서비스의 구조와 운영 흐름을 이해하며 프론트엔드 구현을 담당했습니다.</span></header>
    <section><h3>주요 업무</h3><ul>{career.duties.map(item => <li key={item}>{item}</li>)}</ul></section>
    {career.projects && <section><h3>대표 프로젝트 · {career.projects.length}</h3><div className="career-detail__projects">{career.projects.map(project => <div key={project.id}><strong>{project.title}</strong><span>Frontend Development</span><span>{project.tags.join(" · ")}</span><a href={`#/projects?project=${project.id}`}>프로젝트 보기 →</a></div>)}</div></section>}
    <section><h3>기술</h3><div className="career-detail__tech">{career.technologies.map(item => <span key={item}>{item}</span>)}</div></section>
  </motion.section>
}
