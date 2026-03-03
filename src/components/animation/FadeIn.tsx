import { motion } from "framer-motion"
import type {ReactNode} from "react";

export default function FadeIn({
                                   children,
                                   delay = 0,
                               }: {
    children: ReactNode
    delay?: number
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay }}
            viewport={{ once: true, amount: 0.25 }}
        >
            {children}
        </motion.div>
    )
}