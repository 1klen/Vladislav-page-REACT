import { useEffect, useState } from 'react';
import './Nav.scss'

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const menuItems = [
        { id: 'about', label: 'ABOUT' },
        { id: 'skills', label: 'SKILLS' },
        { id: 'portfolio', label: 'PORTFOLIO' },
        { id: 'stats', label: 'STATS' },
        { id: 'experience', label: 'EXPERIENCE' },
        { id: 'contact', label: 'CONTACT' },
    ];

    function handleBurgerClick() {
        setIsOpen(!isOpen);
    }

    function handleMenuClick(event) {
        event.preventDefault()

        const target = event.target.closest('[data-id]');
        if (!target) {
            return;
        }
        const id = target.dataset.id;

        const targetElement = document.getElementById(id);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
            });
        }
    }

    useEffect(function() {
        function handleScroll() {
            const stickyPoint = document.querySelector('.header').offsetHeight;

            if (window.scrollY >= stickyPoint) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        }

        document.addEventListener('scroll', handleScroll);

        return function() {
            document.removeEventListener('scroll', handleScroll)
        }
    }, []);

    return (
        <nav className={`nav ${isOpen ? 'open' : ''} ${isSticky ? 'fixed' : ''}`}>
            <div onClick={handleBurgerClick} className="burger nav__burger"><span></span></div>
            <div className="container nav__container">
                <ul className="menu" onClick={handleMenuClick}>
                    {menuItems.map(item => (
                        <li key={item.id} className="menu__item" data-id={item.id}>
                            <a href="#" className="menu__link">{item.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Nav



