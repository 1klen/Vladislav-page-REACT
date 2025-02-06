import './Portfolio.scss'
import PortfolioColumn from "./Portfolio-column";

function Portfolio() {
    const portfolioImages = [
        '../../content/Portfolio/img1.jpeg',
        '../../content/Portfolio/img2.jpeg',
        '../../content/Portfolio/img3.jpeg',
        '../../content/Portfolio/img4.jpeg',
        '../../content/Portfolio/img5.jpeg',
        '../../content/Portfolio/img6.png',
      ];
    return (
        <div className="portfolio" id="portfolio">
            <div className="container portfolio__container">
                <h2 className="title portfolio__title"><span>Portfolio</span></h2>
                <div className="portfolio__row">
                    {portfolioImages.map((item, index) => (
                        <PortfolioColumn key={index} src={item} alt={`my-image-${index + 1}`} />
                    ))}                        
                </div>
            </div>
        </div>
    )
}

export default Portfolio