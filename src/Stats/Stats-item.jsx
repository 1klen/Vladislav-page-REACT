import './Stats-item.scss'

function StatsItem({ value, description }) {
    return (
         <div className="item-stats">
            <div className="item-stats__title">{value}</div>
            <div className="item-stats__subtitle">{description}</div>
         </div> 
    )
}

export default StatsItem