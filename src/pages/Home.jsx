import React, { useState } from "react";
import Add from "../components/Add";
import Category from "../components/Category";
import View from "../components/View";
import VideoCard from "../components/VideoCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigateByUrl = useNavigate();

  //create a state for state lifting
  const [uploadVideoStatus, setuploadVideoStatus] = useState({});
  const [addCategoryStatus, setaddCategoryStatus] = useState({});

  return (
    <>
      <div className="container mt-3 mb-5 d-flex justify-content-between align-item-center">
        <div className="add_videos">
          <Add setuploadVideoStatus={setuploadVideoStatus} />
        </div>
        <div>
          <h3
            style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={() => navigateByUrl("/history")}
          >
            Watch History
          </h3>
        </div>
      </div>
      <div className="container mt-3 mb-5 d-flex justify-content-between align-item-center">
        <div className="col-md-6 mt-5">
          <h4>All Videos</h4>
          <View uploadVideoStatus={uploadVideoStatus} />
        </div>
        <div>
          <Category setaddCategoryStatus={setaddCategoryStatus} />
        </div>
      </div>
    </>
  );
};

export default Home;
