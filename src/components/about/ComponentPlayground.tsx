import { useRef, useState } from "react"
import { selectedProjects } from "@/data/selectedProjects"
import type { SelectedProject } from "@/data/selectedProjects"

export type DemoState = "default" | "focus" | "done"
export type ComponentId = "app" | "header" | "main" | "search" | "button" | "card" | "footer"

const componentNodes: Array<{ id: ComponentId; name: string; level: number; parent?: ComponentId; branch?: boolean; position: number; siblings: number }> = [
  { id: "app", name: "App", level: 1, branch: true, position: 1, siblings: 1 },
  { id: "header", name: "Header", level: 2, parent: "app", position: 1, siblings: 3 },
  { id: "main", name: "Main", level: 2, parent: "app", branch: true, position: 2, siblings: 3 },
  { id: "search", name: "Search", level: 3, parent: "main", position: 1, siblings: 3 },
  { id: "button", name: "Button", level: 3, parent: "main", position: 2, siblings: 3 },
  { id: "card", name: "Card", level: 3, parent: "main", position: 3, siblings: 3 },
  { id: "footer", name: "Footer", level: 2, parent: "app", position: 3, siblings: 3 },
]

const componentDescriptions: Record<ComponentId, string> = {
  app: "작은 화면 안에 담은 포트폴리오",
  header: "길을 잃지 않는 내비게이션",
  main: "작업을 발견하는 공간",
  search: "필요한 프로젝트를 빠르게",
  button: "클릭 다음의 상태까지",
  card: "한눈에 읽히는 프로젝트",
  footer: "다음 대화로 이어지는 마무리",
}

const projectFilters = ["전체", "웹", "디바이스"] as const
const menuContent: Record<string, { title: string; body: string }> = {
  PROJECTS: { title: "Selected work.", body: "AI 업무 UI부터 TV와 데스크톱 앱까지." },
  ABOUT: { title: "Built with care.", body: "서비스를 이해하고, 오래 쓰이는 UI를 만듭니다." },
  CONTACT: { title: "Let’s make it work.", body: "함께 만들 다음 화면에 대해 이야기해요." },
}

function ProjectArtwork({ project }: { project: SelectedProject }) {
  return <div className={`playground-art playground-art--${project.id}`} aria-hidden="true">
    {project.id === "ai-agent" ? <div className="playground-art__chat"><span>✦ AI Agent</span><i /><i /><div><b /><b /><b /></div></div>
      : project.id === "tv-overlay-shopping" ? <div className="playground-art__tv"><span>NOW PLAYING</span><div><i /><i /><i /></div></div>
      : project.id === "digital-signage-management" ? <div className="playground-art__dashboard"><span>OVERVIEW</span><div><i /><i /><i /><i /><i /></div></div>
      : <div className="playground-art__note"><span>오늘의 아이디어</span><i /><i /><i /></div>}
  </div>
}

function ProjectTile({ project }: { project: SelectedProject }) {
  return <a className="playground-project-tile" href={`#/projects?project=${project.id}`}><ProjectArtwork project={project} /><div><strong>{project.title}</strong><span>↗</span></div><small>{project.tags.slice(0, 2).join(" · ")}</small></a>
}

const demoStates: Array<{ id: DemoState; label: string }> = [
  { id: "default", label: "DEFAULT" },
  { id: "focus", label: "FOCUS" },
  { id: "done", label: "DONE" },
]

const variantByState: Record<DemoState, string> = {
  default: "primary",
  focus: "outline",
  done: "success",
}

type ComponentPlaygroundProps = {
  anchorRef: React.RefObject<HTMLSpanElement | null>
  selectedComponent: ComponentId
  onSelectComponent: (id: ComponentId) => void
}

