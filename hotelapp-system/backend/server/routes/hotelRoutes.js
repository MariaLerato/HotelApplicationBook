import express from 'express'
import HotelsCtrl from '../Controllers/hotelControllers.js'
import HotelRoomCtrl from '../Controllers/hotelRooms.controllers.js'
import HotelGuestCtrl from "../Controllers/hotelGuests.controller.js"
import FacilityController from '../Controllers/hotelFacility.js'
import UserController from '../Controllers/User.controllers.js'
import ClientCtrl from '../Controllers/ClientController.js'
import ReviewsCtrl from '../Controllers/Reviews.js'

const router = express.Router()


router.route("/")
.get(HotelsCtrl.apiGetHotels)
.post(HotelsCtrl.apiPostHotel)
.put(HotelsCtrl.apiUpdateHotel)
.delete(HotelsCtrl.apiDeleteHotel)

router.route("/review").post(ReviewsCtrl.apiPostReview)
.delete(ReviewsCtrl.apiDeleteReview)

.put(ReviewsCtrl.apiUpdateReview)


router.route("/id/:id")
.get(HotelsCtrl.apiGetRestaurantById)

router.route('/client').get(ClientCtrl.apiGetClient)
.post(ClientCtrl.apiPostClient)
.put(ClientCtrl.apiUpdateClient)

router.route("/room").get(HotelRoomCtrl.apiGetHotelRooms)
.post(HotelRoomCtrl.apiPostHotelRooms)
.delete(HotelRoomCtrl.apiDeleteHotelRooms)
.put(HotelRoomCtrl.apiUpdateHotelRooms)

router.route("/user").get(UserController.apiGetUser)
.post(UserController.apiPostUser)
router.route("/log").get(UserController.apiGetUser)
.post(UserController.apiLogUser)

router.route("/guests").get(HotelGuestCtrl.apiGetHotelGuests)
.post(HotelGuestCtrl.apiPostHotelGuests)
.delete(HotelGuestCtrl.apiDeleteHotelGuests)
.put(HotelGuestCtrl.apiUpdateHotelGuest)


router.route('/facility').post(FacilityController.apiPostFacility)
.get(FacilityController.apiGetFacility)


export default router

