import React from "react";
import "./inc.css";
import { Link } from "react-router-dom";

const CatlogBanner = ({name}) =>{
    return(
        <div className="catlog-banner-name">
            <h4>{name}</h4>
            <div className="catlog-banner-name-links">
                <Link to={'/'}>{`See All ${name}`}</Link>
            </div>
        </div>
    );
}

export default CatlogBanner