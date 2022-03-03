import axios from "axios";

export default axios.create({
    baseURL:"http://localhost:7000/api/hotelGuests",
    headers:{
        "Content-Type":"application/json"
    }
})