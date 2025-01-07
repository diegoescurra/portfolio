
import EmblaCarousel from '../shareds/EmblaCarousel';
import { certificates } from '../../data/certificates';


const Skills = () => {
    return (
      <section id='habilidades' className='w-full px-4 py-10 max-w-screen-xl mx-auto'>
        <h3 className="text-center text-2xl font-semibold text-black md:text-2xl lg:text-4xl mb-4">
          Certificados
        </h3>
          <div className="relative ">
            <div className="flex justify-center items-center">
              <EmblaCarousel slides={certificates} />
            </div>
          </div>
      </section>
    )
  }

export default Skills