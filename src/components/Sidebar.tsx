import House from "../assets/Home.svg"
import User from "../assets/User.svg"
//import Programming from "../assets/Programming.svg"
//import Business from "../assets/Business.svg"
import RingingPhone from "../assets/Ringing Phone.svg"
import Wordpress from "../assets/WordPress.svg"

import SidebarButton from "./SidebarButton"

export default function Sidebar() {
  return (
    <aside className="fixed h-full w-1/5 border-r-2 border-white/20 bg-white/10 backdrop-blur-md md:w-[10%]">
      <ul className="flex h-full w-full flex-col items-center justify-center gap-16">
        <li>
          <SidebarButton page="/" icon={House} />
        </li>
        <li>
          <SidebarButton page="/about" icon={User} />
        </li>
        {/* <li>
          <SidebarButton page="/projects" icon={Programming} />
        </li> */}
        <li>
          <SidebarButton page="/wordpress" icon={Wordpress} />
        </li>
        {/* <li>
          <SidebarButton page="/experience" icon={Business} />
        </li> */}
        <li>
          <SidebarButton page="/contact" icon={RingingPhone} />
        </li>
      </ul>
    </aside>
  )
}
