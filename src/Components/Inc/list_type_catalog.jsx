import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { inistalizeNote } from "../../reducers/thehivecatlogreducer";
import "./inc.css"
import { Row, Col } from "react-bootstrap";
import mansCLothing from "../../Resources/mansClothing.jpg"
import womanCLothing from "../../Resources/womanClothing.jpg"
import childCLothing from "../../Resources/childclothing.jpg"
import homanddecors from "../../Resources/home&deco.png"
import myFavorites from "../../Resources/myFavorites.png"
import accessories from "../../Resources/accessories.png"

const ListTypeCatlog = () =>{
    const clothing_images = [
        {
            Name:"Men Clothing",
            Image: mansCLothing
        },
        {
            Name:"Women Clothing",
            Image: womanCLothing
        },
        {
            Name:"kids Clothing",
            Image: childCLothing
        },
        {
            Name:"Accessories",
            Image: accessories
        },
        {
            Name:"Home and Decors",
            Image: homanddecors
        },
        {
            Name:"Favorites",
            Image: myFavorites
        },
        
    ]
    const state = useSelector(state=>state.catlog.length>0?state.catlog:{})

    console.log(state[30])
    // const style = 
    
    return (<Row>
                {
                    clothing_images.map((val, idx)=>(
                        <Col key={idx} sm={4} style={{
                            marginBottom: 20
                        }}>
                            
                            
                                
                                    <Link to={`#${val["Name"]}`}>
                                        <div className="list-type-catlog-container" >
                                            <div className="list-type-catlog-container-info">
                                                <h5>{val["Name"]}</h5>
                                            </div>
                                            <img src={val["Image"]} alt={`images of a ${val["Name"]} clothings`} />
                                        </div>
                                    </Link>
                                
                    
                        </Col>
                        ))
                }
            </Row>)
        ;
}
export default ListTypeCatlog