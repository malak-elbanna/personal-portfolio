import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import header from '../assets/imgs/header.svg'


export const Banner = () => {
    const [loops, setLoops] = useState(0);
    const [isDelete, setIsDelete] = useState(false);
    const toRotate = ["CS'26 @ Zewail City", "Front-End Developer", "UI/UX Designer", "Creative Writer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const Period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loops % toRotate.length;
        let wholeText = toRotate[i];
        let textUpdate = isDelete ? wholeText.substring(0, text.length - 1) : wholeText.substring(0, text.length + 1);
        setText(textUpdate);

        if (isDelete) {
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDelete && wholeText === textUpdate) {
            setIsDelete(true);
            setDelta(Period)
        }
        else if (isDelete && textUpdate === '') {
            setIsDelete(false);
            setLoops(loops+1);
            setDelta(500);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Nice to see you here!</span>
                        <h1><br/>{`Hi, I'm MALAK ELBANNA `}<span className="wrap"><br/>{text}<br/></span></h1>
                        <p>I am Malak Elbanna, a skilled web developer who is obsessed with all tech-related topics. I spend most of my time coding and developing my software.</p>
                        <button onClick={() => console.log('connect with me')}>Connect now! <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={header} alt="header"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}