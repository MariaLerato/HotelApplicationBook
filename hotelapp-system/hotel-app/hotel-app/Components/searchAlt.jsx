import React from 'react';
import {img,navbars} from './gallery/reusables'

class SearchAlt{
    hotels=[{
        id:'0',hotelname:' Hotel Sandton Sun',image:img.sand,review:'109 Reviews',latitude:-26.358055,longitude:27.398056,location:'Sandton',province:'Gauteng',nav:navbars.sandton
   },   {id:'1',hotelname:'Palms Hotel',review:'200 Reviews',latitude:-26.358055,longitude:27.398056,location:'Pretoria',province:'Gauteng',image:require('../assets/hotel1.png'),nav:navbars.pretoria},
     //    {id:'2',hotelname:'Sandton Star Hotel',review:'19 Reviews',latitude:-26.358055,longitude:27.398056,location:'Sandton',province:'Gauteng',image:require('../assets/hotel1.png'),nav:navbars.sandton},    
        {id:'2',hotelname:'Luxury Hotel',review:'109 Reviews',latitude:-26.358055,longitude:27.398056,location:'Johannesburg',province:'Gauteng',image:require('../assets/hotel1.png'),nav:navbars.jhb},
        {id:'3',hotelname:'Park Hotel',review:'109 Reviews',latitude:-26.358055,longitude:27.398056,location:'Polokwane',province:'Limpopo',image:img.limpopo,nav:navbars.limpopo},
     //    {id:'5',hotelname:'Sheranton Hotel',review:'109 Reviews',latitude:-26.358055,longitude:27.398056,location:'Pretoria',province:'Gauteng',image:require('../assets/hotel1.png'),nav:navbars.pretoria},
     //    {id:'6',hotelname:'Protea Hotel',review:'109 Reviews',latitude:-26.358055,longitude:27.398056,location:'Pretoria',province:'Gauteng',image:require('../assets/hotel1.png'),nav:navbars.pretoria},
     //    {
     //        id:'7',hotelname:'Signature Lux Hotel',review:'350 Reviews',latitude:-26.358055,longitude:27.398056,location:'Johannesburg',province:'Gauteng',image:require('../assets/hotel1.png'),nav:navbars.jhb
     //   },   {id:'8',hotelname:'Maslow Hotel',review:'250 Reviews',latitude:-26.358055,longitude:27.398056,location:'Sandton',province:'Gauteng',image:require('../assets/hotel1.png'),nav:navbars.sandton},
            {id:'4',hotelname:'Palms Hotel',review:'20 Reviews',latitude:-26.358055,longitude:27.398056,location:'Venda',province:'Limpopo',image:img.venda,nav:navbars.venda},
          //   {id:'10',hotelname:'RH Protea Hotel',review:'250 Reviews',latitude:-26.358055,longitude:27.398056,location:'Polokwane',province:'Limpopo',image:require('../assets/hotel1.png'),nav:navbars.plk},
   ]
   nearby=[{
        id:'0',hotelname:' Hotel Sandton Sun',image:img.sand,price:'R2033',state:'Night',location:'Sandton',province:'Gauteng'
   },
   {id:'1',hotelname:'Park Hotel',image:img.limpopo,review:'96 Reviews',latitude:-26.358055,longitude:27.398056,location:'Polokwane',province:'Limpopo',price:'R1500.00',state:'Night',},
   {id:'2',hotelname:'Sheranton Hotel',image:require('../assets/sheranton.png'),review:'30 Reviews',latitude:-26.358055,longitude:27.398056,location:'CapeTown',province:'Eastern Cape',price:'R870.00',state:'Night',},

]
}
export default new SearchAlt()
