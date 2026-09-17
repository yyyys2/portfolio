import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

type Career = {
  id: string; index: string; period: string; company: string; role: string; duties: string[]; projects?: string[]; technologies: string[]
}

const careers: Career[] = [
  { id: "ocube", index: "01", period: "2021 — NOW", company: "주식회사 오큐브", role: "Senior Frontend Developer", duties: ["React·TypeScript 기반 웹 서비스 및 관리자 시스템 개발", "상태 관리 구조와 공통 UI 아키텍처 설계", "webOS 기반 디바이스 서비스 및 운영 화면 개발"], projects: ["webOS TV", "SmartSolution API Portal"], technologies: ["React", "TypeScript", "Zustand", "TanStack Query", "Svelte", "webOS"] },
  { id: "academy", index: "02", period: "2020 — 2021", company: "엘컴퓨터학원", role: "Team Lead · Instructor", duties: ["HTML/CSS와 Spring Boot 기반 학생 관리 프로그램 개발", "교육 과정 운영과 개발 실습 지도"], technologies: ["HTML", "CSS", "JavaScript", "Spring Boot"] },
  { id: "ungim", index: "03", period: "2020", company: "운김", role: "Founder · Frontend Developer", duties: ["SI 프로젝트의 웹 기획·디자인·프론트엔드 개발", "프로젝트 일정과 고객 요구사항 조율"], technologies: ["JavaScript", "Vue", "UI Design"] },
  { id: "wecom", index: "04", period: "2018 — 2020", company: "위컴 WECOM", role: "Frontend Developer", duties: ["자사 솔루션 모바일 웹과 웹사이트 프론트엔드 개발", "운영 서비스 유지보수와 화면 개선"], technologies: ["JavaScript", "Vue", "SCSS"] },
]

