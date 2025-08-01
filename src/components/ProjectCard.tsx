interface Props {
  imageUri: string
  title: string
  description: string
  credits?: string
  linkUrl?: string
  linkText?: string
  siteUrl?: string
}

export default function ProjectCard({ imageUri, title, description, credits, linkText, linkUrl, siteUrl }: Props) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-white/30 bg-white/10 p-6 backdrop-blur-2xl md:w-[30%]">
      <a href={siteUrl} target="blank"><img src={imageUri} alt="" className="mb-6 rounded-lg border border-white/10" /></a>
      
      <h3 className="font-JetBrains text-lg font-semibold text-white">{title}</h3>
      <p className="font-JetBrains text-center text-white/70">{description}</p>
      {credits && (
        <p className="font-JetBrains text-center text-sm text-white">
          {credits}{" "}
          <a href={linkUrl} className="text-amber-400" target="_blank">
            {linkText}
          </a>
        </p>
      )}
    </div>
  )
}
