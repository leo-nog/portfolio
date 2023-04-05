import Work from './Work';
import './Works.css';

const Works = () => {
    return (
        <div className="works-section">
            <h2 className="section-title">
                Work Experience
            </h2>

            <Work when="2022/02 - Present" where="Sportheca - Dev Backend, Mid">
                <span>&gt;</span> I was in contact with the development of the back-end of several apps for football teams such as Corinthians, SPFC, etc.<br/>
                <span>&gt;</span> I was in charge of the development of consumable tools by API for BI apps and reports.<br/>
                <span>&gt;</span> Also had contact with MVC concepts and PHP frameworks like Laravel. In addition to database optimization for resource savings.
            </Work>

            <Work when="2021/10 - 2022/02" where="F5 Web-Design - Dev Fullstack, Mid">
                <span>&gt;</span> I led the development of custom Drupal modules for NESTLÉ's Nutren website.<br/>
                <span>&gt;</span> I worked with API consumption in the project with PHP.<br/>
            </Work>
        </div>
    )
}

export default Works;