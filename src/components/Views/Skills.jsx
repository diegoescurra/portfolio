
import EmblaCarousel from '../shareds/EmblaCarousel';
import { certificates } from '../../data/certificates';


const Skills = () => {
    return (
      <section id='habilidades' className='w-full px-4 py-10 max-w-screen-xl mx-auto'>
        <h3 className="max-w-3xl text-2xl font-semibold text-white md:text-2xl lg:text-4xl mb-4">
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