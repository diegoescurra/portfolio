import { useEffect, useState } from 'react';
import './navbar.css'


export const Navbar = () => {
  let lastScrollTop = 0;

  const [active, setActive] = useState('inicio');

  const handleNavClick = (navItem) => {
    setActive(navItem);
  };

  const handleScroll = () => {
    const navbar = document.querySelector('#navbar')
    const scrollY = window.scrollY;
    if (scrollY > lastScrollTop) {
      navbar.classList.remove('visible')
    } else if (scrollY < lastScrollTop) {
      navbar.classList.add('visible')

    }
    lastScrollTop = scrollY <= 0 ? 0 : scrollY;

  }
  useEffect(() => {
    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const nav = [{id: 1, text:'inicio'}, {id: 2, text:'portafolio'}, {id: 3, text: 'habilidades'}, {id: 4, text: 'contacto'}]

  return (
    <header className='flex justify-center relative' >
      <nav id='navbar' className="visible">

        {nav.map( item => (
        <a
        className={`nav-item ${active === item.text ? 'active' : ''}`}
        onClick={() => handleNavClick(item.text)}
        href={`/#${item.text}`}
        key={item.id}
        >
          {item.text}
        </a>
        ))}
       
      </nav>
    </header>
  );
};
