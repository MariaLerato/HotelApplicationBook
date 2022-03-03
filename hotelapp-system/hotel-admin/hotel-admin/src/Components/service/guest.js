import httpCommon from "./http-common"

class BackendInfo{
 getAll(page=0){
     return httpCommon.get(`?page=${page}`)
 }
 getAllRooms(page=0){
    return httpCommon.get(`/room?page=${page}`)
}
getAllGuests(page=0){
    return httpCommon.get(`/guests?page=${page}`)
}
logUser(data){
    return httpCommon.post("/log",data)
}
 addHotel(data){
     return httpCommon.post("/",data)
 }
 createGuest(data){
     return httpCommon.post("/guests",data)
 }
 addRoom(data){
     return httpCommon.post("/room",data)
 }
 addFacility(data){
     return httpCommon.post("/facility",data)
 }
 deleteUser(id){
    return httpCommon.delete(`hotel?id=${id}`)
}
find(query,by = "guest", page = 0){
    return httpCommon.get(`?${by}=${query}&page=${page}`)
}
deleteRoom(id){
    return httpCommon.delete(`?id=${id}`)
}
updateRoom(data){
    return httpCommon.put("/room",data)
}
updateGuest(data){
    return httpCommon.put("/guests",data)
}
}
export default new BackendInfo()