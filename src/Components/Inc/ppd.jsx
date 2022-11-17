import React from "react"
import { Row, Col } from "react-bootstrap";
import create from "../../Resources/create_img.png"
import sell from "../../Resources/sell_img.png"
import wehandel from "../../Resources/wehandel01.jpg"

const Ppd =()=>{
    const properties = [
        {
            type: "CREATE",
            images: create,
            name: "Custom products",
            info: "Easily and your designs to a wide range of products using our free tools."
        },
        {
            type: "SELL",
            images: sell,
            name: "On your terms",
            info: "You choose the products, sale price, and where to sell"
        },
        {
            type: "WE HANDLE",
            images: wehandel,
            name: "Fulfilment",
            info: "Once an order is placed, we automatically handle all the printing and delivery logistics."
        }
    ]
    return(
        <Row className="ppd-contain">
            {properties.map((val, idx)=>(
                <Col key={idx} sm={4} className="ppd-body">
                    <div className="ppd-body-img">
                        <img src={val["images"]} alt={val["name"]} />
                    </div>
                    <h5 style={{"color": "yellow"}} >{val["type"]}</h5>
                    <h5>{val["name"]}</h5>
                    <p>{val["info"]}</p>
                </Col>
            ))}
            
        </Row>
    )
}

export default Ppd