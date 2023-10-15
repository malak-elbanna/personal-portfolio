import { Col } from "react-bootstrap";

export const ProjectCard = ({title, description, projectImg, url}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={projectImg} alt={title} className="project-photo"/>
                <div className="proj-txtx">
                    <a style={{ textDecoration: 'none' }} href={url}><h4>{title}</h4></a>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}