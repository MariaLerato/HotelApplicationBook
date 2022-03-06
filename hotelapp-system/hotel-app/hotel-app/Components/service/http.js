import axios from "axios";

export default axios.create({
    baseURL:"http://cf7b-102-252-68-74.ngrok.io/api/v1/hotels",
    headers:{
        "Content-Type":"application/json"
    }
})
