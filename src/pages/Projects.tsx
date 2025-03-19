import { AnimatePresence, motion } from "motion/react"
import ProjectCard from "../components/ProjectCard"

const data = [
  {
    imageUri: "https://picsum.photos/id/1/450/250",
    title: "2 Centavos",
    description: "Aplicativo mobile para o compartilhamento de posts, interação entre usuários e envio de mensagens",
  },

  {
    imageUri: "https://picsum.photos/id/3/450/250",
    title: "OrderFlow",
    description: "Aplicativo para gestão de pedidos e entregas para vendedores",
  },
  {
    imageUri: "https://picsum.photos/id/4/450/250",
    title: "MeuPedido",
    description: "Aplicativo para controle de pedidos de restaurantes e delivery",
  },
]

export default function Projects() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ translateX: "100%" }}
        exit={{ translateX: "100%" }}
        animate={{ translateX: "0%", transition: { duration: 1 } }}
        className="ml-24 flex h-full w-full flex-col items-center justify-start gap-6 p-6 md:ml-[12%] md:flex-row"
      >
        <div className="flex flex-col gap-10">
          <h1 className="font-JetBrains text-5xl font-bold text-white md:text-3xl">Projetos de software</h1>
          <div className="flex flex-wrap justify-center gap-8">
            {data.map((item) => (
              <ProjectCard imageUri={item.imageUri} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
