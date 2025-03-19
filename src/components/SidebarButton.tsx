import { Link } from "react-router"

interface Props {
  page: string
  icon: string
}

export default function SidebarButton({ page, icon }: Props) {
  return (
    <Link to={page} className="relative flex items-center justify-center">
      <div className="absolute w-8 h-8 rounded-full bg-transparent hover:bg-gray-300/50 hover:blur-sm transition duration-300 ease-in-out"></div>
      <img src={icon} alt="" width={42} className="" />
    </Link>
  )
}
