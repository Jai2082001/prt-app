import { Container, Tab, Row, Nav, Col } from 'react-bootstrap'
import './Project.css'
import ProjectCard from '../Basic Components/PCards/PCards'
import img1 from '../../images/project-img1.png'
import img2 from '../../images/project-img2.png'
import img3 from '../../images/project-img3.png'



const Project = () => {
    const projects = [
        { title: 'adad', desc: 'ads', imageUrl:img1  },
        { title: 'adad', desc: 'ads', imageUrl:  img2},
        { title: 'adad', desc: 'ads', imageUrl:  img3},
        { title: 'adad', desc: 'ads', imageUrl:  img1},
        { title: 'adad', desc: 'ads', imageUrl:  img2},
        {title: 'asda', desc: 'adad', imageUrl: img3}
    ]
    return (

        <section className="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                        <Tab.Container id='project-tabs'>
                            <Nav className="navTab" variant="pills" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-3">Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id="slideInUp">
                                <Tab.Pane eventKey="link-1">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="section">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Project;