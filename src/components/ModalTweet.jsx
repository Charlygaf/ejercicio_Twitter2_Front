import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function ModalTweet() {
  const user = useSelector((state) => state.user.user);
  const [content, setContent] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const data = await axios({
      method: "POST",
      url: "http://localhost:8000/tweets",
      data: {
        user: user,
        content: content,
      },
    });
    setContent("");
    setShow(false);
    return data;
  };

  return (
    <>
      <Button
        className="w-100 mt-4 rounded-pill fs-5"
        variant="primary"
        onClick={handleShow}
      >
        <span className="sidebar-btn-text">Twittear</span>
        <span className="sidebar-btn-icon">
          <i className="fas fa-feather-alt"></i>
        </span>
      </Button>

      <Modal
        className="rounded-3 border-0 modal-bg"
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header
          className="p-2 border-0 bg-black"
          closeButton
        ></Modal.Header>
        <Modal.Body className="p-2 border-0 bg-black">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-10">
              <form onSubmit={handleSubmit}>
                <textarea
                  name="content"
                  id="content"
                  className="input-content-tweet"
                  placeholder="¿Qué está pasando?"
                  value={content}
                  onChange={(ev) => {
                    setContent(ev.target.value);
                  }}
                ></textarea>
              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="p-2 border-0 bg-black">
          <Button variant="primary" onClick={handleSubmit}>
            Twittear
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalTweet;
