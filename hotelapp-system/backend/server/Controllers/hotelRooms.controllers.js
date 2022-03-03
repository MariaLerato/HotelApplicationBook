import BSON from 'bson'
import HotelRoomDAO from '../Dao/hotelRoom.dao.js'

const ObjectId = BSON.ObjectId
export default class HotelRoomController{
    static async apiPostHotelRooms(req,res,next){
        try{
            const hotelId = req.body.hotel_id
            const roomId = req.body.roomId
            const status=req.body.status
            const userId = req.body.userId
            const roomInfo = {
               roomName:req.body.roomName,
                roomType:req.body.roomType,
                roomDes:req.body.roomType,
                roomPrice:req.body.roomPrice
            }
            const images = {
                bedImage :req.body.bedImage,
                lounge:req.body.lounge,
                other:req.body.other
            }
            const HotelRoomResponse = await HotelRoomDAO.addHotelRoom(
                hotelId,
                roomId,
                roomInfo,images,status,
                userId
            )
            console.log(HotelRoomResponse)
            res.json({status:"Success"})
        }catch(e){
            res.status(500).json({error:e.message})
        }
    }

    static async apiGetHotelRooms(req,res,next){
        const  hotelRoomPerPage = req.query. hotelRoomPerPage ? parseInt(req. hotelRoomPerPage, 10) :20
        const page = req.query.page  ? parseInt(req.query.page, 10): 0
        const filters = {}
        if(req.query.name){
            filters.name = req.query.name
        }
        const { hotelRoomList,totalNumHotelRoom} = await HotelRoomDAO.getHotelRoom(
            filters,
            page,
            hotelRoomPerPage
        )
            let response = {
                hotelrooms: hotelRoomList,
                page:page,
                filters:filters,
                entries_per_page:hotelRoomPerPage,
                total_results:totalNumHotelRoom
            }
            res.json(response)
            console.log(response)
    }
    static async apiDeleteHotelRooms(req,res,next){
        try{
            const roomId = req.query.id
            const hotel_id = req.body.roomId
            console.log(hotel_id)
            const HotelResponse = await HotelRoomDAO.deleteHotelRoom(
              hotel_id,
              roomId
            )
                console.log(HotelResponse)
            res.json({ status :"success"})
        }catch(e){
            res.status(500).json({error:e.message})
        }
    }
    static async apiUpdateHotelRooms(req,res,next){
        
        try{
            const roomId = req.body.room_id
            const status = req.body.status
            const date = new Date()
            // const {roomId,roomName,date} = req.body
            console.log('dets',req.body)
            const roomResponse = await HotelRoomDAO.updateHotelRoom(
                roomId,
                req.body.user_id,
                status,
                date
            )
            console.log('--------------------')
            console.log('responseRoom',roomResponse)
            // res.json({status:"Success"})
            var {error} = roomResponse
            if(error){
                res.status(400).json({error})
            }
            if (roomResponse.modifiedCount === 0){
                throw new Error(
                    "unable to update hotel room user may not be original user"
                )

            }
        }catch(e){
            res.status(500).json({error:e.message})
        }
    }
}