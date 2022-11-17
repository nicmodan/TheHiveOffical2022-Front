import React, {useState} from "react";
import "./inc.css"
import {Row, Col} from "react-bootstrap"
import { FaBookmark, FaEdit} from "react-icons/fa";

const Items_list = (props) =>{

    const {val} = props

    const [styleBookMark, setStyleBookMark] = useState(true)
    const [viewEdit, setViewEdit] = useState(false)
    
    const styleBookWhite = {
        color: "#fcd5a1"
    }
    const styleBookBlack = {
        color: "#f79812"
    }
    const displayEdit = viewEdit ? "" : "none"
    const conditionStyleBookMark = ()=>{setStyleBookMark(!styleBookMark)}

    return(
        <Col sm={3} onMouseEnter={()=>setViewEdit(!viewEdit)} onMouseLeave={()=>setViewEdit(!viewEdit)}> 
            <div className="catlog-contain-item">
                <img src={val["image_links"][Object.keys(val["image_links"]).sort((a, b) => b - a)[0]]} alt={val["discription"]} />
                <div className="catlog-edit bookmark" onClick={conditionStyleBookMark}
                    style={styleBookMark?styleBookWhite:styleBookBlack}>
                    <FaBookmark />
                </div>
                <div className="catlog-edit edit" style={{display: displayEdit}}>
                    <FaEdit color="#5851db"/>
                </div>
                <div className="catlog-contain-item-info">
                    <h6>{val["type"].replace("and", " and ").replace("&", " & ").toUpperCase()}</h6>
                    <h6>{val["name"]}</h6>
                    <p>{val["discription"]}</p>
                    <p style={{"textAlign": "end", "paddingRight": 10, marginBottom: 10}}>
                        <b>
                            {val["cost"]}
                        </b>
                    </p>
                </div>
                
            </div>
        </Col>
       
    );
}

export default Items_list