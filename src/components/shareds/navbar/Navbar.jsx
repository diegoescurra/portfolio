import { useEffect} from 'react';
import './navbar.css'


export const Navbar = () => {
  let lastScrollTop = 0;

  
  
  const handleScroll = () => {
    const navbar = document.querySelector('#navbar')
    const scrollY = window.scrollY;
    if(scrollY > lastScrollTop) {
      navbar.classList.remove('visible')
    } else if (scrollY < lastScrollTop){
      navbar.classList.add('visible')

    }
    lastScrollTop = scrollY <= 0 ? 0 : scrollY;  
  
  }
  useEffect(() => {
    document.addEventListener("scroll", handleScroll, {passive: true});

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  return (
    <header>
      <nav id="navbar" className='visible'>
     
      <a data-scroll="home" href="#home" >
       
        Inicio
      </a>
      <a data-scroll="portfolio" href="#portfolio">
       
        Portafolio
      </a>
     
      <a data-scroll="contact" href="#contact">
        
        Contacto
      </a>
    </nav>
    </header>
  );
};
