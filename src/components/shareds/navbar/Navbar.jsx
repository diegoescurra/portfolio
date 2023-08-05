import React, { useState, useEffect } from 'react';
import { LinkedinIcon, GithubIcon, HamburgerIcon } from '../../Icons';
import estilos from './navbar.module.css';
import { Link } from 'react-scroll';

export const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
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

  /*
    return (
      <header className={`${estilos.header} ${scrolledDown ? estilos.scrolledDown : ''}`}>
        <div className="flex items-center justify-between w-full px-32  ">
  
          <nav className={estilos.navbar}>
            <a href='https://www.linkedin.com/in/diego-escurra-6978651ba/?originalSubdomain=cl' target='_blank' className='w-6 mr-3'>
              <LinkedinIcon />
            </a>
            <a href='https://github.com/Sie7he/' target='_blank' className='w-6 mr-3'>
              <GithubIcon />
            </a>
          </nav>
  
          <nav>
            <ul className='flex'>
              <li className={`${estilos.nav} mr-7 group`}>
               
              </li>
              <li className={`${estilos.nav}  mr-7 group`}>
  
                <Link activeClass={estilos.isActive} to="about" offset={-100} spy={true} smooth={true} duration={500} >
                  Proyectos
                </Link>
              </li>
              <li className={`${estilos.nav}  mr-7 group`}>
  
                
              </li>
            </ul>
  
          </nav>
        </div>
          <div className={estilos.menu} onClick={handleClick}>
            <HamburgerIcon/>
          </div>
      </header>
    );
    */
  return (
    <header className={scrolledDown ? estilos.scrolledDown : estilos.header}>
      <div className="flex items-center justify-between px-4 py-3 smd:p-0">
        <div className={estilos.nav}>
        <a href='https://www.linkedin.com/in/diego-escurra-6978651ba/?originalSubdomain=cl' target='_blank' className='w-6 mr-3'>
              <LinkedinIcon />
            </a>
            <a href='https://github.com/Sie7he/' target='_blank' className='w-6 mr-3'>
              <GithubIcon />
            </a>
        </div>
        <div className="smd:hidden">
          <button onClick={handleIsOpen} type="button" className="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
            hola
          </button>
        </div>
      </div>
      <nav className={`${isOpen ? 'block' : 'hidden'} px-2 pt-2 pb-4 smd:flex smd:p-0`} >
        <Link activeClass={estilos.isActive} className="mt-1 block px-2 py-1  font-semibold rounded hover:bg-gray-800" to="hero" offset={-150} spy={true} smooth={true} duration={500} >
          Inicio
        </Link>
        <Link activeClass={estilos.isActive} to="about" className="mt-1 block px-2 py-1  font-semibold rounded hover:bg-gray-800 smd:dmt-0 smd:ml-2" offset={-100} spy={true} smooth={true} duration={500} >
          Proyectos
        </Link>
        <Link activeClass={estilos.isActive} to="contact" className="mt-1 block px-2 py-1  font-semibold rounded hover:bg-gray-800 smd:dmt-0 smd:ml-2" offset={-100} spy={true} smooth={true} duration={500} >
          Contacto
        </Link>

      </nav>
    </header>
  )
}
