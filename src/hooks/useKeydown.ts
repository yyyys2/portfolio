import { useEffect } from "react"

export default function useKeydown(
  enabled: boolean,
  handler: (e: KeyboardEvent) => void
) {
  useEffect(() => {
    if (!enabled) return
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [enabled, handler])
}
