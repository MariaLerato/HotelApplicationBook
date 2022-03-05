
import mongodb from 'mongodb'
import NotifyDao from '../Dao/NotifiyDao.js'

const ObjectId = mongodb.ObjectId
export default class NotifyController{
    static async apiPostGuestNotify(req,res,next){
        try{
            const guestId=req.body.guestId
              const  name=req.body.name
              const  rooms=req.body.rooms
             const   guests=req.body.guests
            const    roomPrice=req.body.roomPrice
            const    hotelImage=req.body.hotelImage
            const    hotelname=req.body.hotelname
            const    dateIn=req.body.dateIn
            const    dateOut=req.body.dateOut
            const    Room=req.body.Room
            const    email=req.body.email
            const message = req.body.message
            const notifyResponse = await NotifyDao.addNotification(
                guestId,
               name,
               rooms,
               guests,
               roomPrice,
               hotelImage,
               hotelname,
               dateIn,
               dateOut,
               Room,
               email,
               message
            )
            console.log('notif',notifyResponse)
            res.json({status:"Success"})
           

        }catch(e){
            res.status(500).json({error:e.message})
        }
    }
    static async apiGetNotification(req,res,next){
        const NotifyPerPage = req.query.NotifyPerPage ? parseInt(req.NotifyPerPage, 10) :20
        const page = req.query.page  ? parseInt(req.query.page, 10): 0
        let filters = {}
        if(req.query.name){
            filters.name = req.query.name
        }
        const {NotifyList,totalNumNotify} = await NotifyDao.getNotification(
            filters,
            page,
            NotifyPerPage
        )
            let response = {
                NotifyGuest:NotifyList,
                page:page,
                filters:filters,
                entries_per_page:NotifyPerPage,
                total_results:totalNumNotify
            }
            res.json(response)
            console.log(response)
    }

}
