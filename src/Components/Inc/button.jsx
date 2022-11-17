import React from "react"
import { Link } from "react-router-dom"
import "./inc.css"

const Button =({style, value, to})=>{
    
    return(
        <div className="button-style" style={style}>
            <Link to={to}>{value|| "name"}</Link>
        </div>
    )
}
export default Button