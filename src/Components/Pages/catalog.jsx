import React from "react";
import "./pages.css"
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Catalog = () =>{
    const catigori = useParams().id
    return(
        <Container role={'main'}>
            <h1>Catalog</h1>
            <h1>{catigori}</h1>
        </Container>
    );
}

export default Catalog