import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/imgs/logo.svg";
import github from "../assets/imgs/github.svg";
import linkedin from "../assets/imgs/linkedin.svg";


export const FooterHome = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <br/> <br/>
              <a href="https://github.com/malak-elbanna"><img src={github} alt="Github" /></a>
              <a href="https://www.linkedin.com/in/malak-elbanna/"><img src={linkedin} alt="LinkedIn" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}