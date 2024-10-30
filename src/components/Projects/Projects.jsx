import './Projects.css'
import codeScreen from '../../../public/images/Code-for-Love-ss.png';
import discScreen from '../../../public/images/GameInfo_ss.png';
import bagScreen from '../../../public/images/boh-home.png';

const Projects = () => {

    return (
        <>
        <h2>Projects</h2>
        <div class="projects">
            <ul>
                <li>
                <img src={codeScreen} width="80%"></img>
                <p class="desc">Here is where the description will go.</p>
                </li>
                <li>
                <img src={discScreen} width="80%"></img>
                <p class="desc">Here is where the description will go.</p>
                </li>
                <li>
                <img src={bagScreen} width="80%"></img>
                <p class="desc">Here is where the description will go.</p>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Projects;