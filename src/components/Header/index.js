import './Header.css';
import { 
    FaGithub, FaLinkedinIn, FaWhatsapp 
} from "react-icons/fa";
import photo from './5.jpg';
import MySkills from '../MySkills';

const Header = () => {
    return (
        <header className="App-header">
            <img src={photo} alt="My profile"/>
            <h2 className='title'>
            Leo Nogueira
            </h2>
            <h5 className='subtitle'>
            <span>Fullstack Developer /&nbsp;</span><MySkills/><br/><hr/>
            </h5>
            <h5 className='main-links'>
                <a href="https://www.linkedin.com/in/leonardo-nogueira-b61294187/" target="blank"><FaLinkedinIn/></a>
                <a href="https://github.com/leo-nog" target="blank"><FaGithub/></a>
                <a href="https://wa.me/5511963060259" target="blank"><FaWhatsapp/></a>
            </h5>
        </header>
    )
}

export default Header;