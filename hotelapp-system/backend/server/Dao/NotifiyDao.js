import mongodb from 'mongodb'

const ObjectId = mongodb.ObjectId

let notification

export  default class NotifyDAO{
    static async injectDB(conn){
        if(notification){
            return
        }
        try{
            notification = conn.db(process.env.Database).collection("notifications")
        }catch(e){
            console.error(`Unable to establish connection handle in notifications: ${e}`)
        }
    }
    static async addNotification(guestId,name,rooms,guests,roomPrice,hotelImage,hotelname,dateIn,dateOut,Room,email,message,date){
        try{
            const notifyHoc = {
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
                message,
                date
            }
            console.log('notify',notifyHoc)
            return await notification.insertOne(notifyHoc)
        }catch(e){
            console.error(`Unable to post notification for this guest :${e}`)
        }
    }

    static async getNotification({
        filters = null,
        page=0,
        NotifyPerPage = 10,
    } = {}){
        let query
        if(filters){
            if("name" in filters){
                query = {$text:{$search:filters["name"]}}
            }
        }
        let cursor
        try{
            cursor = await notification
            .find(query)
        }catch(e){
            console.log(`Unable to issue or find a command, ${e}`)
            return {NotifyList:[], totalNumNotify:0}
        }
        const displayCursor = cursor.limit(NotifyPerPage).skip(NotifyPerPage * page)
        try{
            const NotifyList = await displayCursor.toArray()
            const totalNumNotify = await notification.countDocuments(query)
            return {NotifyList,totalNumNotify}
        }catch(e){
            console.log(`Unable to convert cursor to array, ${e}`)
            return {NotifyList:[],totalNumNotify:0}
        }
    }
}