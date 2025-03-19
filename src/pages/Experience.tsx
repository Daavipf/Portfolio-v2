import { motion } from "motion/react"

export default function Experience() {
  return (
    <motion.div
      initial={{ translateX: "100%" }}
      exit={{ translateX: "100%" }}
      animate={{ translateX: "0%", transition: { duration: 1 } }}
      className="w-full h-full"
    >
      <h1 className="text-white">Ola, pagina experiencia</h1>
    </motion.div>
  )
}
