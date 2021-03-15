import axios from "axios";

export const FETCH_APOD_START = "FETCH_APOD_START";
export const FETCH_APOD_SUCCES = "FETCH_APOD_SUCCES";
export const FETCH_APOD_FAILURE = "FETCH_APOD_FAILURE";

export const getApod = (date) => dispatch => {
    dispatch({ type: FETCH_APOD_START });
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}${date !== "" ? "&date=" + date : ""}`)
    .then(res => dispatch({ type: FETCH_APOD_SUCCES, payload: res.data}))
    .catch(error => dispatch({ type: FETCH_APOD_FAILURE, payload: error.response.data.msg }))
};