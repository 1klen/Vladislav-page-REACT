import './Stats.scss'
import StatsItem from "./Stats-item";

function Stats() {
    const statsData = [
        { value: '70', description: 'Awards' },
        { value: '50', description: 'Scientific Papers' },
        { value: '2', description: 'Presidential Grants' },
        { value: '1', description: 'Implementation Certificate' }
      ];

    return (
        <div className="stats" id="stats">
                <div className="container stats__container">
                    <h2 className="stats__title title title_white"><span>Personal Stats</span></h2>
                    <div className="stats__row">
                        {statsData.map((item, index) => (
                             <div className="stats__column" key={index}>
                                <StatsItem value={item.value} description={item.description} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    ) 
}

export default Stats