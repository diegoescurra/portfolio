import { GithubIcon, LinkedinIcon } from '../Icons'


export const Hero = () => {
  return (
<section className="flex items-center relative h-screen" id="inicio"  style={{backgroundImage: 'url("/bg-dark.jpg")'}}>

    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-solitude">Hola, mi nombre es Diego Escurra</h1>
            <p className="max-w-[35rem] mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl "><strong>Ingeniero Informático </strong>con conocimientos en <strong>Desarrollo Web Full Stack y Análisis de Sistemas</strong>.</p>
            <div className='flex gap-4 w-full h-14 '>
            <a className='h-10 w-10' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/diego-escurra-6978651ba/'>
              <LinkedinIcon />
            </a>
            <a className='h-10 w-10' target='_blank' rel='noreferrer' href='https://github.com/Sie7he'>
              <GithubIcon />
            </a>
            </div>
           
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-sm ">
            <img src="Software-Developer.png" alt="mockup" />
        </div>                
    </div>

</section>
  )
}
