import { useEffect, useRef, useState } from 'react';
import './navbar.css'

const NAV_ITEMS = [
  { id: 1, label: 'inicio', target: 'inicio' },
  { id: 2, label: 'freelance', target: 'freelance' },
  { id: 3, label: 'experiencia', target: 'experiencia' },
  { id: 4, label: 'contacto', target: 'contacto' }
]

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

    const sections = NAV_ITEMS.map((item) => item.target);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = NAV_ITEMS.find((item) => item.target === entry.target.id);
            if (match) setActive(match.label);
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

  return (
    <header className='flex justify-center relative'>
      <nav id='navbar' className="visible">

        {NAV_ITEMS.map( item => (
        <a
        className={`nav-item ${active === item.label ? 'active' : ''}`}
        onClick={() => setActive(item.label)}
        href={`/#${item.target}`}
        key={item.id}
        >
          {item.label}
        </a>
        ))}
       
      </nav>
    </header>
  );
};
