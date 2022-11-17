import React, {useState} from "react";
import { Button, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ButtonHover =({icons, alt, val, info})=>{
    const [displayCardInfo, setDisplayCardInfo] = useState(false)
    const carhoverStyel = {
        "visibility": displayCardInfo? "visible": "hidden",
        "opacity": 1
    }
    return(
        <Col className="purposeofwebapp-body" sm={4}>
            <div className="purposeofwebapp">
                <Button style={{"borderRadius": 1}}
                    onMouseOver={()=>setDisplayCardInfo(true)} 
                    onMouseOut={()=>setDisplayCardInfo(false)}
                    // onClick={()=>setDisplayCardInfo(!displayCardInfo)}
                    variant="outline-dark" 
                    className="card-info">

                    <FontAwesomeIcon icon={icons} alt={alt} 
                        style={{"fontSize": 25, "paddingRight": 5,
                        "paddingTop": 3}}/>
                    <h3> {val.replace("_", " ").toUpperCase()} </h3>
                </Button>
                <div className="card-hover-info" style={carhoverStyel}>
                    <p>
                    {info}
                    </p> 
                </div>
                
            </div>
        </Col>
    )
}

export default ButtonHover