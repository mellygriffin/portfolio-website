import './Projects.css'
import codeScreen from '../../assets/images/Code-for-Love-ss.png';
import discScreen from '../../assets/images/GameInfo_ss.png';
import bagScreen from '../../assets/images/boh-home.png';

const Projects = () => {

    return (
        <>
        <h2>Projects</h2>
        <div className="projects">
            <ul>
                <li className="listitem">
                <img src={codeScreen} width="80%"></img>
                <p className="desc">Code for Love takes you on the journey to whoo your blind date who just happens to be a computer! Choose from conversation categories and do your best to impress your date by selecting your answers.
                </p>
                </li>
                <li className="listitem">
                <img src={discScreen} width="80%"></img>
                <p className="desc">Here is where the description will go.</p>
                </li>
                <li className="listitem">
                <img src={bagScreen} width="80%"></img>
                <p className="desc">Here is where the description will go.</p>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Projects;