export default function ComponentPlayground({ anchorRef, selectedComponent, onSelectComponent }: ComponentPlaygroundProps) {
  const [state, setState] = useState<DemoState>("default")
  const [expanded, setExpanded] = useState({ app: true, main: true })
  const [query, setQuery] = useState("")
  const [saved, setSaved] = useState(false)
  const [activeMenu, setActiveMenu] = useState("PROJECTS")
  const [projectFilter, setProjectFilter] = useState<typeof projectFilters[number]>("전체")
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle")
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const treeRefs = useRef<Partial<Record<ComponentId, HTMLButtonElement | null>>>({})
  const visibleNodes = componentNodes.filter(node => node.id === "app" || (expanded.app && (node.parent !== "main" || expanded.main)))
  const results = selectedProjects.filter(project => [project.title, ...project.tags, ...project.searchKeywords].join(" ").toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()))
  const filteredProjects = selectedProjects.filter(project => projectFilter === "전체" || (projectFilter === "디바이스" ? ["tv-overlay-shopping", "memomi"].includes(project.id) : ["ai-agent", "digital-signage-management"].includes(project.id)))
  const featured = selectedProjects[0]!
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("bellelaide1005@gmail.com")
      setCopyState("copied")
    } catch {
      setCopyState("failed")
    }
  }
  const sourceByComponent: Record<ComponentId, string> = {
    app: "<App>\n  <Header />\n  <Main />\n  <Footer />\n</App>",
    header: `<Header\n  activeMenu="${activeMenu}"\n  onNavigate={setActiveMenu}\n/>`,
    main: `<ProjectGrid\n  category="${projectFilter}"\n  projects={filteredProjects}\n/>`,
    search: `<Search\n  value={${JSON.stringify(query)}}\n  onChange={setQuery}\n  results={filteredProjects}\n/>`,
    button: `<Button variant="${variantByState[state]}"\n  onClick={handleSave}>\n  ${state === "done" ? "저장되었습니다" : "관심 프로젝트에 저장"}\n</Button>`,
    card: `<Card\n  title="AI Agent UI"\n  saved={${saved}}\n  onSave={toggleSaved}\n/>`,
    footer: '<ContactFooter\n  email="bellelaide1005@gmail.com"\n  onCopy={copyEmail}\n/>',
  }

  const selectTreeNode = (id: ComponentId) => {
    onSelectComponent(id)
    treeRefs.current[id]?.focus()
  }

  const handleTreeKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, id: ComponentId) => {
    const index = visibleNodes.findIndex(node => node.id === id)
    const node = visibleNodes[index]!
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault()
      const nextIndex = Math.max(0, Math.min(visibleNodes.length - 1, index + (event.key === "ArrowDown" ? 1 : -1)))
      selectTreeNode(visibleNodes[nextIndex]!.id)
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault()
      selectTreeNode(visibleNodes[event.key === "Home" ? 0 : visibleNodes.length - 1]!.id)
    } else if (event.key === "ArrowRight") {
      event.preventDefault()
      if (id === "app" || id === "main") {
        if (!expanded[id]) setExpanded(current => ({ ...current, [id]: true }))
        else selectTreeNode(visibleNodes[index + 1]!.id)
      }
    } else if (event.key === "ArrowLeft") {
      event.preventDefault()
      if ((id === "app" || id === "main") && expanded[id]) setExpanded(current => ({ ...current, [id]: false }))
      else if (node.parent) selectTreeNode(node.parent)
    }
  }

  const selectByIndex = (index: number) => {
    const nextIndex = (index + demoStates.length) % demoStates.length
    const nextState = demoStates[nextIndex]
    if (!nextState) return
    setState(nextState.id)
    tabRefs.current[nextIndex]?.focus()
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault()
      selectByIndex(index + 1)
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault()
      selectByIndex(index - 1)
    } else if (event.key === "Home") {
      event.preventDefault()
      selectByIndex(0)
    } else if (event.key === "End") {
      event.preventDefault()
      selectByIndex(demoStates.length - 1)
    }
  }

  return (
    <div className="component-playground">
      <div className="component-playground__header">
        <div className="component-playground__dots" aria-hidden="true"><span /><span /><span /></div>
        <div className="component-playground__tools" aria-hidden="true">
          <span className="is-active">Elements</span><span>Console</span><span>Sources</span>
        </div>
        <div className="component-playground__badge"><span aria-hidden="true">●</span> INTERACTIVE DEMO</div>
        <span className="component-playground__more" aria-hidden="true">•••</span>
      </div>

      <div className="component-playground__body">
        <div className="component-tree" role="tree" aria-label="컴포넌트 구조">
          {visibleNodes.map(node => {
            const active = selectedComponent === node.id
            const open = node.id === "app" || node.id === "main" ? expanded[node.id] : undefined
            return <button
              key={node.id}
              ref={element => { treeRefs.current[node.id] = element }}
              type="button"
              role="treeitem"
              aria-label={node.name}
              aria-level={node.level}
              aria-posinset={node.position}
              aria-setsize={node.siblings}
              aria-selected={active}
              aria-expanded={open}
              tabIndex={active ? 0 : -1}
              className={`component-tree__row component-tree__row--${node.level - 1}${active ? " component-tree__row--selected" : ""}`}
              onClick={() => {
                selectTreeNode(node.id)
                if (node.id === "app" || node.id === "main") setExpanded(current => ({ ...current, [node.id]: !open }))
              }}
              onKeyDown={event => handleTreeKeyDown(event, node.id)}
            >
              {active && <span ref={anchorRef} className="component-tree__anchor" aria-hidden="true" />}
              <span aria-hidden="true">{open ? "⌄" : "›"}</span>&lt;{node.name}{node.branch ? ">" : " />"}{active && <b aria-hidden="true">›</b>}
            </button>
          })}
        </div>

        <div className="playground-workbench">
          <header className="playground-workbench__heading"><div><span>{selectedComponent.toUpperCase()} / PREVIEW</span><p>{componentDescriptions[selectedComponent]}</p></div><span className="playground-workbench__live"><i /> LIVE</span></header>
          <div key={selectedComponent} className={`playground-stage playground-stage--${selectedComponent}`} aria-label={`${selectedComponent} 미리보기`}>
            {selectedComponent === "app" && <div className="mini-portfolio">
              <div className="mini-portfolio__nav"><b>KYY<span>.</span></b><span>FRONTEND DEVELOPER</span><a href="#/contact">LET’S TALK ↗</a></div>
              <div className="mini-portfolio__hero"><div><small>DESIGN TO EXPERIENCE</small><h3>생각을 화면으로,<br /><em>경험을 더 가깝게.</em></h3></div><span className="mini-portfolio__mark" aria-hidden="true">✳</span></div>
              <div className="mini-portfolio__projects">{selectedProjects.slice(0, 3).map(project => <ProjectTile key={project.id} project={project} />)}</div>
              <div className="mini-portfolio__footer"><span>코드와 디테일 사이, 좋은 경험을 만듭니다.</span><a href="#/projects">ALL WORK ↗</a></div>
            </div>}
            {selectedComponent === "header" && <div className="playground-navigation">
              <div className="playground-navigation__bar"><b>KYY<span>.</span></b><nav aria-label="헤더 데모 메뉴">{Object.keys(menuContent).map(menu => <button type="button" key={menu} aria-pressed={activeMenu === menu} onClick={() => setActiveMenu(menu)}>{menu}</button>)}</nav></div>
              <div className="playground-navigation__page" aria-live="polite"><span>0{Object.keys(menuContent).indexOf(activeMenu) + 1} / {activeMenu}</span><h3>{menuContent[activeMenu]!.title}</h3><p>{menuContent[activeMenu]!.body}</p><div className="playground-navigation__line" /><small>메뉴를 선택하면 현재 위치와 콘텐츠가 함께 바뀝니다.</small></div>
            </div>}
            {selectedComponent === "main" && <div className="playground-gallery">
              <div className="playground-section-title"><h3>Selected work<span>.</span></h3><span>{String(filteredProjects.length).padStart(2, "0")} PROJECTS</span></div>
              <div className="playground-filters" aria-label="프로젝트 분류">{projectFilters.map(filter => <button type="button" key={filter} aria-pressed={projectFilter === filter} onClick={() => setProjectFilter(filter)}>{filter}</button>)}</div>
              <div className="playground-gallery__grid">{filteredProjects.map(project => <ProjectTile key={project.id} project={project} />)}</div>
            </div>}
            {selectedComponent === "search" && <div className="playground-search">
              <label htmlFor="playground-search">어떤 작업이 궁금하세요?</label><div className="playground-search__field"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10" cy="10" r="6" /><path d="m15 15 5 5" /></svg><input id="playground-search" value={query} onChange={event => setQuery(event.target.value)} placeholder="프로젝트명 또는 기술 검색" />{query && <button type="button" aria-label="검색어 지우기" onClick={() => setQuery("")}>×</button>}</div>
              <div className="playground-search__meta"><span>{query ? "SEARCH RESULTS" : "SELECTED PROJECTS"}</span><span aria-live="polite">{results.length}개의 프로젝트</span></div>
              <ul>{results.length ? results.map(project => <li key={project.id}><a href={`#/projects?project=${project.id}`}><span className="playground-search__icon">{project.index}</span><span><strong>{project.title}</strong><small>{project.tags.slice(0, 3).join(" · ")}</small></span><span>↗</span></a></li>) : <li className="playground-search__empty"><strong>일치하는 작업이 없어요.</strong><span>React, webOS, AI로 다시 찾아보세요.</span><button type="button" onClick={() => setQuery("")}>전체 프로젝트 보기 →</button></li>}</ul>
            </div>}
            {selectedComponent === "button" && <div className="playground-action">
              <div className="component-demo__tabs" role="tablist" aria-label="버튼 상태 선택">{demoStates.map((item, index) => <button key={item.id} ref={node => { tabRefs.current[index] = node }} type="button" role="tab" aria-selected={state === item.id} tabIndex={state === item.id ? 0 : -1} onClick={() => setState(item.id)} onKeyDown={event => handleKeyDown(event, index)}>{item.label}</button>)}</div>
              <div className="playground-action__surface"><div className="playground-action__project"><ProjectArtwork project={featured} /><div><small>YOUR COLLECTION</small><strong>{featured.title}</strong><span>다시 보고 싶은 작업을 담아두세요.</span></div></div><button type="button" className={`playground-primary playground-primary--${state}`} onClick={() => setState(current => current === "done" ? "default" : "done")}><span>{state === "done" ? "✓ 저장되었습니다" : "관심 프로젝트에 저장"}</span><span aria-hidden="true">{state === "done" ? "↺" : "+"}</span></button><p aria-live="polite">{state === "done" ? "저장 완료! 버튼을 다시 누르면 초기화됩니다." : state === "focus" ? "키보드 사용자를 위한 포커스 표시를 확인하세요." : "버튼을 눌러 완료 상태를 직접 확인하세요."}</p></div>
            </div>}
            {selectedComponent === "card" && <article className="playground-featured"><ProjectArtwork project={featured} /><div className="playground-featured__content"><div className="playground-featured__eyebrow"><span>01 / FEATURED WORK</span><button type="button" aria-label={saved ? "프로젝트 저장 취소" : "프로젝트 저장"} aria-pressed={saved} onClick={() => setSaved(current => !current)}>{saved ? "♥" : "♡"}</button></div><h3>{featured.title}</h3><p>{featured.description}</p><div className="playground-featured__tags">{featured.tags.slice(0, 3).map(tag => <span key={tag}>{tag}</span>)}</div><a href={`#/projects?project=${featured.id}`}>프로젝트 살펴보기 <span>↗</span></a><small aria-live="polite">{saved ? "관심 프로젝트에 저장했어요." : "하트를 눌러 관심 작업으로 저장하세요."}</small></div></article>}
            {selectedComponent === "footer" && <div className="playground-contact"><span>HAVE SOMETHING IN MIND?</span><div><h3>다음 화면을<br /><em>함께 만들어요.</em></h3><a href="#/contact" aria-label="연락처 페이지로 이동">↗</a></div><div className="playground-contact__email"><a href="mailto:bellelaide1005@gmail.com">bellelaide1005@gmail.com</a><button type="button" onClick={copyEmail}>{copyState === "copied" ? "복사 완료 ✓" : "주소 복사"}</button></div><p aria-live="polite">{copyState === "failed" ? "이메일 주소를 직접 선택해 복사해 주세요." : "© 2026 KIM YUN YOUNG · BUILT WITH CARE"}</p></div>}
          </div>
          <div className="playground-source"><div><span>{componentNodes.find(node => node.id === selectedComponent)?.name}.tsx</span><span>React · TypeScript</span></div><div className="component-demo__code" aria-label={`${selectedComponent} 예시 코드`}><span className="component-demo__gutter" aria-hidden="true">{sourceByComponent[selectedComponent].split("\n").map((_, index) => <span key={index}>{index + 1}<br /></span>)}</span><pre><code>{sourceByComponent[selectedComponent]}</code></pre></div></div>
        </div>
      </div>
    </div>
  )
}
