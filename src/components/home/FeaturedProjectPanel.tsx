import { useEffect, useMemo, useRef, useState } from "react"
import type { FeaturedProject } from "@/data/featuredProjects"

type FeaturedProjectPanelProps = {
  projects: FeaturedProject[]
  selectedIndex: number
  onSelect: (index: number) => void
  anchorRef: React.RefObject<HTMLSpanElement | null>
}

const suggestedSearches = ["React", "접근성", "AI Agent"]

export default function FeaturedProjectPanel({
  projects,
  selectedIndex,
  onSelect,
  anchorRef,
}: FeaturedProjectPanelProps) {
  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [activeResultIndex, setActiveResultIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const blurTimerRef = useRef<number | null>(null)
  const selectedProject = projects[selectedIndex]

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase()
    if (!normalizedQuery) return []

    return projects
      .map((project, index) => ({ project, index }))
      .filter(({ project }) =>
        [
          project.title,
          project.description,
          ...project.previewItems,
          ...project.stack,
          ...project.searchKeywords,
        ]
          .join(" ")
          .toLocaleLowerCase()
          .includes(normalizedQuery)
      )
      .slice(0, 3)
  }, [projects, query])

  useEffect(() => {
    const focusSearch = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        inputRef.current?.focus()
      }
    }

    window.addEventListener("keydown", focusSearch)
    return () => window.removeEventListener("keydown", focusSearch)
  }, [])

  useEffect(
    () => () => {
      if (blurTimerRef.current !== null) window.clearTimeout(blurTimerRef.current)
    },
    []
  )

  if (!selectedProject) return null

  const runSearch = (value: string) => {
    setQuery(value)
    setActiveResultIndex(0)
    setIsOpen(true)
    inputRef.current?.focus()
  }

  const selectResult = (projectIndex: number) => {
    onSelect(projectIndex)
    setIsOpen(false)
    setQuery("")
    inputRef.current?.focus()
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      setIsOpen(false)
      return
    }

    if (!isOpen || results.length === 0) return

    if (event.key === "ArrowDown") {
      event.preventDefault()
      setActiveResultIndex((current) => (current + 1) % results.length)
    }

    if (event.key === "ArrowUp") {
      event.preventDefault()
      setActiveResultIndex(
        (current) => (current - 1 + results.length) % results.length
      )
    }

    if (event.key === "Enter") {
      event.preventDefault()
      const result = results[activeResultIndex]
      if (result) selectResult(result.index)
    }
  }

  return (
    <div className="featured-panel-shell">
      <div className="featured-panel">
        <div className="featured-panel__topbar">
          <div className="featured-panel__window-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <p>FEATURED PROJECT · {selectedProject.id === "ai-agent" ? "AI AGENT" : "SELECTED"}</p>
        </div>

        <section className="project-search" aria-labelledby="project-search-label">
          <label id="project-search-label" htmlFor="project-search">
            PROJECT SEARCH
            <span className="sr-only">프로젝트 검색</span>
          </label>
          <div className="project-search__input-wrap">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="m15.5 15.5 5 5" />
            </svg>
            <input
              ref={inputRef}
              id="project-search"
              type="search"
              role="combobox"
              aria-expanded={isOpen}
              aria-controls="project-search-results"
              aria-activedescendant={
                isOpen && results[activeResultIndex]
                  ? `project-result-${results[activeResultIndex].project.id}`
                  : undefined
              }
              autoComplete="off"
              value={query}
              placeholder="프로젝트명 또는 기술 검색"
              onChange={(event) => {
                setQuery(event.target.value)
                setActiveResultIndex(0)
                setIsOpen(Boolean(event.target.value.trim()))
              }}
              onFocus={() => query.trim() && setIsOpen(true)}
              onBlur={() => {
                blurTimerRef.current = window.setTimeout(() => setIsOpen(false), 120)
              }}
              onKeyDown={handleKeyDown}
            />
            <kbd>⌘ K</kbd>
          </div>

          <div className="project-search__suggestions" aria-label="추천 검색어">
            <span>추천 검색어</span>
            {suggestedSearches.map((keyword) => (
              <button type="button" key={keyword} onClick={() => runSearch(keyword)}>
                {keyword}
              </button>
            ))}
          </div>

          {isOpen && (
            <ul id="project-search-results" className="project-search__results" role="listbox">
              {results.length > 0 ? (
                results.map(({ project, index }, resultIndex) => (
                  <li
                    id={`project-result-${project.id}`}
                    key={project.id}
                    role="option"
                    aria-selected={activeResultIndex === resultIndex}
                  >
                    <button type="button" onMouseDown={() => selectResult(index)}>
                      <strong>{project.title}</strong>
                      <span>{project.stack.join(" · ")}</span>
                    </button>
                  </li>
                ))
              ) : (
                <li className="project-search__empty">검색 결과가 없습니다.</li>
              )}
            </ul>
          )}
        </section>

        <article className="project-card" aria-live="polite">
          <div className="project-card__heading">
            <span className="project-card__icon" aria-hidden="true">✦</span>
            <div>
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
            </div>
          </div>

          <ul className="project-card__features" aria-label="주요 기능">
            {selectedProject.previewItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="project-card__footer">
            <ul aria-label="기술 스택">
              {selectedProject.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href={selectedProject.href}>CASE STUDY ↗</a>
          </div>
        </article>
      </div>

      <span ref={anchorRef} className="featured-panel__anchor" aria-hidden="true" />
    </div>
  )
}
