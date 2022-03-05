import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Icon, Input } from 'react-native-elements'
import { Formik } from 'formik'
import * as Yup from 'yup'


const PaymentMethod = ({ navigation, route }) => {
  const [email, setEmail] = useState('')
  const [fullname, setName] = useState('')
  const [cvv, setCVV] = useState('')
  const [number, setNumber] = useState('')
  const [payment, setPayment] = useState([])
  const [date,setDate] = useState(new Date())
  const { hotelname, Totalprice, Roomname, Guestnumber, dateIn, dateOut, roomNo, location, image, roomId } = route.params

  console.log(Totalprice)
  const NewMethod = () => {
    setPayment([...payment, {
      id: payment.length + 1,
      email: email,
      name: fullname,
      number: number,
      cvv: cvv
    }])
    console.log('data payment',payment)
  }
  const Validate = Yup.object({
    email: Yup.string().email('Enter correct email format').required('Required'),
    fullname: Yup.string().required('Required'),
    number: Yup.string().required('Required').max(16,'invalid'),
    cvv: Yup.string().required('Required').max(3,'Not more than 3 numbers')
  })

  return (
    <>
      <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
        <View style={Styles.header}>
          <Icon name={'arrow-back'} color={'#C4C4C4'} style={{ fontWeight: '700', marginTop: '20%' }} onPress={() => navigation.goBack()} />
          <Text style={Styles.textHead}>Payment</Text>

        </View>
        <Formik
          initialValues={{
            email: '',
            fullname: '',
            number: '',
            cvv: ''
          }}
        
        validateOnMount={true}
        validationSchema={Validate}
        onSubmit={(values)=>{
          NewMethod(values.cvv,values.email,values.fullname,values.number);
          navigation.navigate('paymentmethod', {
            email :values.email,
            name:values.fullname,
            number:values.number,
          cvv:values.cvv,
            roomPrice:Totalprice,
            guests:Guestnumber,
            Room:Roomname,
            hotelname:hotelname,
            dateIn:dateIn,
            dateOut:dateOut,
            rooms:roomNo,
            location:location,
            hotelImage:image,
            roomId:roomId
          })
        }
         }
           >
        {({ errors, handleChange, handleSubmit, handleBlur, touched, values }) => (
          <View>
            <View style={{ marginTop: '20%' }}>
              <Input
                placeholder={'Full Name'}
                leftIcon={<Icon name={'user'} type={'font-awesome-5'} size={30} color={'#6DA399'} />}
                style={Styles.textbox}
                value={values.fullname}
                onChangeText={handleChange('fullname')}
          
              />
                {errors.fullname && touched.fullname ? (
                <Text style={Styles.error}>{errors.fullname}</Text>
              ) : null}
              <Input
                placeholder={'Email'}
                leftIcon={<Icon name={'at'} type={'font-awesome-5'} size={30} color={'#6DA399'} />}
                style={Styles.textbox}
                value={values.email}
                onChangeText={handleChange('email')}
                keyboardType={'email-address'}
              />
                {errors.email && touched.email ? (
                <Text style={Styles.error}>{errors.email}</Text>
              ) : null}
              <Input
                placeholder={'Card Number'}
                leftIcon={<Icon name={'credit-card'} type={'font-awesome-5'} size={30} color={'#6DA399'} />}
                style={Styles.textbox}
                value={values.number}
                onChangeText={handleChange('number')}
                keyboardType={'number-pad'}
              />
                {errors.number && touched.number ? (
                <Text style={Styles.error}>{errors.number}</Text>
              ) : null}
            <Input
                placeholder={'CVV'}
                leftIcon={<Icon name={'id-card'} type={'font-awesome-5'} size={30} color={'#6DA399'} />}
                style={Styles.textbox}
                value={values.cvv}
                onChangeText={handleChange('cvv')}
                keyboardType={'number-pad'}
              />
              {errors.cvv && touched.cvv ? (
                <Text style={Styles.error}>{errors.cvv}</Text>
              ) : null}
            </View>
            <TouchableOpacity style={{ width: '80%', height: 65, borderColor: '#61B0A2', borderWidth: 4, borderRadius: 40, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: '10%' }} 
       onPress={handleSubmit}
            ><Text style={{ color: '#61B0A2', fontSize: 24 }}>Save</Text></TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
        </>
    )
}
const Styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    padding: '2%',
    marginTop: '10%',
  },
  error: {
    color: "red",
    padding: "2%",
    fontSize: 11,
  },
  textHead: {
    color: '#1C5248',
    fontSize: 28,
    paddingLeft: '10%',
    fontWeight: '600',
    marginTop: '-2%'

  },
  textbox: {
    margin: '2%',
    backgroundColor: '#FFFFFF',

  },
  picker: {
    width: 350,
    // backgroundColor: '#FFFFFF',
    margin: '1%',
    marginLeft: '3%',
    marginBottom: '2%',
    height: 50,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    fontSize: 25,

  },
})
export default PaymentMethod