import mongodb from 'mongodb'

const ObjectId = mongodb.ObjectId

let hotelGuests

export  default class HotelGuestsDAO{
    static async injectDB(conn){
        if(hotelGuests){
            return
        }
        try{
            hotelGuests = conn.db(process.env.Database).collection("hotelguests")
        }catch(e){
            console.error(`Unable to establish connection handle in hotelsDao: ${e}`)
        }
    }
    static async addHotelGuests(hotelId,guestId,name,rooms,guests,roomPrice,hotelImage,hotelname,dateIn,dateOut,Room,email,status){
        try{
            const hotelGuestsHoc = {
                hotelId:hotelId,
            
                guestId:guestId,
                name:name,
                rooms:rooms,
                guests:guests,
                roomPrice:roomPrice,
                hotelImage:hotelImage,
                hotelname:hotelname,
                dateIn:dateIn,
                dateOut:dateOut,
                Room:Room,
                email,
                status
            }
            console.log(hotelGuestsHoc)
            return await hotelGuests.insertOne(hotelGuestsHoc)
        }catch(e){
            console.error(`Unable to post hotel guests :${e}`)
        }
    }
    static async addGuestHistory(hotelId,GuestInfo){
        try{
            const guestHoc = {
                hotelId:hotelId,
              
                name:GuestInfo.name,
                rooms:GuestInfo.rooms,
                guests:GuestInfo.guests,
                roomPrice:GuestInfo.roomPrice,
                hotelImage:GuestInfo.hotelImage,
                dateIn:GuestInfo.dateIn,
                dateOut:GuestInfo.dateOut,
                email:GuestInfo.email
            }
            console.log(guestHoc)
            return await hotelGuests.insertOne(guestHoc)
        }catch(e){
            console.error(`Unable to post guests in history:${e}`)
        }
    }
    static async deleteHotelGuest(hotelId,roomId){
        try{
            const deleteHistory = await hotelGuests.deleteMany({
                _id:ObjectId(hotelId),
                userId:ObjectId(userId)
            })
            return deleteHistory
        }catch(e){
            console.error(`Unable to delete hotel guest:${e}`);
        }
    
    }
    static async getGuestHistory(
        {
            filters = null,
            page=0,
            GuestPerPage = 10,
        } = {}){
        let query
        let cursor
        try{
            cursor = await hotelGuests
            .find(query)
        }catch(e){
            console.log(`Unable to issue or find a command:${e}`)
        }
        const displayCursor = cursor.limit(GuestPerPage).skip(GuestPerPage * page)
        try{
            const HistoryList = await displayCursor.toArray()
            const totalNumHistory =  await hotelGuests.countDocuments(query)
            return {HistoryList:[], totalNumHistory:0}
        }catch(e){
            console.log(`Unable to convert cursor to array,${e}`);
        }
    }
    static async getHotelGuests({
        filters = null,
        page=0,
        GuestPerPage = 10,
    } = {}){
        let query
        if(filters){
            if("name" in filters){
                query = {$text:{$search:filters["name"]}}
            }
        }
        let cursor
        try{
            cursor = await hotelGuests
            .find(query)
        }catch(e){
            console.log(`Unable to issue or find a command, ${e}`)
            return {GuestList:[], totalNumGuests:0}
        }
        const displayCursor = cursor.limit(GuestPerPage).skip(GuestPerPage * page)
        try{
            const GuestList = await displayCursor.toArray()
            const totalNumGuests = await hotelGuests.countDocuments(query)
            return {GuestList,totalNumGuests}
        }catch(e){
            console.log(`Unable to convert cursor to array, ${e}`)
            return {GuestList:[],totalNumGuests:0}
        }
    }
    static async deleteHotel(guestId){
        try{
           const deleteResponse = await hotelGuests.deleteOne({
               _id:ObjectId(guestId),
           }) 
           console.log('delete',deleteResponse);
           return deleteResponse
           
        }catch(e){
            console.error(`Unable to delete hotel guest:${e}`)
            
        }
    }
    static async updateHotelGuest(hotelId,userId,status,date){
        try{
            const updateResponse = await hotelGuests.updateOne(
                {user_id:userId,_id:ObjectId(hotelId)},
                {$set:{status:status,date:date}}
            )
            console.log('-[[[[[[[[[')
            return updateResponse
        }catch(e){
            console.error(`Unable to update hotel guest:${e}`)
            return {error:e}
        }
    }
}


