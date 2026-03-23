import { ExternalLink } from "lucide-react"

const CardCertificate = ({props}) => {
  return (
    <article className='border border-[var(--line)] bg-[var(--bg-surface)] shadow-[0_8px_20px_rgba(30,42,42,0.05)] rounded-2xl overflow-hidden'>

        <img src={props.img} alt={props.title} className='w-full aspect-video'/>
        <div className="p-4">
        <h3 className="text-[var(--ink-strong)] font-bold">{props.title}</h3>
        <div className="flex justify-between text-[var(--ink-soft)] text-sm border-b border-[var(--line)] py-2 mb-3">
            <span>{props.issuer}</span>
            <span>{props.year}</span>
        </div>
        <h4 className="text-xs font-medium text-[var(--ink-soft)] uppercase tracking-wider mb-1">Skills adquiridas</h4>
        <div className="flex flex-wrap gap-2 border-b border-[var(--line)] mb-4 py-4">
        {props.skills.map((skill, i) => 
            (
                <div key={i} className="bg-[var(--accent-soft)] rounded-md text-xs font-medium px-2 py-1 text-[var(--accent)]">
                    {skill} 
                </div>
            )
        )}
        </div>
        <a href={props.url} target="_blank" rel="noreferrer" className="flex items-center justify-center bg-[var(--accent-soft)] text-[var(--accent)] w-full rounded-xl px-4 py-2 font-medium group/link">
            Ver Certificado
            <ExternalLink  className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform"/>
        </a>
        </div>

    </article>
  )
}

export default CardCertificate
