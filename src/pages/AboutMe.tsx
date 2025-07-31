import { AnimatePresence, motion } from "motion/react"
import TechList from "../components/TechList"
import MongoDb from "../assets/Mongo Db.svg"
import Express from "../assets/Express Js.svg"
import React from "../assets/React Native.svg"
import Node from "../assets/Node Js.svg"
import Postgres from "../assets/PostgreSQL.svg"
import ReactNative from "../assets/React Native (1).svg"
import AWS from "../assets/Amazon Web Services.svg"
import Git from "../assets/Git.svg"
import Typescript from "../assets/TypeScript.svg"
import Javascript from "../assets/JavaScript.svg"
import HTML from "../assets/Html 5.svg"
import CSS from "../assets/CSS3.svg"

const secondaryStack = [
  {
    img: Postgres,
    subtitle: "PostgreSQL",
  },
  {
    img: ReactNative,
    subtitle: "React Native",
  },
  {
    img: AWS,
    subtitle: "Amazon Web Services",
  },
  {
    img: Git,
    subtitle: "Git",
  },
]

const mainStack = [
  {
    img: MongoDb,
    subtitle: "MongoDB",
  },
  {
    img: Express,
    subtitle: "Express.js",
  },
  {
    img: React,
    subtitle: "React.js",
  },
  {
    img: Node,
    subtitle: "Node.js",
  },
]

const languages = [
  {
    img: Typescript,
    subtitle: "Typescript",
  },
  {
    img: Javascript,
    subtitle: "Javascript",
  },
  {
    img: HTML,
    subtitle: "HTML",
  },
  {
    img: CSS,
    subtitle: "CSS",
  },
]

export default function AboutMe() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ translateX: "100%" }}
        exit={{ translateX: "100%" }}
        animate={{ translateX: "0%", transition: { duration: 1 } }}
        className="ml-24 flex h-screen w-full flex-col items-start justify-center gap-6 overflow-x-hidden p-6 md:ml-[15%]"
      >
        <div className="overflow-y-auto">
          <div className="md:w-1/2">
            <h2 className="font-JetBrains text-5xl font-bold text-white md:text-6xl">Sobre mim</h2>
            <p className="font-JetBrains text-white">
              Sou cristão, pernambucano e apaixonado pela engenharia de software. Trabalho como freelancer desde 2023, sou graduando em ciência da
              computação pela UFCG em Campina Grande - PB. Minha maior força está no desenvolvimento de aplicações focadas na experiência do usuário e
              no design de soluções modernas e funcionais.{" "}
            </p>
          </div>
          <div className="mt-12 flex w-full flex-col items-start justify-start gap-32 md:flex-row">
            <div className="flex flex-col">
              <h2 className="font-JetBrains text-5xl font-bold text-white md:text-6xl">Tech</h2>
              <TechList subtitle="Stack Principal" icons={mainStack} />
              <TechList subtitle="Skills adicionais" icons={secondaryStack} />
            </div>
            <div className="flex flex-col gap-8">
              <h2 className="font-JetBrains text-5xl font-bold text-white md:text-6xl">Linguagens</h2>
              <TechList icons={languages} />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
