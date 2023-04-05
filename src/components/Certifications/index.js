import Certification from './Certification';
import './Certifications.css';

const Works = () => {
    return (
        <div className="educations-section">
            <h2 className="section-title">
                Certifications History
            </h2>

            <Certification when="2022" where="PHP - Alura" to="https://cursos.alura.com.br/degree/certificate/cfba60ff-1c1f-4419-b43d-87f08a32503a">
                <span>&gt;</span> The Complete Formation to PHP.<br/>
                <span>&gt;</span> One of the best online courses to tech skills.
            </Certification>

            <Certification when="2021" where="Space Apps - NASA" to="https://drive.google.com/file/d/1vhyl7D5PmlVVgtsHZuJawbBLDoamlLe0/view?usp=sharing">
                <span>&gt;</span> Finalist at the NASA Space Apps 2021.<br/>
                <span>&gt;</span> One of the best online courses to tech skills.
            </Certification>
        </div>
    )
}

export default Works;