export default function ExperienceView() {
  const [selectedId, setSelectedId] = useState("ocube")
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [geometry, setGeometry] = useState({ start: { x: 0, y: 0 }, end: { x: 0, y: 0 } })
  const heroRef = useRef<HTMLElement>(null)
  const periodRef = useRef<HTMLSpanElement>(null)
  const anchorRef = useRef<HTMLSpanElement>(null)
  const selected = careers.find(item => item.id === selectedId) ?? careers[0]!

  useEffect(() => {
    const hero = heroRef.current, period = periodRef.current, anchor = anchorRef.current
    if (!hero || !period || !anchor) return
    let frame = 0
    const measure = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(() => {
      const h = hero.getBoundingClientRect(), p = period.getBoundingClientRect(), a = anchor.getBoundingClientRect()
      setGeometry({ start: { x: p.right - h.left, y: p.top + p.height * .72 - h.top }, end: { x: a.left + a.width / 2 - h.left, y: a.top + a.height / 2 - h.top } })
    }) }
    const observer = new ResizeObserver(measure); observer.observe(hero); observer.observe(period); observer.observe(anchor)
    window.addEventListener("resize", measure); document.fonts.ready.then(measure); measure()
    return () => { cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener("resize", measure) }
  }, [selectedId])

  const distance = Math.max(100, geometry.end.x - geometry.start.x)
  const path = `M ${geometry.start.x} ${geometry.start.y} C ${geometry.start.x + distance * .38} ${geometry.start.y}, ${geometry.end.x - distance * .35} ${geometry.end.y + 4}, ${geometry.end.x} ${geometry.end.y}`

  const openDetail = (id: string) => {
    setSelectedId(id)
    setExpandedId(current => current === id ? null : id)
    window.setTimeout(() => document.getElementById(`career-row-${id}`)?.scrollIntoView({ block: "start", behavior: "smooth" }), 80)
  }

  return <main className="experience-main">
    <section ref={heroRef} className="experience-hero" aria-labelledby="experience-page-title">
      <div className="experience-hero__circle experience-hero__circle--one" aria-hidden="true" /><div className="experience-hero__circle experience-hero__circle--two" aria-hidden="true" />
      <div className="experience-hero__copy"><p>EXPERIENCE · CAREER</p><h1 id="experience-page-title">Experience<span ref={periodRef}>.</span></h1><strong>2018 — NOW</strong><div>웹 서비스 구축부터 운영·유지보수까지의 경험을 정리했습니다.</div></div>
      <div className="career-preview">
        <div className="career-preview__chrome"><i /><i /><i /><strong>CAREER PREVIEW</strong><b>● INTERACTIVE</b><span>•••</span></div>
        <p>회사를 선택하면 요약이 바뀝니다.</p>
        <div className="career-preview__list">
          <article className="career-preview__selected">
            <span ref={anchorRef} className="career-preview__anchor" aria-hidden="true" />
            <header><i /><b>{selected.period}</b><div><strong>{selected.company}</strong><span>{selected.role}</span></div><em>선택됨</em></header>
            <ul>{selected.duties.slice(0,3).map(item => <li key={item}>{item}</li>)}</ul>
            {selected.projects && <footer><span>RELATED PROJECTS</span><div>{selected.projects.map(p => <a key={p} href="#/projects">{p} →</a>)}</div></footer>}
          </article>
          {careers.filter(item => item.id !== selectedId).map(item => <button key={item.id} type="button" onClick={() => setSelectedId(item.id)}><i /><span>{item.period}</span><b>{item.company}<small>{item.role}</small></b><em>보기 →</em></button>)}
        </div>
        <button className="career-preview__cta" type="button" onClick={() => openDetail(selectedId)}>선택한 경력 상세 보기 ↓</button>
      </div>
      <svg className="experience-connector" aria-hidden="true"><path d={path} /><circle cx={geometry.end.x} cy={geometry.end.y} r="7.5" /><circle className="inner" cx={geometry.end.x} cy={geometry.end.y} r="2.5" /></svg>
    </section>

    <section className="career-list" aria-label="경력 목록">
      {careers.map(career => <div key={career.id} className={`career-entry${selectedId === career.id ? " is-selected" : ""}${expandedId === career.id ? " is-open" : ""}`}>
        <button id={`career-row-${career.id}`} className="career-row" type="button" aria-expanded={expandedId === career.id} aria-controls={`career-detail-${career.id}`} onMouseEnter={() => setSelectedId(career.id)} onFocus={() => setSelectedId(career.id)} onClick={() => openDetail(career.id)}>
          <span>{career.index}</span><b>{career.period}</b><strong>{career.company}</strong><em>{career.role}</em><i>{expandedId === career.id ? "접기 ↑" : "상세 보기 →"}</i>
        </button>
        {expandedId === career.id && <CareerDetail career={career} />}
      </div>)}
    </section>
    <section className="experience-resume"><div><p>RESUME</p><h2>전체 경력과 기술 스택</h2></div><a href={`${import.meta.env.BASE_URL}assets/resume/kim_yun_young_resume.pdf`} download="kim_yun_young_resume.pdf">이력서 다운로드 ↓</a></section>
    <footer className="experience-footer"><a href="#/contact">CONTACT ↗</a><span>bellelaide1005@gmail.com</span><p>© 2026 KIM YOON YOUNG. ALL RIGHTS RESERVED.</p></footer>
  </main>
}

function CareerDetail({ career }: { career: Career }) {
  return <motion.section id={`career-detail-${career.id}`} className="career-detail" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <header><p>{career.period} · {career.role}</p><h2>{career.company}</h2><span>서비스의 구조와 운영 흐름을 이해하며 프론트엔드 구현을 담당했습니다.</span></header>
    <section><h3>주요 업무</h3><ul>{career.duties.map(item => <li key={item}>{item}</li>)}</ul></section>
    {career.projects && <section><h3>주요 프로젝트</h3><div className="career-detail__projects">{career.projects.map(project => <div key={project}><strong>{project}</strong><span>Frontend Development</span><span>React · TypeScript</span><a href="#/projects">프로젝트 보기 →</a></div>)}</div></section>}
    <section><h3>기술</h3><div className="career-detail__tech">{career.technologies.map(item => <span key={item}>{item}</span>)}</div></section>
  </motion.section>
}
