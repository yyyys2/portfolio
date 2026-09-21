import { animate, motion, useMotionValue, useTransform } from "framer-motion"
import type { AnimationPlaybackControls } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { projectArchive } from "@/data/projectArchive"
import { selectedProjects as projectItems } from "@/data/selectedProjects"
import type { ProjectId, SelectedProject as ProjectItem } from "@/data/selectedProjects"
import { useReducedMotion } from "@/hooks/useReducedMotion"

function getLinkedProject(): ProjectId | null {
  const query = window.location.hash.split("?")[1] ?? ""
  const id = new URLSearchParams(query).get("project")
  return projectItems.find((project) => project.id === id)?.id ?? null
}

const aiAgentDevelopment = [
  {
    label: "ANALYSIS SCOPE",
    title: "분석 범위 설정과 업무별 FAQ",
    body: "회사·공장·담당자 등 분석 조건을 드롭다운으로 설정하고, 변경한 조건이 이후 질의와 결과에 반영되도록 구현했습니다. 수불·장기재고·수급 업무별 FAQ를 카테고리로 제공해 자주 사용하는 질문을 빠르게 실행할 수 있게 했습니다.",
  },
  {
    label: "CHAT & RESPONSE",
    title: "자연어 질의와 다양한 응답 유형 표시",
    body: "자연어 질문과 NL2SQL 모드에 대응하는 채팅 UI를 개발했습니다. 텍스트·테이블·차트·메일 형태의 결과를 표시하고, 추천 추가 질문과 결과별 Canvas 진입을 연결해 분석을 이어갈 수 있도록 구성했습니다.",
  },
  {
    label: "TABLE CANVAS",
    title: "분석 결과를 편집하고 재질의하는 Canvas",
    body: "채팅에서 받은 테이블을 별도 Canvas 패널로 열어 데이터를 수정할 수 있도록 구현했습니다. 수정한 데이터를 후속 질의에 활용할 수 있게 해 결과 확인과 추가 분석이 하나의 화면 흐름으로 이어지도록 했습니다.",
  },
  {
    label: "MAIL CANVAS",
    title: "메일 작성·발송과 수신자 검색",
    body: "메일 응답과 ‘나에게 쓰기’를 통해 메일을 작성·발송하는 Canvas를 개발했습니다. 수신자·참조 입력에서 @와 두 글자 이상 검색어로 사용자 목록을 조회하고 대상 사용자를 선택할 수 있도록 구현했습니다.",
  },
  {
    label: "HISTORY & FEEDBACK",
    title: "대화 이력 관리와 응답별 후속 액션",
    body: "새 대화 생성, 시간순 이력 조회·검색, 대화 이름 변경·삭제 팝업을 구현했습니다. 응답별 좋아요·싫어요, 코멘트, 나에게 메일 보내기, 복사, 북마크 액션을 제공해 결과 활용과 피드백을 지원했습니다.",
  },
  {
    label: "MESSAGE INPUT",
    title: "파일 첨부·음성 입력·질의 모드 선택",
    body: "메시지 입력 영역에 자연어 질문, 파일 첨부, 마이크를 통한 음성 인식 입력을 통합했습니다. 사용자 목적에 따라 질의 방식을 선택하고 실행할 수 있도록 입력 UI를 구성했습니다.",
  },
  {
    label: "NAVIGATION & ACCESS",
    title: "설정 화면 이동과 접근 권한별 탭 구성",
    body: "상단 탭에서 User Instruction·System Instruction 화면으로 이동하고, 로그인 사용자 정보를 확인할 수 있도록 구현했습니다. 사용자 접근 권한에 따라 이용 가능한 탭을 구분해 표시했습니다.",
  },
]

