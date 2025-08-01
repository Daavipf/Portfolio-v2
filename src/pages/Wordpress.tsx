import { AnimatePresence, motion } from "motion/react"
import ProjectCard from "../components/ProjectCard"
//import JReal from "../assets/JReal.png"
import JReal from "../assets/webp/jreal_1.webp"
//import FatoMais from "../assets/FatoMais.png"
import TBI from "../assets/webp/tbiconsult.webp"
//import Fit4 from "../assets/Fi4.png"
import Fit4 from "../assets/webp/fi4_1_11zon.webp"
//import Prize from "../assets/Prize.png"
//import Guitar from "../assets/Guitar.png"
import Vendas from "../assets/webp/vendas.webp"
//import Variety from "../assets/Variety.png"
import Armani from "../assets/webp/armani.webp"
//import Instituto from "../assets/Instituto.png"
import Instituto from "../assets/webp/instituto_1_11zon.webp"

const data = [
  {
    imageUri: Vendas,
    title: "Página de vendas",
    description: "Landing page para masterclass de consultoria de vendas",
    credits: "Design por",
    linkUrl: "https://guilhermehorstmann.com.br/",
    linkText: "@Guilherme Horstmann",
    siteUrl: "https://mentortabarelli.com.br/mentoria-faixa-preta/"
  },
  
  {
    imageUri: TBI,
    title: "TBI Consult",
    description: "Site para agência especializada em cursos de idiomas para executivos",
    credits: "Design por",
    linkUrl: "https://guilhermehorstmann.com.br/",
    linkText: "@Guilherme Horstmann",
    siteUrl: "https://tbiconsult.com.br/"
  },
  {
    imageUri: Fit4,
    title: "Fit4DBest",
    description: "Landing page para curso de inglês preparatório para executivos",
    credits: "Design por",
    linkUrl: "https://guilhermehorstmann.com.br/",
    linkText: "@Guilherme Horstmann",
    siteUrl: "https://fit4dbest.com.br/"
  },
  {
    imageUri: Armani,
    title: "Landing Page Armani",
    description: "Página de vendas empreendimento imobiliário de alto padrão.",
    credits: "Design por",
    linkUrl: "https://guilhermehorstmann.com.br/",
    linkText: "@Guilherme Horstmann",
  },
  {
    imageUri: JReal,
    title: "JReal Imobiliária",
    description: "Site para empresa imobiliária com visualização de imóveis e sistema de geolocalização",
    siteUrl: "https://jreal.com.br/"
  },
  {
    imageUri: Instituto,
    title: "Site Institucional Poder do Partejar",
    description: "Site institucional para instituição de ensino da área da saúde",
    siteUrl:"https://institutopoderdopartejar.com.br/"
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
                siteUrl={item.siteUrl && item.siteUrl}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
