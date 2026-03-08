import type { ReactNode } from "react"

export type WorkItem = {
  title: string
  desc: string
}

export type ContactLinkProps = {
  href: string
  label: string
  children: ReactNode
  external?: boolean
  download?: boolean
}
