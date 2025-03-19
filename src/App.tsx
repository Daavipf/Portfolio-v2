import "./index.css"
import { Route, BrowserRouter as Router, Routes } from "react-router"

import RootLayout from "./layout/RootLayout"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Projects from "./pages/Projects"
import Wordpress from "./pages/Wordpress"
import Experience from "./pages/Experience"
import Contact from "./pages/Contact"

function RoutesLayout() {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="projects" element={<Projects />} />
          <Route path="wordpress" element={<Wordpress />} />
          <Route path="experience" element={<Experience />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

function App() {
  return (
    <>
      <RoutesLayout />
    </>
  )
}

export default App
