import type {ReactNode} from "react";

export default function Section({
                                    id,
                                    title,
                                    subtitle,
                                    children,
    className,
                                }: {
    id: string
    title: string
    subtitle?: string
    children: ReactNode
    className?: string
}) {
    return (
        <section id={id} className={`mx-auto max-w-6xl px-4 py-24 ${className ?? className}`}>
            <header className="mb-10">
                <h2 className="text-2xl font-display font-semibold tracking-tight">{title}</h2>
                {subtitle && <p className="mt-2 text-gray-500">{subtitle}</p>}
            </header>
            {children}
        </section>
    )
}