function ProductVisual({ project }: { project: ProjectItem }) {
  const isAi = project.id === "ai-agent"
  if (!isAi) {
    return <div className="product-visual">
      <div className="product-visual__chrome"><span /><span /><span /><b>● LIVE PREVIEW</b><i>•••</i></div>
      <div className="project-overview">
        <p>SELECTED PROJECT / {project.index}</p>
        <h2>{project.title}</h2>
        <div>{project.summary}</div>
        <ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        <small>담당 업무와 구현 기술을 바탕으로 재구성한 프로젝트 개요</small>
      </div>
    </div>
  }
  return (
    <div className="product-visual">
      <div className="product-visual__chrome"><span /><span /><span /><b>● LIVE PREVIEW</b><i>•••</i></div>
      <div className="product-visual__body">
        <aside>
          <strong><em>✦</em> {project.title}</strong>
          <button type="button">＋ 새 대화</button>
          <span className="is-active">분석 범위 · 회사 / 공장 / 담당자</span>
          <span>FAQ · 수불</span><span>FAQ · 장기재고</span><span>FAQ · 수급</span><span>대화 이력 검색</span><span>장기재고 현황 분석</span><span>수급 현황 확인</span>
        </aside>
        <section>
          <p className="product-visual__question">선택한 분석 범위의 장기재고를 보여줘</p>
          <div className="product-visual__answer"><b>AI</b><p>설정한 분석 조건에 따른 장기재고 현황입니다.<br />테이블을 Canvas에서 수정해 추가로 질문하거나,<br />분석 결과를 메일로 공유할 수 있습니다.</p></div>
          <div className="product-visual__table">
            <b>품목</b><b>분석 결과 · 예시 데이터</b><b>재고 수량</b>
            <span>PART-001</span><span>장기재고 검토 대상</span><span>120</span>
            <span>PART-002</span><span>장기재고 검토 대상</span><span>85</span>
            <span>PART-003</span><span>장기재고 검토 대상</span><span>64</span>
          </div>
          <div className="product-visual__input">메시지를 입력하세요… <b>→</b></div>
        </section>
        <aside className="product-visual__canvas"><div className="product-visual__canvas-tabs"><strong>Canvas</strong><span>테이블</span><span>메일</span></div><article><b>테이블 편집</b><p>응답 테이블의 데이터를 수정하고, 변경한 내용으로 추가 분석을 요청합니다.</p></article><article><b>메일 보내기</b><p>분석 결과 메일 작성<br />@사용자 검색<br />수신자·참조 선택<br />메일 발송</p></article></aside>
      </div>
    </div>
  )
}

