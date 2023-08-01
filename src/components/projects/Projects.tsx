import  {useState}  from "react"
import { NewsApi } from "./news/newsApi"
import TicTacToe from "./tictactoe/TicTacToe"
import "./project.css"
const Projects = () => {
    const [project, setProject] = useState(0)
    return (
        <div className="container-box">
            <aside className="aside-list">
                <p style={{ color: '#7b64ff', fontSize: '1.2rem' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus provident rerum maxime eius dolorem.</p>
                <li className={`li-item${project == 0 ? "-selected" : ""}`} onClick={() => setProject(0)} > Api </li>
                <li className={`li-item${project == 1 ? "-selected" : ""}`} onClick={() => setProject(1)} > Noticias</li>
                <li className={`li-item${project == 2 ? "-selected" : ""}`} onClick={() => setProject(2)} > Juego 3 en raja</li>
            </aside>
            <div className="container-projects">
                {project == 0 && (<h2>Api</h2>)}
                {project == 1 && (<NewsApi />)}
                {project == 2 && (<TicTacToe />)}
            </div>
        </div>
    )
}

export default Projects