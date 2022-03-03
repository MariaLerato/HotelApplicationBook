import httpCommon from "../http-common";

class HotelDataService{
    getAll(page=0){
        return httpCommon.get(`?page=${page}`)
    }
    get(id){
        return httpCommon.get(`/id/${id}`)

    }
    find(query,by = "name", page = 0){
        return httpCommon.get(`?${by}=${query}&page=${page}`)
    }
    createHotel(data){
        return httpCommon.post("/",data)
    }
    deleteUser(id){
        return httpCommon.delete(`?id=${id}`)
    }
  
}
export default new HotelDataService()