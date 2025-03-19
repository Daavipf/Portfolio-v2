import { AnimatePresence, motion } from "motion/react"
import ProjectCard from "../components/ProjectCard"
import JReal from "../assets/JReal.png"
import FatoMais from "../assets/FatoMais.png"
import Fit4 from "../assets/Fi4.png"
//import Prize from "../assets/Prize.png"
import Guitar from "../assets/Guitar.png"
import Variety from "../assets/Variety.png"
import Instituto from "../assets/Instituto.png"

const data = [
  {
    imageUri: JReal,
    title: "JReal Imobiliária",
    description: "Site para empresa imobiliária com visualização de imóveis e sistema de geolocalização",
  },

  {
    imageUri: FatoMais,
    title: "FatoMais Comunicação",
    description: "Site institucional para empresa de comunicação digital",
    credits: "Design por",
    linkUrl: "https://guilhermehorstmann.com.br/",
    linkText: "@Guilherme Horstmann",
  },
  {
    imageUri: Fit4,
    title: "Fit4DBest",
    description: "Landing page para curso de inglês preparatório para executivos",
    credits: "Design por",
    linkUrl: "https://guilhermehorstmann.com.br/",
    linkText: "@Guilherme Horstmann",
  },
  {
    imageUri: Variety,
    title: "Variety Prime",
    description: "Site institucional",
  },
  {
    imageUri: Guitar,
    title: "Página de vendas",
    description: "Landing page para venda de curso de guitarra",
  },
  {
    imageUri: Instituto,
    title: "Site Institucional Poder do Partejar",
    description: "Site institucional para instituição de ensino da área da saúde",
  },
]

export default function Wordpress() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ translateX: "100%" }}
        exit={{ translateX: "100%" }}
        animate={{ translateX: "0%", transition: { duration: 1 } }}
        className="ml-24 flex h-full w-full flex-col items-center justify-start gap-6 p-6 md:ml-[12%] md:flex-row"
      >
        <div className="flex flex-col gap-10">
          <h1 className="font-JetBrains text-2xl font-bold text-white md:text-3xl">Projetos com Wordpress + Elementor</h1>
          <div className="flex flex-wrap justify-around gap-8">
            {data.map((item) => (
              <ProjectCard
                imageUri={item.imageUri}
                title={item.title}
                description={item.description}
                credits={item.credits && item.credits}
                linkText={item.linkText && item.linkText}
                linkUrl={item.linkUrl && item.linkUrl}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
