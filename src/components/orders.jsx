// // import React, {useE} from 'react';
// import '../App.css';
// import { Container, Row, Col, Button} from 'react-bootstrap';
// // import Logo from "./Resouces/HIVELOGO(2).png"
// import React, {useState, useEffect} from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { initalizeState } from './reducers/getProducts';
// import {CiBookmark} from 'react-icons/ci';
// import getGeoLocation from '../services/getGeoLocation';
// import ReactCountryFlag from "react-country-flag"

// function App() {
//   const dispatch = useDispatch()
//   const state = useSelector(state=>state.getProducts)

//   const [catlog, setCatlog] = useState("")
//   const [number, setNumber] = useState("")
//   const [name, SetName] = useState("")
//   const [discription, setDiscription] = useState("")
//   const [cost, setCost] = useState("")
//   const [location, setLocation] = useState({})

 

//   const viewSelection = {display: catlog===""?"":"none"}
//   const viewSelectionInfo = {display: catlog===""?"none":""}
//   // console.log(state)
//   const list = ["t-shirt", "tank_tops", "hoodies_and_sweatshirt", "bottoms", "long_sleeve"]
//   const manu_list = ["t-shirt", "tank_tops", "hoodies_and_sweatshirt", "bottoms", "long_sleeve"].map(val=>{
//     return state.filter(list=>list["catlog"]===val)
//   })
//   // console.log(manu_list)

//   const manu_filter = manu_list.map((val, idx)=>val.filter( v=>v["catlog"] === catlog ))
//   console.log(manu_filter)
  

//   const setOrder = (e) =>{

//     setDiscription(e.target.value)

//     const filterdCost = manu_filter[list.indexOf(catlog)].filter(target=>target['discription'] === e.target.value)
//     const result = filterdCost[0]["cost"]
//     setCost(result)

//   }

//   useEffect(()=>{

//     dispatch(initalizeState())

//   }, [dispatch])

//   return (
//     <Container fluid className="continer-body css-selector">
//       <Row style={{
//         height: "100%"
//       }}>
//         <Col sm={6} className="continer-body-img">
//           <img src={Logo}  alt="HIVE LOGO" />
//         </Col>
//         <Col sm={6}  className="continer-body-info">
//           <div className='location-position'>
//             {" "}
//             <ReactCountryFlag
//                     countryCode={location.country_code}
//                     svg
//                     style={{
//                         width: '2em',
//                         height: '2em',
//                     }}
//                     title={location.country_code}
//             />
//             {"  "}
//             {location.country_name}

//           </div>
//           <div className='continer-body-info-form'>
//               <div style={viewSelection} className={`continer-body-info-form-select`}>
//                 <div>Hello 👋🏽, Please Choose What You wold like to Print</div>
//                 <select onChange={e=>setCatlog(e.target.value)} value={catlog} 
//                   className='select-product-type'>
//                   <option defaultValue>Select Your Items</option>
//                   <option value="t-shirt">T-Shirt</option>
//                   <option value="tank_tops">Tank Top</option>
//                   <option value="hoodies_and_sweatshirt">Hoodies and Sweatshirt</option>
//                   <option value="bottoms">Bottoms</option>
//                   <option value="long_sleeve">Long Sleeve</option>
//                 </select>
//               </div>
//               <div style={viewSelectionInfo} className={`continer-body-info-form-checking`}>

//                 <div className={`continer-body-info-form-checking-cost`}>
//                    <CiBookmark className="continer-body-info-form-checking-cost-svg"/>
//                    <div className='continer-body-info-form-checking-cost-info'>
//                     <h5>{cost}</h5>
//                    </div>
//                 </div>
             
//                 <div style={{paddingBottom: 10}}>Hello 👋🏽, Please Choose What You wold like to Print</div>
//                   <div>
//                     <select onChange={e=>setCatlog(e.target.value)} value={catlog} 
//                       className='select-product-type'>
//                       <option defaultValue>Select Your Items</option>
//                       <option value="t-shirt">T-Shirt</option>
//                       <option value="tank_tops">Tank Top</option>
//                       <option value="hoodies_and_sweatshirt">Hoodies and Sweatshirt</option>
//                       <option value="bottoms">Bottoms</option>
//                       <option value="long_sleeve">Long Sleeve</option>
//                     </select>
//                   </div>
//                   <div>
//                     <div className='design-select-label'>
//                       Name
//                     </div>
//                     <select onChange={e=>SetName(e.target.value)} value={name} 
//                             className='select-product-type'>
//                         <option defaultValue>Select Product Name</option>
                      
//                         {
//                           manu_filter[list.indexOf(catlog)] && manu_filter[list.indexOf(catlog)].map((val, idx)=>{
//                             return <option key={idx} value={val["name"]}>{val["name"]}</option>
//                           })
//                         }

//                     </select>
//                   </div>
//                   <div>
//                     <div className='design-select-label'>
//                       Discription
//                     </div>
//                     <select onChange= {setOrder} value={discription} 
//                             className='select-product-type'>
//                         <option defaultValue>Select Products Discription</option>
                      
//                         {
//                           manu_filter[list.indexOf(catlog)] && manu_filter[list.indexOf(catlog)].map((val, idx)=>{
//                             // discription, setDiscription
//                             return <option key={idx} value={val["discription"]}>{val["discription"]}</option>
//                           })
//                         }

//                     </select>
//                   </div>
//                   <div>
//                     <div className='design-select-label'>
//                       Number Of Order
//                     </div>
//                     <input type="text" placeholder='0 orders' onChange={setNumber} value={number} 
//                             className='input-product-type'>
//                     </input>
//                   </div>
//                   <div>
//                     <div className='design-select-label'>
//                       Images
//                     </div>
//                     <input className="design-select-label-image-input" type="file" name="image" accept=".png, .jpg, .jpeg" />
//                   </div>

//                   <div className='design-select-label-button'>
//                     <Button variant="outline-warning">Place Order</Button>
//                   </div>

//               </div>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default App;
