import React from "react";
import l from '../images/room1.png'
import s from '../images/room2.png'
import w from '../images/room3.png'
import o from '../images/room4.png'
import z from '../images/room5.png'
import a from '../images/room6.jpg'
import r from '../images/blackwoman.png'
import y from '../images/woman.png'
import q from '../images/SplashImage.png'
import b from '../images/indi.jpg'
import c from '../images/bendie.jpeg'


class Info{
    guests=[{
        id:0, name:'Maria Fenyane',location:'Limpopo,Lebowakgomo',status1:'checkin',status2:'checkout',indate:'15/10/2022',outDate:'18/10/2022',room:'Room A',status:'CheckedIn', total:'R1849.00'
    },
    {
        id:1, name:'Meiki Maponya',location:'Gauteng,Pretoria',status1:'checkin',status2:'checkout',indate:'18/10/2022',outDate:'20/10/2022',room:'Room A',status:'Booked', total:'R1849.00'
    },{
        id:2,name:'Chrisian Poeko',location:'Capetown',status1:'checkin',status2:'checkout',indate:'22/10/2022',outDate:'28/10/2022',room:'Room B',status:'CheckedIn', total:'R1500.00'
    },
    {
        id:3,name:'Melita Mapelane',location:'Limpopo, Polokwane',status1:'checkin',status2:'checkout',indate:'23/10/2022',outDate:'25/10/2022',room:'Room C',status:'Booked', total:'R2100.00'
        },{
        id:4,name:'Makoma Ntswana',location:'Limpopo,Polokwane',status1:'checkin',status2:'checkout',indate:'15/10/2022',outDate:'18/10/2022',room:'Room B',status:'CheckedIn', total:'R1500.00'
    },{
        id:5,name:'Thapelo Chaba', location:'East Cape',status1:'checkin',status2:'checkout',indate:'01/11/2022',outDate:'05/11/2022',room:'Room A',status:'Booked', total:'R1849.00'
    },
    {
        id:6,name:'Moagi Mphahlele',location:'Limpopo, Polokwane',status1:'checkin',status2:'checkout',indate:'15/11/2022',outDate:'20/11/2022',room:'Room C',status:'Booked', total:'R2100.00'
    }
]
rooms=[{
    id:0,name:'room1',pic:l,button1:'Available',but:'Not Available'
},
    {
        id:1,name:'room2',pic:s
        ,button1:'Available',but:'Not Available'
    },
    {
        id:2,name:'room3',pic:w,button1:'Available',but:'Not Available'
    },
    {
        id:3,name:'room4',pic:o,button1:'Available',but:'Not Available'
    },
    {
        id:4,name:'room5',pic:z,button1:'Available',but:'Not Available'
    },
    {
        id:5,name:'room6',pic:a, button1:'Available',but:'Not Available'
    }
]
notifications=[{
    id:'0',name:'Montello Hotel App',time:'Yesterday 8:15',pic:q
},
    {
        id:'1',name:'New Booking Alert', time:' Today 10:45am',pic:y
    },
    {
        id:'2', name:'Booking Cancelled', time:'Today 14:30pm',pic:r
    },
    {
        id:'3',name:'Montello Hotel App',time:'Today 16:15',pic:q
    },
    {
        id:'4',name:'New Booking Alert',time:'Today 19:15',pic:b
    },
    {
        id:'5',name:'New Booking Alert',time:'Today 19:17',pic:c
    },
    {
        id:'6',name:'Montello Hotel App',time:'Today 20:15',pic:q
    },
]
registered=[{
    id:'0',name:'Hotel Sandton Sun'
},
{
    id:'1',name:'Sandton Star Hotel'
},
{
    id:'2',name:'Palms Hotel'
},
{
    id:'3',name:'Signature Luxury Hotel'
},
{
    id:'4',name:'RH Protea Hotel'
}
]
}
export default new Info()