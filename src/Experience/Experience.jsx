import './Experience.scss'
import TimelineItem from "./Timeline-item";

function Experience() {
    const experienceData = [
        {
            period: { start: '2010', end: '2020' },
            place: 'Janka Kupala Gymnasium',
            subtitle: 'Secondary School',
            details: ['GPA 10.0', 'More than 50 awards for public, scientific, and sports activities'],
            isRight: true,
        },
        {
            period: { start: '2020', end: '2024' },
            place: 'Academy of Public Administration under the President of the Republic of Belarus',
            subtitle: 'Bachelor of Arts',
            details: [
                'Manager-Economist of Information Systems',
                'GPA 9.9',
                'More than 50 published scientific papers',
                'More than 20 awards for public, scientific, and sports activities',
                '2x Laureate of the President\'s Special Fund',
            ],
            isRight: false,
        },
        {
            period: { start: 'MAR 2024', end: 'PRESENT' },
            place: 'Digital Development Center',
            subtitle: 'Specialist',
            details: null, // Если нет деталей, можно использовать null или оставить пустой массив
            isRight: true,
          },
    ];
    return (
        <div className="experience" id="experience">
                <div className="experience__container container">
                    <h2 className="experience__title title"><span>Experience</span></h2>
                    <div className="timeline experience__timeline">
                       {experienceData.map((experience, index) => (
                        <div key={index} className="timeline__column" id={`column${index + 1}`} >
                            <TimelineItem 
                                period={experience.period} 
                                place={experience.place}
                                subtitle={experience.subtitle}
                                details={experience.details}
                                isRight={experience.isRight}
                            />
                        </div>
                       ))}
                   </div>
                </div>
            </div>
    )
}

export default Experience