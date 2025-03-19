import { AnimatePresence, motion } from "motion/react"
import IconsList from "../components/IconsList"

export default function Contact() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ translateX: "100%" }}
        exit={{ translateX: "100%" }}
        animate={{ translateX: "0%", transition: { duration: 1 } }}
        className="ml-24 flex h-full w-full flex-col items-center justify-center gap-6 p-6 md:ml-[15%] md:flex-row"
      >
        <div className="flex flex-col gap-10">
          <h1 className="font-JetBrains text-5xl font-bold text-white md:text-7xl">Conecte-se comigo</h1>
          <p className="font-JetBrains text-white">Vamos trabalhar juntos para tirar sua ideia do papel e lançá-la para o mundo!</p>
          <div className="flex items-center justify-center">
            <IconsList />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
