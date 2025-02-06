import './Header.scss'

function Header() {
    return (
        <header className="header page__header">
            <div className="container header__container">
                <div className="header__info">
                    <h1 className="header__title">Hello, World!</h1>
                    <p className="header__subtitle">My Name is Vladislav Drapeza</p>
                    <p className="header__subtitle">I'm a System Analyst & Junior Scientist</p>
                    <a href="" className="link header__link">Learn More</a>
                </div>
            </div>
            <div className="header__overlay-block"></div>
        </header>
    )
}


export default Header