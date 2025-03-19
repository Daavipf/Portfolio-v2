interface Props {
  subtitle?: string
  icons: any[]
}

export default function TechList({ subtitle, icons }: Props) {
  return (
    <div className="mt-8">
      {subtitle && <h3 className="font-JetBrains mb-4 text-white">{subtitle}</h3>}
      <ul className="flex flex-wrap justify-between gap-8">
        {icons.map((icon) => (
          <li className="flex flex-col items-center">
            <img src={icon.img} alt="" />
            <p className="font-JetBrains text-white">{icon.subtitle}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
