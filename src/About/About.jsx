import './About.scss'

function About() {
    return (
        <div className="about" id="about">
            <div className="container about__container">
                <h2 className="about__title title"><span>About Me</span></h2>
                <div className="about__image">
                    <img src="../../content/About/about-3.png" alt="my-photo" />
                </div>
                <div className="about__text">
                    <p>As a System Analyst, I specialize in dissecting complex systems and crafting efficient solutions. With a background in computer science and a passion for problem-solving, I've honed my skills in system design, requirement analysis, and project management. My goal is to leverage technology to drive efficiency and innovation, empowering businesses to streamline operations and achieve their goals.</p>
                    <p>I thrive on clear communication and collaboration, ensuring that every project exceeds expectations. Let's connect and embark on a journey of innovation together!</p>
                </div>
                <div className="link-container">
                    <a href="" className="link-container__link link link_black">Download Resume</a>
                </div>
            </div>
        </div>
    )
}

export default About