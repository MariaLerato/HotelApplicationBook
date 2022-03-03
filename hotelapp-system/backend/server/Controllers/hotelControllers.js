import HotelDAO from "../Dao/hotelsDao.js";
import mongodb from "mongodb"

const ObjectId = mongodb.ObjectId
let hotels
export default class HotelsController{
    static async apiPostHotel(req,res,next){
    
        try{
           const hotelId= req.body.hotel_id
           const image = req.body.image
        
           const adminInfo = {
               email:req.body.email,
               adminId :req.body.adminId
           }
           const name = req.body.name
           const text = req.body.text
           const province = req.body.province
           const city = req.body.city
           const address = {
               lat:req.body.lat,
               long:req.body.long
           }
            const HotelResponse = await HotelDAO.addHotel(
               hotelId,
               image,
               adminInfo,
              name,
              text,
               province,
               city
            )
            res.json({status: "Success Ok"})
            console.log('mary',HotelResponse)
        }catch(e){
            res.status(500).json({error:e.message})
        }
    }
    static async apiUpdateHotel(req,res,next){
        try{
            const adminId = req.body.adminId
            const text = req.body.text
            const hotel ={
                checkIn:req.body.checkIn,
                checkOut:req.body.checkOut
            }

            const hotelResponse = await HotelDAO.updateHotel(
                adminId,
                req.body.admin_id,
                text,
                hotel
            )
            var {error} = hotelResponse
            if(error){
                res.status(400).json({error})
            }
            if(hotelResponse.modifiedCount === 0){
                throw new Error(
                    "unable to update hotel - user may not be original poster"
                )
            }
        }catch(e){
            res.status(500).json({error:e.message})
        }
    }
    static async apiGetHotels(req,res,next){
        
      

       
        const hotelsPerPage = req.query.hotelsPerPage ? parseInt(req.hotelsPerPage, 10) :20
        const page = req.query.page  ? parseInt(req.query.page, 10): 0
        console.log('loading....................')
        const filters = {}
        if(req.query.name){
            filters.name = req.query.name
        }
        const {hotelList,totalNumHotels} = await HotelDAO.getHotels(
            filters,
            page,
            hotelsPerPage
        )
            let response = {
                hotels:hotelList,
                page:page,
                filters:filters,
                entries_per_page:hotelsPerPage,
                total_results:totalNumHotels
            }
            res.json(response.hotels)
            console.log(response.hotels)
    }
    static async apiGetRestaurantById(req,res,next){
        try{
            let id = req.params.id || {}
            let hotel = await HotelDAO.getHotelById(id)
            if(!hotel){
                res.status(404).json({error:"Not found"})
            }
            res.json(hotel)
        }catch(e){
            console.log(`api,${e}`)
            res.status(500).json({error:e})
        }
    }
    static async apiDeleteHotel(req,res,next){
        try{
            const hotelId = req.query.id
            const adminId = req.body.adminId
            console.log(hotelId)
            const HotelResponse = await HotelDAO.deleteHotel(
              hotelId,
              adminId
            )
                console.log(HotelResponse)
            res.json({ status :"success"})
        }catch(e){
            res.status(500).json({error:e.message})
        }

    }
    static async apiSearchHotel(req,res){
        const {term} = req.body

        try{
            const hotelname = new RegExp(term,"i");
            const result = await HotelDAO.getHotels({hotelname:term})
            res.status("Success")
            console.log(hotelname)
            return result
        }catch(e){
            console.log(e)
        }
    }


}