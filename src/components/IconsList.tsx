import GitHub from "../assets/GitHub.svg"
import Instagram from "../assets/Instagram.svg"
import LinkedIn from "../assets/LinkedIn.svg"
import Whatsapp from "../assets/WhatsApp.svg"

export default function IconsList() {
  return (
    <ul className="flex items-center gap-2">
      <li>
        <a href="#">
          <img src={GitHub} alt="" width={48} />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={Instagram} alt="" width={48} />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={LinkedIn} alt="" width={48} />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={Whatsapp} alt="" width={48} />
        </a>
      </li>
    </ul>
  )
}
