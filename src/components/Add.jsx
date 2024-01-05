import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { uploadVideo } from "../services/allAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add = ({ setuploadVideoStatus }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [video, setVideo] = useState({
    id: "",
    caption: "",
    url: "",
    embeddedLink: "",
  });

  console.log(video);

  const embeddedVideoLink = (e) => {
    const { value } = e.target;
    const VideoLink = `https://www.youtube.com/embed/${value.slice(-11)}`;
    setVideo({ ...video, embeddedLink: VideoLink });
  };

  const handleUpload = async () => {
    const { id, caption, url, embeddedLink } = video;
    if (!id || !caption || !url || !embeddedLink) {
      toast.warn("Please fill all the fields!");
    } else {
      console.log("json", JSON.stringify(video));
      const response = await uploadVideo(video);
      console.log(response);
      if (response.status == 201) {
        toast.success(`Successfully uploaded the video ${video.caption}`); //toast.success instead of alert
        setuploadVideoStatus(response.data);
        handleClose();
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <>
      <div className="d-flex align-item-center">
        <h5 className="me-3">Upload New Video </h5>
        <button className="btn" onClick={handleShow}>
          <i className="fa-solid fa-cloud-arrow-up fs-5"></i>
        </button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <i className="fa-solid fa-film" style={{ color: "#ff6a00" }}></i>{" "}
            Upload Video
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the form</p>
          <Form className="border border-secondary p-3 rounded">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                onChange={(e) => setVideo({ ...video, id: e.target.value })}
                type="text"
                placeholder="Enter Video ID"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                onChange={(e) =>
                  setVideo({ ...video, caption: e.target.value })
                }
                type="text"
                placeholder="Enter Video Caption"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                onChange={(e) => setVideo({ ...video, url: e.target.value })}
                type="text"
                placeholder="Enter Video Image URL"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                onChange={(e) => embeddedVideoLink(e)}
                type="text"
                placeholder="Enter Video Youtube Link"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            onClick={handleUpload}
            variant="primary"
            className="btn btn-warning upload"
          >
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-center"
        theme="colored"
        autoClose={2000}
      ></ToastContainer>
    </>
  );
};

export default Add;
