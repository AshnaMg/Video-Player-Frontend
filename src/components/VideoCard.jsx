import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addToHistory, deleteVideo } from "../services/allAPI";
import Modal from "react-bootstrap/Modal";

const VideoCard = ({ displayVideo, setDeleteVideoStatus }) => {

  const removeVideo = async (id) => {
    const response = await deleteVideo(id);
    setDeleteVideoStatus(true);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = async() => {
    console.log('handleshow')
    setShow(true);
    const { caption, embeddedLink } = displayVideo;
    const today = new Date();
    const timeStamp = new Intl.DateTimeFormat("en-us", {
      year: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(today);
    console.log(timeStamp);

    let videoDetails = {
      caption: caption,
      embeddedLink: embeddedLink,
      timeStamp: timeStamp
    };

    console.log('videoHistorylog',videoDetails)
    await addToHistory(videoDetails)
  };

  const dragStarted=(e,id)=>{
e.dataTransfer.setData("VideoId",id);
  }

  return (
    <>
      <Card style={{ width: "18rem" }} onClick={handleShow} draggable onDragStart={(e)=>dragStarted(e,displayVideo?.id)}>
        <Card.Img
          className="p-2"
          variant="top"
          height="250px"
          width="10%"
          src={displayVideo.url}
        />
        <Card.Body>
          <div className="d-flex justify-content-evenly align-items-center">
            <h6>{displayVideo.caption}</h6>
            <Button
              variant="danger"
              className="ms-5"
              onClick={() => removeVideo(displayVideo.id)}
            >
              <i className="fa-solid fa-trash"></i>
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="465"
            height="297"
            src={displayVideo.embeddedLink}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default VideoCard;
