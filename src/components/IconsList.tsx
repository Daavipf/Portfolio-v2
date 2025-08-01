import GitHub from "../assets/GitHub.svg"
import Instagram from "../assets/Instagram.svg"
import LinkedIn from "../assets/LinkedIn.svg"
import Whatsapp from "../assets/WhatsApp.svg"

export default function IconsList() {
  return (
    <ul className="flex items-center gap-2">
      <li>
        <a target="blank" href="https://github.com/Daavipf">
          <img src={GitHub} alt="" width={48} />
        </a>
      </li>
      <li>
        <a target="blank" href="https://www.instagram.com/davi.pferreira2705?igsh=b3Q4aXMwandvcHVi">
          <img src={Instagram} alt="" width={48} />
        </a>
      </li>
      <li>
        <a target="blank" href="https://www.linkedin.com/in/davi-pereira-3862a9282/">
          <img src={LinkedIn} alt="" width={48} />
        </a>
      </li>
      <li>
        <a target="blank" href="https://wa.link/aags5k">
          <img src={Whatsapp} alt="" width={48} />
        </a>
      </li>
    </ul>
  )
}
