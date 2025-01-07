import { ExternalLink } from "lucide-react"

const CardCertificate = ({props}) => {
  return (
    <article className='shadow-sm rounded-sm'>

        <img src={props.img} alt={props.title} className='w-full aspect-video'/>
        <div className="p-4">
        <h3 className="text-gray-800 font-bold">{props.title}</h3>
        <div className="flex justify-between text-gray-500 text-sm border-b-2 border-gray-50 py-2">
            <span>{props.issuer}</span>
            <span>{props.year}</span>
        </div>
        <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Skills Adquiridas</h4>
        <div className="flex gap-2 border-b-2 border-gray-50 mb-4 py-4">
        {props.skills.map((skill, i) => 
            (
                <div key={i} className="bg-gray-50 rounded-md text-xs font-medium px-2 py-1 text-gray-600">
                    {skill} 
                </div>
            )
        )}
        </div>
        <a href={props.url} target="_blank" rel="noreferrer" className="flex items-center justify-center bg-indigo-50 text-indigo-600 w-full rounded-xl px-4 py-2 font-medium group/link">
            Ver Certificado
            <ExternalLink  className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform"/>
        </a>
        </div>

    </article>
  )
}

export default CardCertificate