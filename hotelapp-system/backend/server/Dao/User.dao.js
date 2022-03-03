import mongodb from 'mongodb'

const ObjectId = mongodb.ObjectId
let User

export default class UserDAO{
    static async injectDB(conn){
        if(User){
            return
        }
        try{
            User = await conn.db(process.env.Database).collection('User')
        }catch(e){
            console.log(`Unable to establish a connection handle at UserDao:${e}`)
        }
    }
    static async addUser(adminId,user,date,userId){
        try{
            const userDoc = {
                adminId:adminId,
                userId:userId,
                name:user.name,
                surname:user.surname,
                email:user.email,
                password:user.password,
                image:user.image,
                
                date:date
            }
            console.log(userDoc)
            return await User.insertOne(userDoc)
        }catch(e){
            console.log('unable to post user')
        }

    }
    static async logUser(hotelId,userId,email,password){
        try{
            const logDoc = {
                hotelId:hotelId,
                userId:userId,
                email:email,
                password:password
            }
            console.log(logDoc)
            return await User.insertOne(logDoc)
        }catch(e){
            console.log('unable to log user')
        }
    }
    static async getUser({
        filters = null,
        page = 0,
        UserPerPage = 10,
    }={}){
        let cursor
        let query
        try{
            cursor = await User
            .find(query)
        }catch(e){
            console.log(`Unable to issue a command`)
            return {UserList:[],totalNumUserList}
        }
        const displayCursor = cursor.limit(UserPerPage).skip(UserPerPage * page)
        try{
            const UserList = await displayCursor.toArray()
            const totalNumUserList = await User.countDocuments(query)
            return {UserList,totalNumUserList}
        }catch(e){
            console.log(`Unable to convert cursor to array`)
            return {UserList:[],totalNumUserList:0}
        }
    }
    


}