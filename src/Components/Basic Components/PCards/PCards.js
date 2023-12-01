import {Col} from 'react-bootstrap'
import './PCards.css'

const ProjectCards = ({title, desc, imageUrl}) => {
    return (
        <Col sm={6} md={4} className='col'>
            <div className="proj-inbox">
                <img src={imageUrl}></img>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{desc}</span>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCards;
