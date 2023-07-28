import React from 'react';
import { LinkedinIcon, GithubIcon } from '../Icons';
import { NavLink } from "react-router-dom";
import estilos from './navbar.module.css';


export const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>

      <nav className='flex items-center '>
        <a href='https://www.linkedin.com/in/diego-escurra-6978651ba/?originalSubdomain=cl' target='_blank' className='w-6 mr-3'>
          <LinkedinIcon />
        </a>
        <a href='https://github.com/Sie7he/' target='_blank' className='w-6 mr-3'>
          <GithubIcon />
        </a>
      </nav>
      <nav>

        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive ? `${estilos.nav} ${estilos.activeLink} mr-4 group` : `${estilos.nav} mr-4 group`
          }
        >
          Home

        </NavLink>

        <NavLink
          to="/about"
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


      </nav>
    </header>
  )
}
