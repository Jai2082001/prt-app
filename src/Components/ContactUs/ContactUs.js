import img from '../../images/contact-img.svg'
import { Container, Row, Col } from 'react-bootstrap'
import './ContactUs.css'
const ContactUs = () => {
    return (
        <div className='contactDiv'>
            <Container>
                <Row>
                    <Col className={'col1'} size={12} md={6}>
                        <img src={img}></img>
                    </Col>
                    <Col className={'col2'} size={12} md={6}>
                        <form>
                            <Row>
                                <Col size={12} sm={12} className="px-1">
                                    <label>First Name</label><br></br>
                                    <input type="text" placeholder="First Name" />
                                </Col>
                                <Col size={12} sm={12} className="px-1">
                                    <label>Last Name</label><br></br>

                                    <input type="text" placeholder="Last Name" />
                                </Col>
                                <Col size={12} sm={12} className="px-1">
                                    <label>Email</label>
                                    <br></br>
                                    <input type="email" placeholder="Email Address" />
                                </Col>
                                <Col size={12} sm={12} className="px-1">
                                    <label>Phone Number</label>
                                    <br></br>
                                    <input type="tel" placeholder="Phone No." />
                                </Col>
                                <Col size={12} className="px-1">
                                    <label>What do you wanna say ?</label>
                                    <br></br>
                                    <textarea rows="6" placeholder="Message" ></textarea>
                                    <button type="submit"><span></span></button>
                                </Col>

                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactUs;