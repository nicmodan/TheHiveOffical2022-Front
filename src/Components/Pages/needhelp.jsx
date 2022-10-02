import React from "react"
import "./pages.css"
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const NeedHelp = ()=>{
    const loc = useParams().id
    return(
        <Container>
            <h1>Need help</h1> 
            <h1>{loc}</h1>
        </Container>
    );
}

export default NeedHelp