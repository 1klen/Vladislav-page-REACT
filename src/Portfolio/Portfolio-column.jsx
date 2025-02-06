import './Portfolio-column.scss'

function PortfolioColumn({ src, alt }) {
    return (
        <div className="portfolio__column">
            <div className="portfolio__image">
                <img src={src} alt={alt} />
            </div>
        </div>    
    )
}

export default PortfolioColumn