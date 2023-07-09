import { useEffect, useState } from "react"
import PROJECTS from "./projects"
import { useParams } from "react-router-dom"
import './style.css'

const DetailProject = (props) => {
    const params = useParams()
    const [currentProject, setCurrentProject] = useState({})

    useEffect(() => {
        setCurrentProject(PROJECTS[params.nameproject])
    }, [])

    return (
        <div>
            <h1 className="title-detail-project">{ currentProject.title }</h1>
        </div>
    )
}

export default DetailProject