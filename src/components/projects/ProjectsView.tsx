import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

type ProjectId = "ai-agent" | "webos-tv" | "smart-solution" | "memomi"
type ProjectItem = {
  id: ProjectId
  index: string
  title: string
  summary: string
  tags: string[]
}

const projectItems: ProjectItem[] = [
  { id: "ai-agent", index: "01", title: "AI Agent", summary: "대화·차트·테이블·메일 응답과 Canvas 패널을 구현했습니다.", tags: ["React", "TypeScript", "Zustand", "TanStack Query"] },
  { id: "webos-tv", index: "02", title: "webOS TV", summary: "리모컨과 제한된 브라우저 환경을 고려해 TV UI를 구현했습니다.", tags: ["Svelte", "TypeScript", "webOS"] },
  { id: "smart-solution", index: "03", title: "SmartSolution API Portal", summary: "반복되는 화면을 공통 컴포넌트와 UI 규칙으로 정리했습니다.", tags: ["React", "Next.js", "TypeScript"] },
  { id: "memomi", index: "04", title: "Memomi", summary: "빠른 기록과 재진입에 집중한 Windows 메모 앱을 개발했습니다.", tags: ["Tauri", "React", "TypeScript"] },
]

function ProductVisual({ project }: { project: ProjectItem }) {
  return (
    <div className="product-visual">
      <div className="product-visual__chrome"><span /><span /><span /><b>● LIVE PREVIEW</b><i>•••</i></div>
      <div className="product-visual__body">
        <aside>
          <strong>✦ {project.title}</strong>
          <button type="button">＋ 새 대화</button>
          <span className="is-active">프로젝트 기획 초안에 대해…</span>
          <span>UI 컴포넌트 구조 제안</span><span>데이터 시각화 방법</span><span>에러 대응 전략 정리</span><span>배포 계획 검토</span>
        </aside>
        <section>
          <p className="product-visual__question">프로젝트 기획 초안에 대해 정리해줘</p>
          <div className="product-visual__answer"><b>AI</b><p>요청하신 내용을 바탕으로 정리한 프로젝트 기획 초안입니다.<br />주요 목표와 핵심 기능을 중심으로 구성했어요.</p></div>
          <div className="product-visual__table"><b>구분</b><b>내용</b><span>프로젝트 목표</span><span>사용자 경험 개선</span><span>주요 기능</span><span>질문·답변·데이터 분석</span><span>기술 스택</span><span>React, TypeScript</span></div>
          <div className="product-visual__input">메시지를 입력하세요… <b>→</b></div>
        </section>
        <aside className="product-visual__canvas"><strong>Canvas</strong><article><b>프로젝트 아이디어</b><p>사용할 수 있는 도구와 일정을 정리합니다.</p></article><article><b>다음에 할 일</b><p>□ 핵심 기능 정리<br />□ 데이터 흐름 설계<br />□ 개발 일정 수립</p></article></aside>
      </div>
    </div>
  )
}

