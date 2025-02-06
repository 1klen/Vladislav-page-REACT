import './Timeline-item.scss'

function TimelineItem({ period, place, subtitle, details, isRight  }) {
    return (
        <div className="item-timeline">
            <div className="item-timeline__sphere">
                <p>{period.start}</p>
                <p>-</p>
                <p>{period.end}</p>
                <div className={`item-timeline__info ${isRight ? 'item-timeline__info_right' : ''}`}>
                    <div className="item-timeline__title">{place}</div>
                    <div className="item-timeline__subtitle">{subtitle}</div>
                    {details && (
                        <div className="item-timeline__text">
                            {details.map((detail, index) => (
                                <p key={index}>{detail}</p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>    
    )
}

export default TimelineItem