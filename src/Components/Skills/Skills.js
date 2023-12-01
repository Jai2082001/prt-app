import { Doughnut } from 'react-chartjs-2';
import Slider from 'react-slick'
import Carousel from 'react-multi-carousel';
import { Container, Row, Col } from 'react-bootstrap'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import sideImg from '../../images/color-sharp.png'
import './Skills.css'

Chart.register(ArcElement, Tooltip, Legend)
const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    const data = {
        labels: [
            '',
            '',
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50],
            backgroundColor: [
                '#3C253E',
                '#151515',
            ],
            hoverOffset: 4
        }]
    }



    return (
        <section className="skill">
            <Container className="skill2">
                <Row>
                    <Col lg={12}>
                        <div className="skill-box">
                            <h2>
                                Skills
                            </h2>
                            <p></p>
                            <Slider {...settings}>
                                <div className="item">
                                    <Doughnut data={data} ></Doughnut>
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <Doughnut data={data} ></Doughnut>
                                    <h5>NodeJs</h5>
                                </div>
                                <div className='item'>
                                    <Doughnut data={data} ></Doughnut>
                                    <h5>MongoDB</h5>
                                </div>
                                <div className="item">
                                    <Doughnut data={data} ></Doughnut>
                                    <h5>Express</h5>
                                </div>
                                <div className="item ">
                                    <Doughnut data={data} ></Doughnut>
                                    <h5>React Native</h5>
                                </div>
                                <div className="item ">
                                    <Doughnut data={data} ></Doughnut>
                                    <h5>ASP.NET</h5>
                                </div>

                                <div className="item ">
                                    <Doughnut data={data} ></Doughnut>
                                    <h5>SQL</h5>
                                </div>
                            </Slider>

                          
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={sideImg} style={{position: 'absolute', top: '0', left: '0', zIndex: 0}}/>
        </section>
    )

}
export default Skills;