export default function ProjectsView() {
  const [previewId, setPreviewId] = useState<ProjectId>("ai-agent")
  const [expandedId, setExpandedId] = useState<ProjectId | null>(null)
  const [archiveOpen, setArchiveOpen] = useState(false)
  const [geometry, setGeometry] = useState({ start: { x: 0, y: 0 }, end: { x: 0, y: 0 } })
  const heroRef = useRef<HTMLElement>(null)
  const periodRef = useRef<HTMLSpanElement>(null)
  const targetRef = useRef<HTMLSpanElement>(null)
  const previewProject = projectItems.find((item) => item.id === previewId) ?? projectItems[0]!

  useEffect(() => {
    const hero = heroRef.current
    const period = periodRef.current
    const target = targetRef.current
    if (!hero || !period || !target) return
    let frame = 0
    const measure = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const h = hero.getBoundingClientRect()
        const p = period.getBoundingClientRect()
        const t = target.getBoundingClientRect()
        setGeometry({
          start: { x: p.right - h.left, y: p.top + p.height * 0.88 - h.top },
          end: { x: t.left + t.width / 2 - h.left, y: t.top + t.height / 2 - h.top },
        })
      })
    }
    const observer = new ResizeObserver(measure)
    observer.observe(hero); observer.observe(period); observer.observe(target)
    window.addEventListener("resize", measure); document.fonts.ready.then(measure); measure()
    return () => { cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener("resize", measure) }
  }, [expandedId, previewId])

  const distance = Math.max(100, geometry.end.x - geometry.start.x)
  const path = `M ${geometry.start.x} ${geometry.start.y} C ${geometry.start.x + distance * 0.36} ${geometry.start.y}, ${geometry.end.x - distance * 0.3} ${geometry.end.y + 10}, ${geometry.end.x} ${geometry.end.y}`

  const toggleProject = (id: ProjectId) => {
    setPreviewId(id)
    setExpandedId((current) => current === id ? null : id)
  }

  return (
    <main className={`projects-main${expandedId ? " is-expanded" : ""}`}>
      <section ref={heroRef} className="projects-hero" aria-labelledby="projects-title">
        <div className="projects-hero__copy">
          <p>PROJECTS · SELECTED WORK</p>
          <h1 id="projects-title"><span>Selected</span><span className="projects-hero__accent">Projects<span ref={periodRef}>.</span></span></h1>
          <div>참여한 프로젝트의 담당 업무와 문제 해결 과정을 정리했습니다.</div>
        </div>
        {!expandedId && (
          <motion.div className="projects-preview" key={previewId} initial={{ opacity: 0.7 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
            <span ref={targetRef} className="projects-connector-anchor" aria-hidden="true" />
            <ProductVisual project={previewProject} />
          </motion.div>
        )}
        <svg className="projects-connector" aria-hidden="true"><path d={path} /><circle cx={geometry.end.x} cy={geometry.end.y} r="7" /><circle className="inner" cx={geometry.end.x} cy={geometry.end.y} r="2.5" /></svg>
      </section>

      <section className="projects-list" aria-label="선택 프로젝트">
        {projectItems.map((project) => {
          const expanded = expandedId === project.id
          const selected = previewId === project.id
          return <div key={project.id} className={`project-entry${selected ? " is-selected" : ""}${expanded ? " is-open" : ""}`}>
            <button
              type="button"
              className="project-row"
              aria-expanded={expanded}
              aria-controls={`project-detail-${project.id}`}
              onMouseEnter={() => setPreviewId(project.id)}
              onMouseLeave={() => setPreviewId(expandedId ?? "ai-agent")}
              onFocus={() => setPreviewId(project.id)}
              onClick={() => toggleProject(project.id)}
            >
              {expanded && <span ref={targetRef} className="projects-connector-anchor projects-connector-anchor--row" aria-hidden="true" />}
              <span className="project-row__index">{project.index}</span><strong>{project.title}</strong><span className="project-row__summary">{project.summary}</span>
              <span className="project-row__tags">{project.tags.map(tag => <i key={tag}>{tag}</i>)}</span>
              <span className="project-row__action">{expanded ? "접기 ↑" : "상세 보기 ↓"}</span>
            </button>
            {expanded && <ProjectDetail id={`project-detail-${project.id}`} project={project} />}
          </div>
        })}
      </section>

      <section className="projects-archive">
        <button type="button" aria-expanded={archiveOpen} onClick={() => setArchiveOpen(v => !v)}><span>{archiveOpen ? "⌃" : "⌄"} OTHER PROJECTS</span><span>다른 프로젝트 보기 {archiveOpen ? "−" : "+"}</span></button>
        {archiveOpen && <div className="projects-archive__body">운영·관리자·프로모션 프로젝트는 기존 프로젝트 데이터에서 계속 정리하고 있습니다.</div>}
      </section>
      <footer className="projects-footer"><a href="#/contact">CONTACT ↗</a><span>bellelaide1005@gmail.com</span><p>© 2026 KIM YOON YOUNG. ALL RIGHTS RESERVED.</p></footer>
    </main>
  )
}

function ProjectDetail({ id, project }: { id: string; project: ProjectItem }) {
  const isAi = project.id === "ai-agent"
  return <motion.section id={id} className="project-detail" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
    <div className="project-detail__visual"><ProductVisual project={project} /></div>
    <p className="project-detail__caption">공개용 재구성 화면 · 실제 기능 흐름을 기준으로 제작</p>
    <DetailBlock index="01" label="PROBLEM" title={isAi ? "응답 유형마다 화면과 후속 작업이 달랐습니다." : `${project.title}의 화면 흐름과 운영 상태를 정리했습니다.`} body={isAi ? "차트·테이블·메일 응답은 서로 다른 상태와 작업 흐름을 가졌습니다. Canvas 확장까지 함께 관리해야 했습니다." : project.summary} />
    <DetailBlock index="02" label="IMPLEMENTATION" title={isAi ? "응답 데이터와 화면 상태의 책임을 나눴습니다." : "기능과 화면 상태의 책임을 분리했습니다."} body={isAi ? "응답 유형을 명확하게 구분하고 유형별 렌더러를 구성했습니다. 서버 상태와 UI 상태도 각각의 역할에 맞게 분리했습니다." : "반복되는 UI를 공통화하고 환경별 인터랙션 규칙을 컴포넌트 단위로 정리했습니다."} />
    <DetailBlock index="03" label="RESULT" title={isAi ? "기존 흐름을 유지하며 기능을 추가할 수 있게 했습니다." : "변경과 운영에 대응하기 쉬운 구조로 정리했습니다."} body={isAi ? "공통 처리 영역을 유지한 채 새로운 응답 유형과 후속 작업을 추가할 수 있는 구조로 정리했습니다." : "핵심 흐름을 유지하면서도 기능을 확장할 수 있도록 화면 구조와 상태 경계를 명확히 했습니다."} />
    <div className="project-decisions"><h3>FRONTEND DECISIONS</h3><dl><div><dt>응답 모델</dt><dd>Zod Discriminated Union</dd></div><div><dt>서버 상태</dt><dd>TanStack Query</dd></div><div><dt>화면 상태</dt><dd>Zustand</dd></div><div><dt>공통 UI</dt><dd>Popup · Canvas Panel</dd></div></dl></div>
  </motion.section>
}

function DetailBlock({ index, label, title, body }: { index: string; label: string; title: string; body: string }) {
  return <section className="project-detail-block"><div><b>{index}</b><span>{label}</span></div><div><h3>{title}</h3><p>{body}</p></div></section>
}
