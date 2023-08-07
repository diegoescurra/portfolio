import React, { useState, useEffect } from 'react';
import { LinkedinIcon, GithubIcon, HamburgerIcon } from '../../Icons';
import estilos from './navbar.module.css';
import { Link } from 'react-scroll';

export const Navbar = () => {

  const [scrolledDown, setScrolledDown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen(!isOpen);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 2) {
      setScrolledDown(true);
    } else {
      setScrolledDown(false);
    }

  }
  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <header className={`${estilos.header} ${scrolledDown ? estilos.scrolledDown : ''}`}>
      <div className="flex items-center justify-between px-4 py-3 smd:p-0">
        <div className='flex'>
        <a href='https://www.linkedin.com/in/diego-escurra-6978651ba/?originalSubdomain=cl' target='_blank' className='w-6 mr-3'>
              <LinkedinIcon />
            </a>
            <a href='https://github.com/Sie7he/' target='_blank' className='w-6 mr-3'>
              <GithubIcon />
            </a>
        </div>
        <div className="smd:hidden">
          <button onClick={handleIsOpen} type="button" className="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isOpen ?  <path  fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
          :  <path  fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          }
           
            
          </svg>
          </button>
        </div>
      </div>
      <nav className={`${isOpen ? 'block' : 'hidden'} px-2 pt-2 pb-4 smd:flex smd:p-0`} >
        <Link activeClass={estilos.isActive} className="mt-1 block px-2 pt-1 cursor-pointer smd:hover:text-shadowc font-semibold " to="hero" offset={-150} spy={true} smooth={true} duration={500} >
          Inicio
        </Link>
        <Link activeClass={estilos.isActive} to="about" className="mt-1 block px-2 pt-1 cursor-pointer smd:hover:text-shadowc font-semibold  smd:dmt-0 smd:ml-2" offset={-150} spy={true} smooth={true} duration={500} >
          Proyectos
        </Link>
        <Link activeClass={estilos.isActive} to="contact" className="mt-1 block px-2 pt-1 cursor-pointer smd:hover:text-shadowc font-semibold  smd:dmt-0 smd:ml-2" offset={-150} spy={true} smooth={true} duration={500} >
          Contacto
        </Link>

      </nav>
    </header>
  )
}
