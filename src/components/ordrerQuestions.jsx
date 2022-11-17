import { useState } from "react";
// import { FloatingLabel } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
// import React, useState from "react"
import {image_url} from "./previewOrder"
import InputSize from "./input-size"
import { getHiveShipingOrders } from "../reducers/address&orders";

const QuestionsOfOrders = ()=>{

    const [displayColor, SetDisplayColor] = useState(undefined)
    const [size, setSize] = useState(undefined)
    const [sizeCount, setSizeCount] = useState(undefined)
    
    const orders = useSelector(state=>state.hiveShipingOrder)
    const dispatch = useDispatch()

    // const or
    // console.log(props)
    // console.log(orders)

    // const {firstName, lastName, email, phone, cityState, address, location} = orders
    // const {catlog, number, name, cost, images, img_url} = orders
    const {img_url} = orders

    // const SetDisplayColor ()
    const renderSize = () =>{
        const sizes = ["XS", "S", "M", "L", "X", "XL"]
        return sizes.map((val, idx)=>(
            <div key={idx} className="contain-preview-checkbox">
                <input type="checkbox" onClick={()=>setSize({val})} />
                <label>
                    {val}
                </label>
                <InputSize />
            </div>
        ))
    }

    return(
        <>
            <div className="spects-for-products-questions">
                <div className="spects-for-products-questions-info">
                    <div className="spects-for-products-questions-image-color">
                        <div className="spects-preview-products-images">
                            <div className="spects-preview-products-images-contain">
                                {img_url && <img src={img_url} className="spects-preview-products-img" alt="no preoducts selected" />}
                            </div>
                        </div>
                        <div className="spects-preview-products-color">
                            <form onSubmit={e=>e.preventDefault}>
                                <ul className="spects-preview-products-color-list">
                                    <li className="spects-preview-products-color-list-style">    
                                        <label className="spects-preview-products-color-list-style-container">
                                            Red
                                            <input type="radio" name="radio"/>
                                            <span onClick={e=>SetDisplayColor("red")}
                                                style={displayColor==="red"?{background: "red"}: {  backgroundColor: "whitesmoke"}} 
                                                className="checkmark">
                                            </span>
                                        </label>
                                    </li>
                                    <li className="spects-preview-products-color-list-style">    
                                        <label className="spects-preview-products-color-list-style-container">
                                            Blue
                                            <input type="radio" name="radio"/>
                                            <span onClick={e=>SetDisplayColor("blue")}
                                                style={displayColor==="blue"?{background: "blue"}: {  backgroundColor: "whitesmoke"}} 
                                                className="checkmark">
                                            </span>
                                        </label>
                                    </li>
                                    <li className="spects-preview-products-color-list-style">    
                                        <label className="spects-preview-products-color-list-style-container">
                                            Black
                                            <input type="radio" name="radio"/>
                                            <span onClick={e=>SetDisplayColor("black")}
                                                style={displayColor==="black"?{background: "black"}: {  backgroundColor: "whitesmoke"}} 
                                                className="checkmark">
                                            </span>
                                        </label>
                                    </li>
                                    <li className="spects-preview-products-color-list-style">    
                                        <label className="spects-preview-products-color-list-style-container">
                                            Green
                                            <input type="radio" name="radio"/>
                                            <span onClick={e=>SetDisplayColor("green")}
                                                style={displayColor==="green"?{background: "green"}: {  backgroundColor: "whitesmoke"}} 
                                                className="checkmark">
                                            </span>
                                        </label>
                                    </li>
                                    <li className="spects-preview-products-color-list-style">    
                                        <label className="spects-preview-products-color-list-style-container">
                                            White
                                            <input type="radio" name="radio" />
                                            <span onClick={e=>SetDisplayColor("white")}
                                                style={displayColor==="white"?{background: "white"}: {  backgroundColor: "whitesmoke"}} 
                                                className="checkmark">
                                            </span>
                                        </label>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                    <div className="spects-products-questions-contain">
                        <div className="spects-products-questions-size-contain-info">
                            <div className="spects-products-questions-size-contain-info-size-count">
                                <div className="spects-products-questions-size-contain-info-size-main">
                                    Size: 
                                </div>
                            </div>
                            <div className="spects-products-questions-size-contain-info-size-count">
                                <div className="spects-products-questions-size-contain-info-count-main">
                                    Order Count:
                                </div>
                            </div>
                        </div>
                        <div className="spects-for-products-questions-size">
                            <div className="spects-for-products-questions-size-contain">
                                {/* <div className="contain-preview-checkbox">
                                    <input type="checkbox" onClick={()=>setSize("XS")}/> */}
                                    {/* const [size, setSize] = useState(undefined)
                                    const [sizeCount, setSizeCount] */}
                                    {/* <label>
                                        XS
                                    </label>
                                    <InputSize />
                                </div>
                                <div className="contain-preview-checkbox">
                                    <input type="checkbox" onClick={()=>setSize("S")}/>
                                    <label>
                                        S
                                    </label>
                                    <InputSize /> */}
                                    {/* <input type="number" /> */}
                                {/* </div> */}

                                {renderSize()}
                                
                                {/* <div className="contain-preview-checkbox">
                                    <input type="checkbox" onClick={()=>setSize("M")}/>
                                    <label>
                                        M
                                    </label>
                                    <InputSize />
                                </div>
                                <div className="contain-preview-checkbox">
                                    <input type="checkbox" onClick={()=>setSize("L")}/>
                                    <label>
                                        L
                                    </label>
                                    <InputSize/>
                                </div>
                                <div className="contain-preview-checkbox">
                                    <input type="checkbox" onClick={()=>setSize("X")}/>
                                    <label>
                                        X
                                    </label>
                                    <InputSize/>
                                </div>
                                <div className="contain-preview-checkbox">
                                    <input type="checkbox" onClick={()=>setSize("Xl")}/>
                                    <label>
                                        XL
                                    </label>
                                    <InputSize/>
                                </div> */}
                            </div>
                        {/* XS, S, M, L,XL,X, XL */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QuestionsOfOrders