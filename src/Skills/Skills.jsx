import './Skills.scss'
import SkillsItem from "./Skills-item";

function Skills() {
    const skillsData = [
        { value: 'B2', items: ['Italian', 'German', 'English'] },
        { value: '90%', items: ['Project', 'Documentation', 'Writing'] },
        { value: '85%', items: ['Information', 'System', 'Design'] },
        { value: '80%', items: ['Research', 'Object', 'Analysis'] }
    ];

    return (
        <div className="skills" id="skills">
                <div className="container skills__container">
                    <h2 className="skills__title title title_white"><span>Skills</span></h2>
                    <div className="skills__row">
                        {skillsData.map((skill, index) => (
                            <div key={index} className="skills__column">
                                <SkillsItem value={skill.value} items={skill.items} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    )
}

export default Skills