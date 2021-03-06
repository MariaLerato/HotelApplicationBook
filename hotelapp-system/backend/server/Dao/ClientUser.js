import mongodb from 'mongodb'

const ObjectId = mongodb.ObjectId
let Client

export default class ClientDao{
    static async injectDB(conn){
        if(Client){
            return
        }
        try{
            Client = await conn.db(process.env.Database).collection('Client')
        }catch(e){
            console.log(`Unable to establish a connection handle at ClientDao:${e}`)
        }
    }
    static async addClient(userId,name,surname,image,email,phone,address,date){
        try{
            console.log('=================');
            const clientDao = {
                userId:userId,
                name:name,
                surname:surname,
                image:image,
                email:email,
                phone:phone,
                address:address,
                date:date
            }
            console.log('userDao',clientDao)
            return await Client.insertOne(clientDao)
        }catch(e){
            console.log('client not posted')
        }
    }
    static async getUser({
        filters = null,
        page = 0,
        ClientPerPage = 10,
    }={}){
        let cursor

        let query
        try{
            cursor = await Client
            .find(query)
        }catch(e){
            console.log(`Unable to issue a command`)
            return {ClientList:[],totalNumClientList}
        }
        const displayCursor = cursor.limit(ClientPerPage).skip(ClientPerPage * page)
        try{
            const ClientList = await displayCursor.toArray()
            const totalNumClientList = await Client.countDocuments(query)
            return {ClientList,totalNumClientList}
        }catch(e){
            console.log(`Unable to convert cursor to array`)
            return {ClientList:[],totalNumClientList:0}
        }
    }
    static async updateClient(userId,name,surname,image,email,phone,address,date){
        try{
            const updateClient = await Client.updateOne(
                {user_id:userId,},
                {$set:{ name:name,surname:surname,image:image,email:email,phone:phone,address:address,date:date,}}
            )
            console.log('{{{{}}}}}')
            console.log("dafk",updateClient)
            return updateClient
        }catch(e){
            console.error(`Unable to update client info:${e}`)
            // return{error:e}
        }
        
    }
}