export default function ProjectsView() {
  const [previewId, setPreviewId] = useState<ProjectId>(() => getLinkedProject() ?? "ai-agent")
  const [expandedId, setExpandedId] = useState<ProjectId | null>(getLinkedProject)
  const [archiveOpen, setArchiveOpen] = useState(false)
  const [geometry, setGeometry] = useState({ start: { x: 0, y: 0 }, end: { x: 0, y: 0 } })
  const heroRef = useRef<HTMLElement>(null)
  const periodRef = useRef<HTMLSpanElement>(null)
  const targetRef = useRef<HTMLSpanElement>(null)
  const floatControlsRef = useRef<AnimationPlaybackControls | null>(null)
  const [previewHovered, setPreviewHovered] = useState(false)
  const [previewFocused, setPreviewFocused] = useState(false)
  const reducedMotion = useReducedMotion()
  const floatY = useMotionValue(0)
  const endpointY = useTransform(floatY, (value) => geometry.end.y + value)
  const path = useTransform(floatY, (value) => {
    const distance = Math.max(100, geometry.end.x - geometry.start.x)
    const endY = geometry.end.y + value
    return `M ${geometry.start.x} ${geometry.start.y} C ${geometry.start.x + distance * 0.36} ${geometry.start.y}, ${geometry.end.x - distance * 0.3} ${endY + 10}, ${geometry.end.x} ${endY}`
  })
  const previewProject = projectItems.find((item) => item.id === previewId) ?? projectItems[0]!

  useEffect(() => {
    let frame = 0
    const scrollToProject = (projectId: ProjectId | null) => {
      cancelAnimationFrame(frame)
      if (!projectId) return
      frame = requestAnimationFrame(() => {
        document.getElementById(`project-row-${projectId}`)?.scrollIntoView({ block: "start", behavior: "instant" })
      })
    }
    const selectLinkedProject = () => {
      const projectId = getLinkedProject()
      setPreviewId(projectId ?? "ai-agent")
      setExpandedId(projectId)
      setPreviewHovered(false)
      setPreviewFocused(false)
      scrollToProject(projectId)
    }
    scrollToProject(getLinkedProject())
    window.addEventListener("hashchange", selectLinkedProject)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("hashchange", selectLinkedProject)
    }
  }, [])

  useEffect(() => {
    const hero = heroRef.current
    const period = periodRef.current
    const target = targetRef.current
    if (expandedId || !hero || !period || !target) return
    let frame = 0
    const measure = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const h = hero.getBoundingClientRect()
        const p = period.getBoundingClientRect()
        const t = target.getBoundingClientRect()
        setGeometry({
          start: { x: p.right - h.left - 0.8, y: p.top + p.height / 2 - h.top },
          // Store the resting position; the shared motion value moves both
          // the preview and its connector endpoint on each animation frame.
          end: { x: t.left + t.width / 2 - h.left, y: t.top + t.height / 2 - h.top - floatY.get() },
        })
      })
    }
    const observer = new ResizeObserver(measure)
    observer.observe(hero); observer.observe(period); observer.observe(target)
    window.addEventListener("resize", measure); document.fonts.ready.then(measure); measure()
    return () => { cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener("resize", measure) }
  }, [expandedId, previewId, floatY])

  useEffect(() => {
    floatY.set(0)
    if (reducedMotion || expandedId) return

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
  }, [floatY, reducedMotion, expandedId])

  useEffect(() => {
    const controls = floatControlsRef.current
    if (previewHovered || previewFocused) controls?.pause()
    else controls?.play()
  }, [previewHovered, previewFocused, reducedMotion, expandedId])

  const toggleProject = (id: ProjectId) => {
    setPreviewHovered(false)
    setPreviewFocused(false)
    setPreviewId(id)
    setExpandedId((current) => current === id ? null : id)
  }

  return (
    <main className={`projects-main${expandedId ? " is-expanded" : ""}`}>
      <section ref={heroRef} className="projects-hero" aria-labelledby="projects-title">
        <div className="projects-hero__copy">
          <p>PROJECTS · SELECTED WORK</p>
          <h1 id="projects-title">
            <span>Selected</span>
            <span className="projects-hero__accent">
              <span className="projects-hero__word">Projects</span>
              <span className="projects-hero__period">
                <span className="sr-only">.</span>
                <span ref={periodRef} className="projects-hero__period-dot" aria-hidden="true" />
              </span>
            </span>
          </h1>
          <div>참여한 프로젝트의 담당 업무와 문제 해결 과정을 정리했습니다.</div>
        </div>
          <motion.div
            className="projects-preview"
            hidden={expandedId !== null}
            style={{ y: floatY, rotate: "var(--hero-preview-tilt)" }}
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            onPointerEnter={() => setPreviewHovered(true)}
            onPointerLeave={() => setPreviewHovered(false)}
            onFocusCapture={() => setPreviewFocused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setPreviewFocused(false)
            }}
          >
            <span ref={targetRef} className="projects-connector-anchor" aria-hidden="true" />
            <ProductVisual project={previewProject} />
          </motion.div>
        {!expandedId && <svg className="projects-connector" aria-hidden="true"><motion.path d={path} /><motion.circle cx={geometry.end.x} cy={endpointY} r="7" /><motion.circle className="inner" cx={geometry.end.x} cy={endpointY} r="2.5" /></svg>}
      </section>

      <section className="projects-list" aria-label="선택 프로젝트">
        {projectItems.map((project) => {
          const expanded = expandedId === project.id
          const selected = previewId === project.id
          return <div key={project.id} className={`project-entry${selected ? " is-selected" : ""}${expanded ? " is-open" : ""}`}>
            <button
              type="button"
              className="project-row"
              id={`project-row-${project.id}`}
              aria-expanded={expanded}
              aria-controls={`project-detail-${project.id}`}
              onMouseEnter={() => setPreviewId(project.id)}
              onMouseLeave={() => setPreviewId(expandedId ?? "ai-agent")}
              onFocus={() => setPreviewId(project.id)}
              onClick={() => toggleProject(project.id)}
            >
              <span className="project-row__index">{project.index}</span><strong>{project.title}</strong><span className="project-row__summary">{project.summary}</span>
              <span className="project-row__tags">{project.tags.map(tag => <i key={tag}>{tag}</i>)}</span>
              <span className="project-row__action">{expanded ? "접기 ↑" : "상세 보기 ↓"}</span>
            </button>
            {expanded && <ProjectDetail id={`project-detail-${project.id}`} project={project} />}
          </div>
        })}
      </section>

      <section className="projects-archive">
        <button type="button" aria-expanded={archiveOpen} aria-controls="projects-archive-list" onClick={() => setArchiveOpen(v => !v)}>
          <span className="projects-archive__label">
            <svg className="projects-archive__chevron" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="m6 9 6 6 6-6" />
            </svg>
            OTHER PROJECTS
          </span>
          <span className="projects-archive__action">
            {archiveOpen ? "다른 프로젝트 접기" : "다른 프로젝트 보기"}
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d={archiveOpen ? "M5 12h14" : "M5 12h14M12 5v14"} />
            </svg>
          </span>
        </button>
        <div id="projects-archive-list" className="projects-archive__body" hidden={!archiveOpen}><ul>{projectArchive.map((project) => <li key={project.id}><div><strong>{project.title}</strong><p>{project.summary}</p></div><span>{project.role}</span><span>{project.stack.join(" · ")}</span></li>)}</ul></div>
      </section>
      <footer className="projects-footer"><a href="#/contact">CONTACT ↗</a><span>bellelaide1005@gmail.com</span><p>© 2026 KIM YOON YOUNG. ALL RIGHTS RESERVED.</p></footer>
    </main>
  )
}

