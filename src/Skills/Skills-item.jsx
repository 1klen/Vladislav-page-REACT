import './Skills-item.scss'

function SkillsItem({ value, items }) {
    return (
        <div className="item-skills">
            <div className="item-skills__value">{value}</div>
            <div className="item-skills__line">
                <div className="item-skills__line-black"></div>
                <div className="item-skills__line-white"></div>
            </div>
            <ul className="item-skills__list">
                {items.map((item, index) => (
                    <li key={index} className="item-skills__item">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SkillsItem