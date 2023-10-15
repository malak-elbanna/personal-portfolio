import { useState } from "react";
import { Col, Modal } from "react-bootstrap";

export const PoemCard = ({ title, description, poemImg, poemText }) => {
  const [showModal, setShowModal] = useState(false);
  const [poemTxt, setPoemText] = useState("");

  const handleModalOpen = () => {
    try {
      setPoemText(poemTxt);
      setShowModal(true);
    } catch (error) {
      console.error("Failed to load poem text:", error);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <p>{title}</p>
        <img src={poemImg} alt={title} className="poem-photo" />
        <div className="proj-txtx">
          <a
            style={{ textDecoration: "none", color: "black" }}
            href={`#${title}`}
            onClick={handleModalOpen}
          >
            <h4>{title}</h4>
          </a>
          <span>
            <br />
            {description}
          </span>
        </div>
      </div>
      <Modal
        show={showModal}
        onHide={handleModalClose}
        dialogClassName="poem-modal"
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="poem-modal-body">{poemText}</div>
        </Modal.Body>
      </Modal>
    </Col>
  );
};