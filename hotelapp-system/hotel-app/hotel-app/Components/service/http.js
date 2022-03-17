import axios from "axios";

export default axios.create({
    baseURL:"http://f647-102-252-66-25.ngrok.io/api/v1/hotels",
    headers:{
        "Content-Type":"application/json"
    }
})
