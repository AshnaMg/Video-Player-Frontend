import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";


// upload video

export const uploadVideo = async (reqBody) => {
    return await commonAPI('POST', `${serverURL}/videos`, reqBody)
}

// get all videos

export const getAllVideos = async () => {
    return await commonAPI('GET', `${serverURL}/videos`, "")
}

// delete video

export const deleteVideo = async (id) => {
    return await commonAPI('DELETE', `${serverURL}/videos/${id}`, {})
}

// add to watch history

export const addToHistory = async (videoDetails) => {
    return await commonAPI('POST', `${serverURL}/history`, videoDetails)
}

// get all watch history

export const getAllWatchHistory = async () => {
    return await commonAPI('GET', `${serverURL}/history`, "")
}

// delete watch history

export const deleteWatchHistory = async (id) => {
    return await commonAPI('DELETE', `${serverURL}/history/${id}`, {})
}

// add new category

export const addCategory = async (reqBody) => {
    return await commonAPI('POST', `${serverURL}/category`, reqBody)
}

// get all category

export const getAllCategory = async () => {
    return await commonAPI('GET', `${serverURL}/category`, "")
}

// delete Category

export const deleteCategory = async (id) => {
    return await commonAPI('DELETE', `${serverURL}/category/${id}`, {})
}

// to get videos by id

export const getVideoById = async (id) => {
    return await commonAPI('GET', `${serverURL}/videos/${id}`, "")
}

// update videos under corresponding category

export const updateCategory = async (id,body) => {
    return await commonAPI('PUT', `${serverURL}/category/${id}`, body)
}