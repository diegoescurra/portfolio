import { useEffect, useRef, useState } from 'react';
import './navbar.css'

export const Navbar = () => {
  const [active, setActive] = useState('inicio');
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('#navbar')
      if (!navbar) return
      const scrollY = window.scrollY;

      if (scrollY > lastScrollTop.current && scrollY > 60) {
        navbar.classList.remove('visible')
      } else if (scrollY < lastScrollTop.current) {
        navbar.classList.add('visible')
      }

      lastScrollTop.current = scrollY <= 0 ? 0 : scrollY;
    }

    const sections = ['inicio', 'experiencia', 'proyectos', 'contacto'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0.1 }
    );

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const nav = [{id: 1, text:'inicio'}, {id: 2, text:'experiencia'}, {id: 3, text: 'proyectos'}, {id: 4, text: 'contacto'}]

  return (
    <header className='flex justify-center relative'>
      <nav id='navbar' className="visible">

        {nav.map( item => (
        <a
        className={`nav-item ${active === item.text ? 'active' : ''}`}
        onClick={() => setActive(item.text)}
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
