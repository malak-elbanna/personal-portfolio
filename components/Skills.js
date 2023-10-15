import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";


import python from "../assets/imgs/python.svg";
import cpp from "../assets/imgs/cpp.svg";
import javascript from "../assets/imgs/javascript.svg";
import react from "../assets/imgs/react.svg";
import redux from "../assets/imgs/redux.svg";
import vite from "../assets/imgs/vite.svg";
import CSS from "../assets/imgs/CSS.svg";
import tailwind from "../assets/imgs/tailwind.svg";
import colorsharp from "../assets/imgs/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
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

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Complex problem-solver with an analytical and driven mindset. Dedicated to
                                achieving demanding development objectives according to tight schedules while
                                producing impeccable code. Talented team leader experienced and dedicated to
                                building positive rapport and success. <br/> <br/>Oh, and did I mention I'm an avid ice cream lover? I believe in finding creative solutions, just like exploring new flavors!
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={python} alt="python"/>
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={cpp} alt="cpp"/>
                                    <h5>C++</h5>
                                </div>
                                <div className="item">
                                    <img src={javascript} alt="js"/>
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt="react"/>
                                    <h5>React.js</h5>
                                </div>
                                <div className="item">
                                    <img src={redux} alt="redux"/>
                                    <h5>Redux Toolkit</h5>
                                </div>
                                <div className="item">
                                    <img src={vite} alt="vite"/>
                                    <h5>Vite</h5>
                                </div>
                                <div className="item">
                                    <img src={CSS} alt="css"/>
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={tailwind} alt="tailwind"/>
                                    <h5>Tailwind CSS</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorsharp} alt="bg"/>
        </section>
      )
}