function ProjectDetail({ id, project }: { id: string; project: ProjectItem }) {
  const isAi = project.id === "ai-agent"
  const decisions = isAi
    ? [["응답 모델", "Zod Discriminated Union"], ["서버 상태", "TanStack Query"], ["화면 상태", "Zustand"], ["공통 UI", "Popup · Canvas Panel"]]
    : [["프로젝트", project.fullTitle], ["담당 영역", project.summary], ["주요 기술", project.tags.join(" · ")]]
  return <motion.section id={id} className="project-detail" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
    <div className="project-detail__visual"><ProductVisual project={project} /></div>
    <p className="project-detail__caption">공개용 재구성 화면 · 실제 기능 흐름을 기준으로 제작</p>
    {isAi ? <>
      <h2 className="project-detail__heading">주요 개발 내용</h2>
      {aiAgentDevelopment.map((item, index) => <DetailBlock key={item.label} index={String(index + 1).padStart(2, "0")} {...item} />)}
    </> : project.details.map((item, index) => (
      <DetailBlock key={item.label} index={String(index + 1).padStart(2, "0")} {...item} />
    ))}
    <section className="project-decisions" aria-labelledby={`${id}-decisions-title`}>
      <header>
        <p className="project-decisions__eyebrow">{isAi ? "FRONTEND DECISIONS" : "PROJECT OVERVIEW"}</p>
        <h3 id={`${id}-decisions-title`}>{isAi ? "기술 선택과 설계" : "프로젝트 요약"}</h3>
      </header>
      <dl>{decisions.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
    </section>
  </motion.section>
}

function DetailBlock({ index, label, title, body }: { index: string; label: string; title: string; body: string }) {
  return <section className="project-detail-block"><div><b>{index}</b><span>{label}</span></div><div><h3>{title}</h3><p>{body}</p></div></section>
}
