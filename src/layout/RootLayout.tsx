import { Outlet } from "react-router" // Corrigido o import
import Background from "../assets/bg.png"
import Sidebar from "../components/Sidebar"

export default function RootLayout() {
  return (
    <main className="flex h-screen w-screen overflow-x-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(" + Background + ")" }}>
      <Sidebar />
      <Outlet />
    </main>
  )
}
