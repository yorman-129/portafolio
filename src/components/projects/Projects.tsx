import  {useState}  from "react"
import { NewsApi } from "./news/NewsApi"
import TicTacToe from "./tictactoe/TicTacToe"
import "./project.css"
const Projects = () => {
    const [project, setProject] = useState(0)
    return (
        <div className="container-box" id="projects">
            <aside className="aside-list">
                <p style={{ color: '#7b64ff', fontSize: '1.2rem' }}>Explora mis proyectos: un emocionante juego de 3 en raya🎮, noticias frescas🗞️ y documentación esencial de una de API's desarrolladas🧙‍♂️</p>
                <li className={`li-item${project == 1 ? "-selected" : ""}`} onClick={() => setProject(1)} > Noticias</li>
                <li className={`li-item${project == 2 ? "-selected" : ""}`} onClick={() => setProject(2)} > Juego 3 en raya</li>
            </aside>
            <div className="container-projects">

                {project == 1 && (<NewsApi />)}
                {project == 2 && (<TicTacToe />)}
            </div>
        </div>
    )
}

export default Projects