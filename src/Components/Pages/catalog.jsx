import React, {useEffect} from "react";
import "./pages.css"
import { Container, Row, Col} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Banner from "../../Resources/thehiveBanner.png"
import Button from "../Inc/button";
// import { getAnyAmountItems } from "../../reducers/thehivecatlogreducer";
import { useSelector, useDispatch } from "react-redux";
import Items_list from "../Inc/items";
import CatlogBanner from "../Inc/catlogBanner";
import Banner01 from "../../Resources/thehivecatlogbanner02.png"
import ListTypeCatlog from "../Inc/list_type_catalog";
import { getAnyAmountItems } from "../../reducers/queryReducres";

const Catalog = () =>{

    
    const state = useSelector(state=>state.catlog)
    const state04 = getAnyAmountItems(state, 4)
    // Male state selection
    const maleState = state.length < 0? []:
                        state.filter(val=>val["type"]==="male")
    const maleState04 = maleState.length < 0? []: getAnyAmountItems(maleState, 4)
    // Male state selection

    // Male state selection

    // Male state selection
    // Male state selection
    // const catigori = useParams().id
    const button_style = {
        width: 140,
        height: 45
    }

    return(
        <Container>
            <Row className={"searchBar-contain"}>
                <Col>
                    <div className="searchBar-Main">
                        <FaSearch />
                        <input type="text"  placeholder="Search" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="catlog-banner-contain">
                    <div className="catlog-banner">
                        <h2>The Hive Products's Catalogs</h2>
                        <div className="catlog-banner-body">
                            <img src={Banner} alt="The hive banner image" />
                            <div className="catlog-banner-info">
                                <h1>The Hive Platform</h1>
                                <p>Select, Designe and Earn Of The Hive</p>
                                
                                <Button style={button_style} value="Start Design" />
                               
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <CatlogBanner name="Random Pickes" />
            <Row>
                {state04[0] && state04.map((val, idx)=>(
                    <Items_list key={idx} val={val} />
                ))}
            </Row>
            <div className="catlog-banner-printing-provider">
                <img src={Banner01} alt="banner Image" />
                <div className="catlog-banner-printing-provider-info">
                    <h3>Print Provdiers</h3>
                    <p>The Hive is Nigerian Top Drop Shiping Platform</p>
                    <Button style={{width: 250, height: 45}} value="See Printing Providers" />
                </div>
            </div>
            {/* <Row> */}
                <ListTypeCatlog />
            {/* </Row> */}
            <CatlogBanner name="Male Pickes" />
            <Row>
                {maleState04[0] && maleState04.map((val, idx)=>(
                    <Items_list key={idx} val={val} />
                ))}
            </Row>
        </Container>
    );
}

export default Catalog