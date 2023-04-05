import Education from './Education';
import './Educations.css';

const Works = () => {
    return (
        <div className="educations-section">
            <h2 className="section-title">
                Academic Record
            </h2>

            <Education when="2023 - 2026" where="Computer Science - University of Braz Cubas">
                <span>&gt;</span> Bachelor's degree in progress.<br/>
                <span>&gt;</span> The most recognized university in Alto Tiete.
            </Education>

            <Education when="2019 - 2021" where="System Development - ETEC of Itaqua">
                <span>&gt;</span> I studied from analysis to practical development.<br/>
                <span>&gt;</span> I was selected to present some projects on Expos and Technologies Events more than one time.
            </Education>

            <Education when="2012 - Present" where="Independent Studies">
                <span>&gt;</span> I started to study independently in childhood.<br/>
                <span>&gt;</span> As a self-taught person, I learned with excellence to master new technologies in the shortest possible time.
            </Education>
        </div>
    )
}

export default Works;