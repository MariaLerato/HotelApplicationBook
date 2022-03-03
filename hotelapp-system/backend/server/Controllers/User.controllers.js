import UserDAO from "../Dao/User.dao.js";
import mongodb from 'mongodb'

const ObjectId = mongodb.ObjectId

export default class UserController{
    static async apiGetUser(req,res,next){
        const UserPerPage = req.query.UserPerPage ? parseInt(req.UserPerPage, 10) :20
        const page = req.query.page  ? parseInt(req.query.page, 10): 0
    
        const {UserList,totalNumUserList} = await UserDAO.getUser()
        let response = {
            User:UserList,
            total_result:totalNumUserList
        }
        res.json(response.User)
        console.log(response.User)
    
    }
    static async apiLogUser(req,res,next){
        try{
            const hotelId = req.body.hotel_id
            const userId = req.body.userId
            const email = req.body.email
            const password = req.body.password

            const LogResponse = await UserDAO.logUser(
                ObjectId(hotelId),
                userId,
                email,
                password
            )
            console.log(LogResponse)
            res.json({status:"Success"})
        }catch(e){
            res.status(500).json({error:e.message})
        }
    }
    static async apiPostUser(req,res,next){
        try{
            const adminId = req.body.adminId
            const userId = req.body.userId
            const user = {
                name: req.body.name,
                surname:req.body.surname,
                email:req.body.email,
                password:req.body.password,
                image:req.body.image
            }
            const date = new Date()
            const UserResponse = await UserDAO.addUser(
                adminId,
                user,
                date,
                userId
            )
            console.log(UserResponse)
            res.json({status:"Success"})
        }catch(e){
            res.status(500).json({error:e.message})
        }

    }
}
