import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHiveShipingOrders } from '../reducers/address&orders';

const Address = (props) =>{
  const {callback} = props
  const dispatch = useDispatch()
  const state = useSelector(state=>state.hiveShipingOrder)
  // const [number, setNumber] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address,setAddress] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [cityState, SetCityState] = useState("")
  
  callback(
    firstName,
    lastName,
    email,
    phone,
    cityState,
    address
  )

  // const setDispatch()=>{
  //   // dispatch(getHiveShipingOrders)  
  //   return;    
  // }

  return(
    <div className="continer-body-info-form-address-body">
      {/* <div>Hello 👋🏽, Please File the Required Form</div> */}
       <div style={{marginTop: 5}}>
          <div className='design-select-label'>
            First Name
          </div>
          <input type="text" placeholder='First Name' onChange={e=>setFirstName(e.target.value)} value={firstName} 
                  className='input-address-type'>
          </input>      
        </div>
        <div style={{marginTop: 5}}>
          <div className='design-select-label'>
            Last Name
          </div>
          <input type="text" placeholder='Last Name' onChange={e=>setLastName(e.target.value)} value={lastName} 
                  className='input-address-type'>
          </input>      
        </div>
        <div style={{marginTop: 5}}>
          <div className='design-select-label'>
           Email
          </div>
          <input type="email" placeholder='example@example.com' onChange={e=>setEmail(e.target.value)} value={email} 
                  className='input-address-type'>
          </input>      
        </div>
        <div style={{marginTop: 5}}>
          <div className='design-select-label'>
            Phone Number
          </div>
          <input type="text" placeholder='Phone Number' onChange={e=>setPhone(e.target.value)} value={phone} 
                  className='input-address-type'>
          </input>      
        </div>
        <div style={{marginTop: 5}}>
          <div className='design-select-label'>
            Location 
          </div>
          <input type="text" placeholder='Address' onChange={e=>setAddress(e.target.value)} value={address} 
                  className='input-address-type'>
          </input>      
        </div>
        <div style={{marginTop: 5}}>
          <div className='design-select-label'>
            City/State
          </div>
          <input type="text" placeholder='City/State' onChange={e=>SetCityState(e.target.value)} value={cityState} 
                  className='input-address-type'>
          </input>      
        </div>
    </div>
  );
}
export default Address