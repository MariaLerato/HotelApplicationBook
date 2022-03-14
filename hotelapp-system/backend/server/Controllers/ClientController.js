import ClientDao from "../Dao/ClientUser.js";
import mongodb from 'mongodb'

const ObjectId = mongodb.ObjectId

export default class ClientController{
    static async apiGetClient(req,res,next){
        const ClientPerPage = req.query.ClientPerPage ? parseInt(req.ClientPerPage, 10) :20
        const page = req.query.page  ? parseInt(req.query.page, 10): 0
    
        const {ClientList,totalNumClientList} = await ClientDao.getUser()
        let response = {
            Client:ClientList,
            total_result:totalNumClientList
        }
        res.json(response.Client)
        console.log(response.Client)
    }

    static async apiPostClient(req,res){
        try{
            // const userId = req.body.user_id
            // const name=req.body.name
            // const  surname=req.body.surname
            //  const  image=req.body.image
            //  const  email=req.body.email
            // const   phone=req.body.phone
            // const address = req.body.address
            const date = new Date()
            const {userId,name,surname,image,email,phone,address} = req.body
         
            console.log('client',req.body);
            const ClientRes = await ClientDao.addClient(
                userId,
                name,
                surname,    
                image,
                email,
                phone,
                address,
                date
            )
            console.log('resData',ClientRes)
            res.json({status:"Success"})
        }catch(e){
            res.status(500).json({error:e.message})
        }
    }
    static async apiUpdateClient(req,res,next){
        try{
            // const hotelId = req.body.hotel_id
            //    const name=req.body.name
            //  const  surname=req.body.surname
            //   const  age=req.body.age
            //   const  image=req.body.image
            //   const  email=req.body.email
            //  const   password=req.body.password
             const date = new Date()
           const {hotelId,name,surname,image,email,phone,address} = req.body
           console.log('modei',req.body)
           
           const ClientResponse = await ClientDao.updateClient(
               hotelId,
                req.body.user_id,
                name,
                surname,
                image,
                email,
                phone,
                address,
                date,
            )
            console.log("client",ClientResponse)
            console.log({status:"Success"})
            var {error} = ClientResponse
            if(error){
                res.status(400).json({error})
            }
            if (ClientResponse.modifiedCount === 0){
                throw new Error(
                    "unable to update client info user may not be original poster"
                )
            }

        }catch(e){
            res.status(500).json({error:e.message})
        }
    }
}