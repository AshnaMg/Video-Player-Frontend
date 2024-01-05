import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import VideoCard from "./VideoCard";
import { getAllVideos } from "../services/allAPI";

const View = ({ uploadVideoStatus }) => {
  const [allVideo, setAllVideo] = useState([]);

  const [deleteVideoStatus, setDeleteVideoStatus] = useState(false);

  const getAllUploadedVideos = async () => {
    const response = await getAllVideos();
    const { data } = response;
    setAllVideo(data);
  };

  useEffect(() => {
    getAllUploadedVideos();
    console.log(allVideo);
  }, []);

  useEffect(() => {
    getAllUploadedVideos();
    console.log(allVideo);
    setDeleteVideoStatus(false);
  }, [uploadVideoStatus,deleteVideoStatus]);

  return (
    <>
      <Row>
        {allVideo?.length > 0 ? (
          allVideo.map((video) => (
            <Col sm={12} md={6} lg={4} xl={4} className="m-5">
              <VideoCard
                displayVideo={video}
                setDeleteVideoStatus={setDeleteVideoStatus}
              />
            </Col>
          ))
        ) : (
          <p>No Item To Display</p>
        )}
      </Row>
    </>
  );
};

export default View;
