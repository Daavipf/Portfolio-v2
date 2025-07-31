import { Outlet } from "react-router" // Corrigido o import
//import Background from "../assets/bg.png"
import Background from "../assets//webp/bg_1.webp"
import Sidebar from "../components/Sidebar"

export default function RootLayout() {
  return (
    <main className="flex w-screen overflow-x-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(" + Background + ")" }}>
      <Sidebar />
      <Outlet />
    </main>
  )
}
