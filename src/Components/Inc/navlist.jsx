import React from "react";
import { NavDropdown, Col } from "react-bootstrap";


const Navlist = ({listObj, keyType})=>{
    if(keyType !== "otherTypes"){

        return(
            // mapping of the catigoreies
            <Col xs={12} sm={2}>
                <ul>
                    <li className="dropdown-header">
                        <div className="menu-icon-wrapper">
                            <div>
                                <NavDropdown.Item href={`#${keyType}`} style={{paddingLeft: 0}}>
                                    <b>{keyType}</b>
                                </NavDropdown.Item>
                            </div>
                        </div>
                    </li>
                    {/* mapping types and links */}
                        {listObj.map((val, idx)=>
                            <li key={idx} className="job-sub-tabs">
                                <NavDropdown.Item href={val.link}>
                                    {val.type}
                                </NavDropdown.Item>
                            </li>
                        )
                        }
                </ul>
            </Col>
        )

    }else{
        
        return(
            
            // mapping of the others catalog
            <Col xs={12} sm={2}>
                
                <ul>
                    {
                        listObj.map(val=>
                            
                            Object.keys(val).map((keys, idx)=>(
                                <div key={idx}>
                                
                                    {val[keys].map( (v, j)=>(

                                        
                                            // const k = Object.keys(v)
                                            <li className="dropdown-header " key={j}>
                                            
                                                <div className="menu-icon-wrapper">

                                                    <div>
                                                        <NavDropdown.Item href={v[Object.keys(v)[1]]}>
                                                            <b>{v[Object.keys(v)[0]]}</b>
                                                        </NavDropdown.Item>
                                                    </div>

                                                </div>
                                                
                                            </li>
                                            
                                    )
                                    )}
                                    <hr />
                                </div>
                            )
                            )   
                            

                        )
                    }
                </ul>

            </Col>
        )
    }
}

export default Navlist