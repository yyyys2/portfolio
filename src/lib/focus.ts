export const FOCUSABLE_SELECTORS =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

export function getFocusable(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
  )
}

export function trapTabKey(e: KeyboardEvent, container: HTMLElement) {
  if (e.key !== "Tab") return

  const focusables = getFocusable(container).filter(
    (el) => !el.hasAttribute("disabled")
  )
  if (focusables.length === 0) return

  const first = focusables[0]
  const last = focusables[focusables.length - 1]
  const active = document.activeElement as HTMLElement | null

  if (e.shiftKey) {
    if (active === first || !container.contains(active)) {
      e.preventDefault()
      last.focus()
    }
  } else {
    if (active === last) {
      e.preventDefault()
      first.focus()
    }
  }
}
