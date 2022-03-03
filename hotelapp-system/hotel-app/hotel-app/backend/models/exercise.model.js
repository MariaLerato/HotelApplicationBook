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

static async updateReview(reviewId,userId,text,date){
    try{
        const updateResponse = await reviews.updateOne(
            {user_id:userId,_id:ObjectId(reviewId)},
            {$set:{text:text,date:date}}
        )
        console.log('-------------')
        return updateResponse
        
    }catch(e){
        console.error(`Unable to update review:${e}`)
        return{error:e}
    }
}

static async apiUpdateHotelGuest(req,res,next){
    try{
        const hotelId = req.body.hotel_id
        const status = req.body.status
        const date = new Date()
        const guestResponse = await HotelGuestDAO.updateHotelGuest(
            hotelId,
            req.body.user_id,
            status,
            date
        )
        console.log('guests',guestResponse)
        res.json({status:"Success"})
        var {error} = guestResponse
        if(error){
            res.status(400).json({error})
        }
        
        if(guestResponse.modifiedCount ===0){
            throw new Error(
                "unable to update guest - user may not be original poster"
            )
        }
    }catch(e){
        res.status(500).json({error:e.message})
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