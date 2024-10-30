import './Projects.css'
import codeScreen from '../../assets/images/Code-for-Love-ss.png';
import discScreen from '../../assets/images/GameInfo_ss.png';
import bagScreen from '../../assets/images/boh-home.png';

const Projects = () => {

    return (
        <>
        <h2>Projects</h2>
        <div class="projects">
            <ul>
                <li class="listitem">
                <img src={codeScreen} width="80%"></img>
                <p class="desc">Here is where the description will go.</p>
                </li>
                <li class="listitem">
                <img src={discScreen} width="80%"></img>
                <p class="desc">Here is where the description will go.</p>
                </li>
                <li class="listitem">
                <img src={bagScreen} width="80%"></img>
                <p class="desc">Here is where the description will go.</p>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Projects;