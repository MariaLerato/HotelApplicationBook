import React from 'react';
import {img,navbars} from './gallery/reusables'


class Info {
     info=[
         {
        id:'0', email: 'fenyane02@gmail.com',name:'Maria',surname:'Fenyane',username:'@fenyane02',img:require('../assets/users.jpeg')
     },
    
]
hotels=[{
     id:'0',hotelname:' Hotel Sandton Sun',image:img.sand,review:'109 Reviews',latitude:-26.358055,longitude:27.398056,description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,',nav:navbars.gauteng
},   {id:'1',hotelname:'Sandton Star Hotel',image:img.limpopo,review:'19 Reviews',latitude:-26.358055,longitude:27.398056,description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,'},
     {id:'2',hotelname:'Palms Hotel', nav:navbars.gauteng, image:require('../assets/palm.png'),review:'200 Reviews',latitude:-26.358055,longitude:27.398056,description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,'},
     {id:'3',hotelname:'Luxury Hotel',image:require('../assets/RHP.png'),review:'109 Reviews',latitude:-26.358055,longitude:27.398056,description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,'},
     {id:'4',hotelname:'Hotel @ Hatfield',image:require('../assets/sandton.png'),review:'109 Reviews',latitude:-26.358055,longitude:27.398056,description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,'},
     {id:'5',hotelname:'Sheranton Hotel',image:require('../assets/sheranton.png'),review:'109 Reviews',latitude:-26.358055,longitude:27.398056,description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,'},
     {id:'6',hotelname:'Protea Hotel',image:require('../assets/protea.png'),review:'109 Reviews',latitude:-26.358055,longitude:27.398056,description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,'},
]
results=[
     {
          id:'0',hotelname:' Hotel Sandton Sun',image:require('../assets/sun.png'),location:'Corner Alice Lane',price:'R2033',state:'Night',
     },   
       
]
pretoria =[{
     id:'0',hotelname:'Hotel @ Hatfield',image:require('../assets/pretoria.png'),review:'100 Reviews',latitude:-26.358055,longitude:27.398056,description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,',nav:navbars.pretoria
},   {id:'1',hotelname:'RH Protea Hotel',image:require('../assets/hotel1.png'),review:'250 Reviews',latitude:-26.358055,longitude:27.398056,description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,',nav:navbars.pretoria},
     {id:'2',hotelname:'Maslow Hotel',image:require('../assets/maslow.png'),review:'20 Reviews',latitude:-26.358055,longitude:27.398056,description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,',nav:navbars.pretoria},
     {id:'3',hotelname:'Protea Luxury Hotel',image:require('../assets/lux.png'),review:'106 Reviews',latitude:-26.358055,longitude:27.398056,description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,',nav:navbars.pretoria},
     {id:'4',hotelname:'Hotel @ Hatfield',image:require('../assets/sandton.png'),review:'96 Reviews',latitude:-26.358055,longitude:27.398056,description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,',nav:navbars.pretoria},
     {id:'5',hotelname:'Sheranton Hotel',image:require('../assets/sheranton.png'),review:'30 Reviews',latitude:-26.358055,longitude:27.398056,description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,',nav:navbars.pretoria},
]
jbh =[{
     id:'0',hotelname:'Signature Lux Hotel',image:require('../assets/lux.png'),review:'350 Reviews',latitude:-26.358055,longitude:27.398056,description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,',nav:navbars.jhb
},   {id:'1',hotelname:'Maslow Hotel',image:require('../assets/maslow.png'),review:'250 Reviews',latitude:-26.358055,longitude:27.398056,description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,'},
     {id:'2',hotelname:'Palms Hotel',image:require('../assets/palm.png'),review:'20 Reviews',latitude:-26.358055,longitude:27.398056,description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,'},
     {id:'3',hotelname:'Protea Luxury Hotel',image:require('../assets/lux.png'),review:'106 Reviews',latitude:-26.358055,longitude:27.398056,description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,'},
     {id:'4',hotelname:'Hotel @ Hatfield',image:require('../assets/sandton.png'),review:'96 Reviews',latitude:-26.358055,longitude:27.398056,description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,'},
     {id:'5',hotelname:'Sheranton Hotel',image:require('../assets/sheranton.png'),review:'30 Reviews',latitude:-26.358055,longitude:27.398056,description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,'},
]
plk =[{
     id:'0',hotelname:'Polokwane Suits',image:img.limpopo,review:'350 Reviews',latitude:-26.358055,longitude:27.398056,description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,',nav:navbars.room
},   {id:'1',hotelname:'Park Hotel',image:require('../assets/maslow.png'),review:'250 Reviews',latitude:-26.358055,longitude:27.398056,description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,',nav:navbars.room},
     {id:'2',hotelname:'Palms Hotel',image:require('../assets/palm.png'),review:'20 Reviews',latitude:-26.358055,longitude:27.398056,description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,',nav:navbars.room},
     {id:'3',hotelname:'Geneva Hotel',image:require('../assets/lux.png'),review:'106 Reviews',latitude:-26.358055,longitude:27.398056,description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,',nav:navbars.room},
     {id:'4',hotelname:'Hotel @ Hatfield',image:require('../assets/sandton.png'),review:'96 Reviews',latitude:-26.358055,longitude:27.398056,description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,',nav:navbars.room},
     {id:'5',hotelname:'Sheranton Hotel',image:require('../assets/sheranton.png'),review:'30 Reviews',latitude:-26.358055,longitude:27.398056,description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,',nav:navbars.room},
]
venda =[{
     id:'0',hotelname:'Marina Hotel',image:img.venda,review:'350 Reviews',latitude:-26.358055,longitude:27.398056,description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,',nav:navbars.room
},   {id:'1',hotelname:'Maslow Hotel',image:require('../assets/maslow.png'),review:'250 Reviews',latitude:-26.358055,longitude:27.398056,description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,',nav:navbars.room},
     {id:'2',hotelname:'Palms Hotel',image:require('../assets/palm.png'),review:'20 Reviews',latitude:-26.358055,longitude:27.398056,description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,',nav:navbars.room},
     {id:'3',hotelname:'Protea Luxury Hotel',image:require('../assets/lux.png'),review:'106 Reviews',latitude:-26.358055,longitude:27.398056,description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,',nav:navbars.room},
]
notify=[{
     id:'0',hotelname:'Signature Lux Hotel',image:require('../assets/lux.png'),message:'Your room is ready, you can go to the hotel to check in at the hotel.Please notify if you wish to cancel the booking on time'
},   {id:'1',hotelname:'Maslow Hotel',image:require('../assets/maslow.png'),message:'Your booking was successfully cancelled.You can check special offers....'},
     {id:'2',hotelname:'Signature Lux Hotel',image:require('../assets/lux.png'),message:'Payment Successful. Your booking is currently being processed'},
     {id:'3',hotelname:'Protea Luxury Hotel',image:require('../assets/lux.png'),message:'Special Deals this christmas holidays, book now before we reach our maximum'},
     {id:'4',hotelname:'Hotel @ Hatfield',image:require('../assets/sandton.png'),message:'Check out date fast approaching, you can choose to extend you stay with us'},
     {id:'5',hotelname:'Montello ',image:require('../assets/SplashImage.png'),message:'Profile successfully updated'},
]
bookings=[{
     id:'0',location:'Lebowakgomo',rooms:'4',guests:'2'
}]
}
export default new Info();