import mongodb from 'mongodb'

const ObjectId = mongodb.ObjectId

let facility

export default class FacilityDAO{
    static async injectDB(conn){
        if(facility){
            return
        }
        try{
            facility = await conn.db(process.env.Database).collection("facility")
        }catch(e){
            console.log(`Unable to establish connection handle in FacilityDAO:${e}`)
        }
    }
    static async addFacility(roomId,name,adminId,type){
        try{
            const facilityDoc = {
                name:name,
                roomId:roomId,
                adminId:adminId,
                type:type
            }
            console.log(facilityDoc)
            return await facility.insertOne(facilityDoc)
        }catch(e){
            console.log("error",e)
        }
    }
    static async getFacility({
        filters=null,
        page = 0,
        facilityPerPage = 10

    }={}){
        let cursor
        let query
        try{
            cursor = await facility
            .find(query)
        }catch(e){
            console.log(`Unable to issue a command`)
            return {FacilityList:[],totalNumFacility}
        }
        const displayCursor = cursor.limit(facilityPerPage).skip(facilityPerPage * page)
        try{
            const facilityList = await displayCursor.toArray()
            const totalNumFacility = await facility.countDocuments(query)
            return {facilityList,totalNumFacility}
        }catch(e){
            console.log(`Unable to convert cursor to array`)
            return {facilityList:[],totalNumFacility:0}
        }
    }
}