import BSON from 'bson'
import HotelGuestDAO from '../Dao/hotelGuests.dao.js'

const ObjectId = BSON.ObjectId


export default class HotelGuestController{
    static async apiPostHotelGuests(req,res,next){
        try{
            const hotelId = req.body.hotel_id
            const user_id=req.body.user_id
            const GuestInfo = {
                name:req.body.name,
                rooms:req.body.rooms,
                guests:req.body.guests,
                roomPrice:req.body.roomPrice,
                hotelImage:req.body.hotelImage,
                hotelname:req.body.hotelname,
                dateIn:req.body.dateIn,
                dateOut:req.body.dateOut,
                Room:req.body.Room
            }
            const status = req.body.status
            
            console.log("Details",req.body)
            const HotelGuestResponse = await HotelGuestDAO.addHotelGuests(
               ObjectId(hotelId),
               user_id,
               GuestInfo
            )
            console.log(HotelGuestResponse)
            res.json({status:"Success"})
            if(checkIn){
                return status = status.checkIn
            }else{
                return status = status.checkOut
            }

        }catch(e){
            res.status(500).json({error:e.message})
        }
    }
    static async apiPostGuestHistory(req,res){
        try{
            const hotelId = req.body.hotel_id
            const roomId = req.body.roomId
            const GuestInfo = {
                name:req.body.name,
                rooms:req.body.rooms,
                guests:req.body.guests,
                roomPrice:req.body.roomPrice,
                hotelImage:req.body.hotelImage,
                dateIn:req.body.dateIn,
                dateOut:req.body.dateOut
            }
            const historyRes =  await HotelGuestDAO.addGuestHistory(
                ObjectId(hotelId),
                roomId,
                GuestInfo

            )
            console.log('history',historyRes)
        }catch(e){
            res.status(500).json({error:e.message})
        }
    }
    static async apiGetHotelGuests(req,res,next){
        const GuestsPerPage = req.query.GuestsPerPage ? parseInt(req.GuestsPerPage, 10) :20
        const page = req.query.page  ? parseInt(req.query.page, 10): 0
       
        let filters = {}
        if(req.query.name){
            filters.name = req.query.name
        }
        const {GuestList,totalNumGuests} = await HotelGuestDAO.getHotelGuests(
            filters,
            page,
            GuestsPerPage
        )
            let response = {
                hotelGuest:GuestList,
                page:page,
                filters:filters,
                entries_per_page:GuestsPerPage,
                total_results:totalNumGuests
            }
            res.json(response)
            console.log(response)
    }
    static async apiDeleteHotelGuests(req,res,next){
        try{
            const hotelId = req.query.id
            const adminId = req.body.adminId
            console.log(hotelId)
            const HotelResponse = await HotelGuestDAO.deleteHotel(
              hotelId,
              adminId
            )
                console.log(HotelResponse)
            res.json({ status :"success"})
        }catch(e){
            res.status(500).json({error:e.message})
        }

    }
    static async DeleteGuestHistory(req,res){
        try{
            const hotelId = req.query.hotel_id
            const userId = req.query.roomId
            console.log(hotelId)
            const historyDes = await HotelGuestDAO.deleteHotelGuest(
                hotelId,
                userId
            )
        }catch(e){
            res.status(500).json({error:e.message})
        }
    }
    static async apiUpdateHotelGuest(req,res,next){
        try{
            const hotelId = req.body.hotel_id
            const status = req.body.status
            const date = new Date()
            const guestResponse = await HotelGuestDAO.updateHotelGuest(
                hotelId,
                req.body.user_id,
                status,
                date
            )
            console.log('guests',guestResponse)
            res.json({status:"Success"})
            var {error} = guestResponse
            if(error){
                res.status(400).json({error})
            }
            
            if(guestResponse.modifiedCount ===0){
                throw new Error(
                    "unable to update guest - user may not be original poster"
                )
            }
        }catch(e){
            res.status(500).json({error:e.message})
        }
    }
}
