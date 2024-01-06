import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {
  addCategory,
  getAllCategory,
  deleteCategory,
  getVideoById,
  updateCategory,
} from "../services/allAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Category = ({ setaddCategoryStatus }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [categoryName, setCategoryName] = useState();
  const [allCategory, setAllCategory] = useState();

  const [deleteCatStatus, setDeleteCatStatus] = useState(false);

  const handleAddCategory = async () => {
    if (categoryName) {
      let body = {
        categoryName: categoryName,
        allVideos: [],
      };
      const response = await addCategory(body);
      if (response.status == 201) {
        // setaddCategoryStatus(response.data);
        toast.success("Category added!");
        setCategoryName("");
        handleClose();
      } else {
        toast.error("Something went wrong");
      }
    } else {
      toast.warn("Please fill the form");
    }
  };

  const getAllCat = async () => {
    const response = await getAllCategory();
    const { data } = response;
    setAllCategory(data);
  };

  useEffect(() => {
    getAllCat();
  }, []);

  const handleDeleteCategory = async (id) => {
    const response = await deleteCategory(id);
    setDeleteCatStatus(true);
  };

  useEffect(() => {
    getAllCat();
    setDeleteCatStatus(false);
  }, [categoryName, deleteCatStatus]);

  const dragOver = (e) => {
    e.preventDefault();
  };

  const videoDrop = async (e, categoryId) => {
    const videoId = e.dataTransfer.getData("videoId");
    const result = await getVideoById(videoId);
    const { data } = result;
    let selectedCategory = allCategory.find((i) => i.id == categoryId);
    console.log(data)
    console.log(allCategory);
    console.log(selectedCategory);
    selectedCategory.allVideos.push(data);
    console.log(selectedCategory);
    await updateCategory(categoryId,selectedCategory)
  };

  return (
    <>
      <div className="">
        <button className="btn btn-warning" onClick={handleShow}>
          Add New Category
        </button>
      </div>
      <div className="ms-1">
        {allCategory && allCategory.length > 0 ? (
          allCategory.map((item) => (
            <div
              className="m-5 border border-secondary rounded p-3"
              droppable
              onDragOver={(e) => dragOver(e)}
              onDrop={(e) => videoDrop(e, item.id)}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h6>{item.categoryName}</h6>
                <button
                  className="btn btn-danger ms-3"
                  onClick={() => handleDeleteCategory(item.id)}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="mt-2">No Category to display</p>
        )}
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <i className="fa-solid fa-list" style={{ color: "#ff6a00" }}></i>{" "}
            Add Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the form</p>
          <Form className="border border-secondary p-3 rounded">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Category Name"
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleAddCategory}
            className="btn btn-warning upload"
          >
            Add
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

export default Category;
