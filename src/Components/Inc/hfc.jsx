import React from "react";
import "./inc.css"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Col, Row } from "react-bootstrap";

const Hfc = () =>{
    const catloglues = useSelector(state=>state.catlog)
    
    return(
        <>
            <Row className="hfc_name_links">
                <Col sm={6} className="hfc_links">
                    <h4>Feature Collections</h4>
                </Col>
                <Col sm={6} className="hfc_name">
                    <Link to={"/Catalog"}>
                        <p>View All</p>
                    </Link>
                </Col>
            </Row>
            <Row className="home-feature-collection">
                <Col sm={6} >
                    {catloglues[12]&& <div 
                                        className="contain-hfc"
                                        style={{"background": `url(${catloglues[12]["image_links"]["front"]})`}}>
                        {/* {catloglues[12]&&<img src={catloglues[12]["image_links"]["front"]} />} */}
                        <span>
                            <h4>
                                {catloglues[12]["name"]}
                            </h4>
                            <p>
                                {catloglues[12]["discription"]}
                            </p>
                        </span>
                    </div>}
                    {/* hello wolrd */}
                </Col>
                <Col sm={6} >
                     <Row className="contain-hfc-fbc">
                        <Col sm={12}>
                            {/* female */}
                            {catloglues[50]&& <div 
                                        className="contain-hfc-fbc-body"
                                        style={{"background": `url(${catloglues[50]["image_links"]["front"]})`,
                                                "backgroungPosition": "center",
                                                "backgroungRepeat": "no-repeat",
                                                "backgroundSize": "cover"}}>
                                {/* {catloglues[12]&&<img src={catloglues[12]["image_links"]["front"]} />} */}
                                <span>
                                    <h4>
                                        {catloglues[50]["name"]}
                                    </h4>
                                    <p>
                                        {catloglues[50]["discription"]}
                                    </p>
                                </span>
                            </div>}
                        </Col>
                        <Col sm={6}>
                            {catloglues[56]&& <div 
                                            className="contain-hfc-fbc-body"
                                            style={{"background": `url(${catloglues[56]["image_links"]["front"]})`,
                                                    "backgroungPosition": "center",
                                                    "backgroungRepeat": "no-repeat",
                                                    "backgroundSize": "cover"}}>
                                    {/* {catloglues[12]&&<img src={catloglues[12]["image_links"]["front"]} />} */}
                                    <span>
                                        <h6>
                                            {catloglues[56]["name"]}
                                        </h6>
                                        <p>
                                            {catloglues[56]["discription"]}
                                        </p>
                                    </span>
                            </div>}
                            {/* bag */}
                        </Col>
                        <Col sm={6}>
                            {catloglues[27]&& <div 
                                            className="contain-hfc-fbc-body"
                                            style={{"background": `url(${catloglues[27]["image_links"]["front"]})`,
                                                    "backgroungPosition": "center",
                                                    "backgroungRepeat": "no-repeat",
                                                    "backgroundSize": "cover"}}>
                                    {/* {catloglues[12]&&<img src={catloglues[12]["image_links"]["front"]} />} */}
                                    <span>
                                        <h6>
                                            {catloglues[27]["name"]}
                                        </h6>
                                        <p>
                                            {catloglues[27]["discription"]}
                                        </p>
                                    </span>
                            </div>}
                            {/* cup */}
                        </Col>
                    </Row>
                    {/* hello wolrd */}
                </Col>
            </Row>
        </>
    )
}

export default Hfc