import { useRef, useState } from "react"

export type DemoState = "default" | "focus" | "done"

const demoStates: Array<{ id: DemoState; label: string }> = [
  { id: "default", label: "DEFAULT" },
  { id: "focus", label: "FOCUS" },
  { id: "done", label: "DONE" },
]

const codeByState: Record<DemoState, { variant: string; label: string }> = {
  default: { variant: "primary", label: "검색하기" },
  focus: { variant: "outline", label: "검색하기" },
  done: { variant: "success", label: "완료되었습니다" },
}

type ComponentPlaygroundProps = {
  anchorRef: React.RefObject<HTMLSpanElement | null>
}

export default function ComponentPlayground({ anchorRef }: ComponentPlaygroundProps) {
  const [state, setState] = useState<DemoState>("default")
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const selected = codeByState[state]

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
          <div className="component-tree__row" role="treeitem" aria-expanded="true"><span>⌄</span>&lt;App&gt;</div>
          <div className="component-tree__row component-tree__row--1" role="treeitem"><span>›</span>&lt;Header /&gt;</div>
          <div className="component-tree__row component-tree__row--1" role="treeitem" aria-expanded="true"><span>⌄</span>&lt;Main&gt;</div>
          <div className="component-tree__row component-tree__row--2" role="treeitem"><span>›</span>&lt;Search /&gt;</div>
          <div className="component-tree__row component-tree__row--selected component-tree__row--2" role="treeitem" aria-selected="true">
            <span ref={anchorRef} className="component-tree__anchor" aria-hidden="true" />
            <span>›</span>&lt;Button /&gt;<b aria-hidden="true">›</b>
          </div>
          <div className="component-tree__row component-tree__row--2" role="treeitem"><span>›</span>&lt;Card /&gt;</div>
          <div className="component-tree__row component-tree__row--1" role="treeitem"><span>›</span>&lt;Footer /&gt;</div>
        </div>

        <div className="component-demo">
          <p className="component-demo__helper">상태를 선택하면 UI와 코드가 바뀝니다.</p>
          <div className="component-demo__tabs" role="tablist" aria-label="버튼 상태 선택">
            {demoStates.map((item, index) => (
              <button
                key={item.id}
                ref={(node) => { tabRefs.current[index] = node }}
                type="button"
                role="tab"
                aria-selected={state === item.id}
                tabIndex={state === item.id ? 0 : -1}
                onClick={() => setState(item.id)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >{item.label}</button>
            ))}
          </div>

          <div className="component-demo__preview" aria-live="polite">
            <div className={`demo-preview demo-preview--default${state === "default" ? " is-active" : ""}`}>검색하기 <span>→</span></div>
            <div className={`demo-preview demo-preview--focus${state === "focus" ? " is-active" : ""}`}>검색하기 <span>→</span></div>
            <div className={`demo-preview demo-preview--done${state === "done" ? " is-active" : ""}`}><span>✓</span> 완료되었습니다</div>
          </div>

          <div className="component-demo__code" aria-label={`${state} 상태 코드`}>
            <span className="component-demo__gutter">1<br />2<br />3<br />4<br />5</span>
            <pre><code><span className="code-blue">&lt;Button</span>{"\n"}  onClick={'{handleSearch}'}{"\n"}  variant=<span className="code-coral">&quot;{selected.variant}&quot;</span>{"\n"}&gt;{"\n"}  {selected.label} <span className="code-blue">&lt;/Button&gt;</span></code></pre>
          </div>
        </div>
      </div>
    </div>
  )
}
