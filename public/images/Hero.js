import { useEffect, useState } from 'react'
import Section from '../Basic Components/Section/Section'
import './Hero.css'
import headerImg from '../../images/image.png'
import {Container, Row, Col} from 'react-bootstrap'
import {ArrowRightCircle} from 'react-bootstrap-icons'

const Hero = () => {

    const [loopNum, setLoopNum ] = useState(0);
    const [isDel, setIsDel] = useState(false);
    const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        }, delta)
        return () => { clearInterval(ticker ) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let ftext = toRotate[i];
        let upText = isDel ? ftext.substring(0, text.length - 1) : ftext.substring(0, text.length + 1);
        
        setText(upText);

        if(isDel){
            setDelta((prevdelta)=>{
                return prevdelta / 2;
            })
        }
        
        if(!isDel && upText == ftext){
            setIsDel(true);
            setDelta(period);
        }else if(isDel && upText == ''){
            setIsDel(false);
            setLoopNum(loopNum + 1)
            setDelta(300)
        }
        
    }

    return (
        <section style={{backgroundImage: "url(/images/background2.avif )"}}>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Jaideep`}<span className='wrap'>{text}</span></h1>
                        <p>Ladladadoipiadjpadjopajdajdopad dnaipdjp naodnoaidnlnap dpoajdoia d</p>
                        <button onClick={()=>{}}>Let's Connect</button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt={"Header Img"}></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero