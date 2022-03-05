import axios from "axios";

export default axios.create({
    baseURL:"http://0cfa-197-184-173-106.ngrok.io/api/v1/hotels",
    headers:{
        "Content-Type":"application/json"
    }
})
