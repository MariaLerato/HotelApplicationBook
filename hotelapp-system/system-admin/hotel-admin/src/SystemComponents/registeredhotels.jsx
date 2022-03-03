import React, { useEffect, useState } from "react";
import "./Styles.css";
import { Link, useNavigate } from "react-router-dom";
import l from "../images/maria.png";
import Modal from "@material-ui/core/Modal";
import HotelDataService from "../services/hotels"
import FileBase64 from 'react-file-base64'

const Hotels = () => {

  const [open, setOpen] = useState(false);
  const [province, setProvince] = useState();
  const [name, setName] = useState();
  const [city,setCity] = useState()
  const [search, setSearch] = useState();
  const [hotel, setHotels] = useState([])
  const [image, setImage] = useState()
  const [text, setText] = useState()
  const [date, setDate] = useState(Date)
  const [adminId, setId] = useState()

  useEffect(() => {
    retrieveHotels();
  }, [])


  const close = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(!open);
  };

  const retrieveHotels = () => {
    HotelDataService.getAll()
      .then(response => {
        console.log(response.data)
        setHotels(response.data)
      })
  }
  async function registerHotel(e) {
    e.preventDefault()
    const newHotel = { name, text, adminId, image, province,city }
    console.log(newHotel)
    HotelDataService.createHotel(newHotel)
      .then(res => console.log(res.data))
  }

  return (
    <>
      <div className="GuestContainer">
        <div className="link">
          <h1>Montello</h1>
          <div className="systemuser">
            <div className="profilepicture">
              <img src={l} alt={"admin"}></img>
            </div>
            <div className="systemusername">
              <h3>Maria Lerato</h3>
            </div>
          </div>
          <p className="addAdmin">App Admin   </p>
          <h2 className="subheading">Register Hotels</h2>
          <h2 style={{ color: 'white', marginTop: '-8%' }}>System Maintenance</h2>
          <div className="logout" style={{ marginTop: '35%' }}>
            <i className="fa fa-sign-out fa-2x"></i>
            <Link to="/signin">
              <h3>Log Out</h3>
            </Link>
          </div>
        </div>
        <div className="guests">
          <div className="header">
            <div className="input-icons">
              <i className="fa fa-search fa-2x" style={{ padding: "2.5%" }}></i>
              <input
                type="text"
                name="search"
                placeholder="Search Hotels"
                className="search-input"
           

              />
            </div>
          </div>
          <div className="hotellist">
            <div className="icon-home">
              <i
                className="fa fa-pencil"
                style={{ marginTop: 4, marginLeft: -3, color: "#5bad9b" }}
              ></i>
              <p>/Registered Hotels</p>
            </div>
            <div style={{ margin: "1%" }}>
              {hotel.map((data) => (
                <ul>
                  <div key={data.id} className="listHotels">
                    <p
                      style={{
                       
                        fontSize: 20,
                        fontWeight: "500",
                        color: "#3a8a70",
                      }}
                    >
                  
                      {data.name}
                    </p>
                    <div className="registerButton">
                      <button
                        type="submit"
                        style={{ marginLeft: "5%", width: 144, height: 44 }}

                      >
                        De-register
                      </button>
                    </div>
                  </div>
                </ul>
              ))}

              <div>
                <button type="button" className="addnew" onClick={handleOpen}>
                  Add New Hotel
                </button>
                <Modal
                  open={open}
                  onClose={close}
                  style={{
                    position: "absolute",
                    width: "40%",
                    height:'70%',
                    margin: "auto",
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",

                  }}
                >
                  <div className="ModalContainer">
                    <form className="Add" onSubmit={registerHotel}>
                      <h2>Add Hotel</h2>
                      <div className="hotel-input-icons">
                        <i className="fa fa-building fa-2x"></i>
                        <input
                          type="text"
                          placeholder="Hotel Name"
                          className="input-field"
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                        />
                      </div>
                      <div className="hotel-input-icons">
                      <i className="fa fa-info-circle fa-2x"></i>
                        <input
                          type="text"
                          placeholder="About Hotel"
                          className="input-field"
                          onChange={(e) => setText(e.target.value)}
                          value={text}
                        />
                      </div>
                      <div className="hotel-input-icons">
                       <i className="fa fa-address-card  fa-2x"></i>
                        <input
                          type="text"
                          placeholder="Hotel ID"
                          className="input-field"
                          onChange={(e) => setId(e.target.value)}
                          value={adminId}
                        />
                        <div className="input-icons">
                          <i className="fa fa-map-marker  fa-2x"></i>
                          <input
                            type="text"
                            placeholder="Province"
                            className="input-field"
                            onChange={(e) => setProvince(e.target.value)}
                            value={province}
                          />
                        </div>
                        <div className="input-icons">
                          <i className="fa fa-map-marker  fa-2x"></i>
                          <input
                            type="text"
                            placeholder="City"
                            className="input-field"
                            onChange={(e) => setCity(e.target.value)}
                            value={city}
                          />
                        </div>
                        <FileBase64
                          type="file"
                          multiple={false}
                          onDone={({ base64 }) => setImage({ image: base64 })}
                        />
                      </div>
                      <button
                        type="button"
                        className="addnew"
                        style={{ width: 170, marginLeft: "65%" }}
                        onClick={registerHotel}
                      >
                        Register Hotel
                      </button>
                    </form>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hotels
