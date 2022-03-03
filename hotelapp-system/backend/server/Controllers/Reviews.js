import ReviewsDao from "../Dao/ReviewsDao.js";

export default class ReviewsController{
    static async apiPostReview(req,res){
        try{
            const hotelId = req.body.hotel_id
            const review = req.body.text
            const userInfo = {
                name:req.body.name,
                _id:req.body.user_id
            }
            const date = new Date()

            const ReviewResponse = await ReviewsDao.addReview(
                hotelId,
                userInfo,
                review,
                date
            )
            res.json({status:"success"})
        }catch(e){
            res.status(500).json({error:e.message})
        }
    }
    static async apiUpdateReview(req,res,next){
        try{
            const reviewId = req.body.review_id
            const text = req.body.text
            const date = new Date()
            const reviewResponse = await ReviewsDao.updateReview(
                reviewId,
                req.body.user_id,
                text,
                date,
            )
            console.log('review',reviewResponse)
                var {error} = reviewResponse
                if(error){
                    res.status(400).json({error})
                }
                if(reviewResponse.modifiedCount ===0){
                    throw new Error(
                        "unable to update review - user may not be original user"
                    )
                }
        }catch(e){
            res.status(500).json({error:e.message})
        }
    }
    static async apiDeleteReview (req,res,next){
        try{
            const reviewId = req.query.id
            const userId = req.body.user_id
            console.log(reviewId)
            const reviewResponse = await ReviewsDao.deleteReview(
                reviewId,
                userId
            )
            res.json({status:"success"})
            console.log('')
        }catch(e){
            res.status(500).json({error:e.message})
        }
    }
}