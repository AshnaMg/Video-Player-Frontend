import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllWatchHistory, deleteWatchHistory } from "../services/allAPI";

const WatchHistory = () => {
  const [allWatchedVideo, setAllWatchedVideo] = useState([]);

  const getAllWatchedVideos = async () => {
    const response = await getAllWatchHistory();
    const { data } = response;
    console.log("data", data);
    setAllWatchedVideo(data);
  };

  useEffect(() => {
    getAllWatchedVideos();
  }, []);

  const removeWatchHistory = async (id) => {
    console.log('inside removehistfunc')
    await deleteWatchHistory(id);
    getAllWatchedVideos();
  };

  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between align-item-center">
        <h5>Watch History</h5>
        <Link
          to="/home"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "15px",
            fontWeight: "600",
          }}
        >
          <i className="fa-solid fa-arrow-left me-3"></i> Back To Home
        </Link>
      </div>
      <table className="table container mb-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Url</th>
            <th>TimeStamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allWatchedVideo?.length > 0 ? (
            allWatchedVideo.map((video, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{video.caption}</td>
                <td>{video.embeddedLink}</td>
                <td>{video.timeStamp}</td>
                <td>
                  <button className="btn btn-danger" onClick={()=>removeWatchHistory(video.id)}>delete</button>
                </td>
              </tr>
            ))
          ) : (
            <p>No Item To Display</p>
          )}
        </tbody>
      </table>
    </>
  );
};

export default WatchHistory;
