import { motion, AnimatePresence } from "motion/react"
import profile from "../assets/profile.png"
import IconsList from "../components/IconsList"

export default function Home() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ translateX: "100%" }}
        exit={{ translateX: "100%" }}
        animate={{ translateX: "0%", transition: { duration: 1 } }}
        className="ml-24 flex h-full w-full flex-col items-center justify-center gap-6 p-6 md:ml-[15%] md:flex-row"
      >
        <div className="flex flex-col gap-4">
          <h1 className="font-JetBrains text-5xl font-bold text-white md:text-7xl">Olá, me chamo Davi</h1>
          <p className="font-JetBrains hidden text-white md:inline">
            Sou <span className="text-purple-400">_desenvolvedor web</span>, apaixonado por <br /> transformar ideias em realidade
          </p>
          <p className="font-JetBrains text-white md:hidden">
            Sou <span className="text-purple-400">_desenvolvedor web</span>, apaixonado por transformar ideias em realidade
          </p>
          <div className="flex items-center justify-between">
            <button className="font-JetBrains cursor-pointer self-start rounded-lg bg-white px-5 py-2.5 shadow transition-colors duration-200 hover:bg-zinc-800 hover:text-white">
              Currículo
            </button>
            <IconsList />
          </div>
        </div>
        <div>
          <img src={profile} alt="" className="w-[300px] rounded-full border-4 border-indigo-900 p-2.5 md:w-[450px]" />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
