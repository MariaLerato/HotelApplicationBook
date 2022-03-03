import FacilityDAO from "../Dao/hotelfacility.dao.js";
import mongodb from 'mongodb'

const ObjectId = mongodb.ObjectId

export default class FacilityController{
   static async apiPostFacility(req,res,next){
    try{
        const name = req.body.name
        const roomId = req.body.roomId
        const adminId = req.body.adminId
        const type = req.body.type
 
        const FacilityResponse =  await FacilityDAO.addFacility(
            name,
            roomId,
            adminId,
            type
        )
        console.log(FacilityResponse)
        res.json({status:"Success"})

    }catch(e){
        res.status(500).json({message:e})
    }
   }
   static async apiGetFacility(req,res,next){
    const facilityPerPage = req.query.facilityPerPage ? parseInt(req.facilityPerPage, 10) :20
    const page = req.query.page  ? parseInt(req.query.page, 10): 0

    const {facilityList,totalNumFacility} = await FacilityDAO.getFacility()
    let response = {
        facilities:facilityList,
        total_result:totalNumFacility
    }
    res.json(response.facilities)
    console.log(response.facilities)

   }
}