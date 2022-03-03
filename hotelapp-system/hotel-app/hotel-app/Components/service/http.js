import axios from "axios";

export default axios.create({
    baseURL:"http://7ac7-41-13-118-206.ngrok.io/api/v1/hotels",
    headers:{
        "Content-Type":"application/json"
    }
})
