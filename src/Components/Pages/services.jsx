import React from "react"
import "./pages.css"
import {Container} from "react-bootstrap"
import { useParams } from "react-router-dom";

const Services = ()=>{
    const loc = useParams().id
    return(
        <Container>
            <h1>Services</h1> 
            <h1>{loc}</h1>
        </Container>
    )
}

export default Services