import React, { useState, useEffect } from 'react';
import { LinkedinIcon, GithubIcon, HamburgerIcon } from '../Icons';
import estilos from './navbar.module.css';

export const Navbar = () => {

  const [active, setActive] = useState('hero');
  const [scrolledDown, setScrolledDown] = useState(false);

  const isActive = (section) => {
    return active === section ? estilos.isActive : '';
  }

  const handleClick = (section) => {
    
    const element = document.getElementById(section);
    element ? element.scrollIntoView({ behavior: 'smooth' }) : null;

  };



  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    console.log(scrollPosition)

  if (scrollPosition > 2) {
    setScrolledDown(true);
  } else {
    setScrolledDown(false);
  }

  if (scrollPosition > 700) {
    setActive('about')
  }
  if (scrollPosition < 140) {
    setActive('hero')
  }
  if (scrollPosition >=900) {
    setActive('contact')
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

      <nav className='flex items-center '>
        <a href='https://www.linkedin.com/in/diego-escurra-6978651ba/?originalSubdomain=cl' target='_blank' className='w-6 mr-3'>
          <LinkedinIcon />
        </a>
        <a href='https://github.com/Sie7he/' target='_blank' className='w-6 mr-3'>
          <GithubIcon />
        </a>

      <input
        type="checkbox"
        id="menuBtn"
        className={estilos.menuBtn}
        />

      <label
        htmlFor="menuBtn"
        className={estilos.barIcon}
        >
        Hola
      </label>

      </nav>
      <nav>
        <ul className='flex'>
          <li className={`${estilos.nav} ${isActive('hero')} mr-7 group`}>
            <button
              onClick={() => handleClick('hero')}
            >
              Home
            </button>

          </li>
          <li className={`${estilos.nav}  mr-7 group`}>

            <button
              className={isActive('about')}
              onClick={() => handleClick('about')}

            >
              About
            </button>
          </li>
          <li className={`${estilos.nav}  mr-7 group`}>
            <button
              className={isActive('contact')}
              onClick={() => handleClick('contact')}
            >
              Contact
            </button>
          </li>


        </ul>

        {/* 
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive ? `${estilos.nav} ${estilos.activeLink} mr-4 group` : `${estilos.nav} mr-4 group`
          }
        >
          Home

        </NavLink>
        
      
        <NavLink
          to="/projects"
          className={({ isActive, isPending }) =>
            isActive ? `${estilos.nav} ${estilos.activeLink} mx-4 group` : `${estilos.nav} mx-4 group`
          }
        >
          About

        </NavLink>

        <NavLink
          to='/contact'
          className={({ isActive, isPending }) =>
            isActive ? `${estilos.nav} ${estilos.activeLink} mx-4 group` : `${estilos.nav} mx-4 group`
          }
        >
          Contact

        </NavLink>
*/}
      </nav>
    </header>
  )
}
