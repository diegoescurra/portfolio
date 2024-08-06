
import EmblaCarousel from '../shareds/EmblaCarousel';
import { certificates } from '../../data/certificates';


const Skills = () => {
    return (
      <section id='habilidades' className='lg:p-10 p-4 bg-hero'>
        <h2 className="text-white pb-4 lg:text-5xl text-center text-3xl tracking-widest uppercase">
          Certificados
        </h2>
       
    
          
          <div className="relative flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
              <EmblaCarousel slides={certificates} />
            </div>
          </div>
      </section>
    )
  }

export default Skills