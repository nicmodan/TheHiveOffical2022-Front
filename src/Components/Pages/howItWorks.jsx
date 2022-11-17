import React from "react";
import "./pages.css"
import {Container, Row, Col} from "react-bootstrap"
import Button from "../Inc/button";
import PricingPlan from "../Inc/prcing-plan";
import banner from "../../Resources/thehivecatlogbanner02.png"

// import resoureces.
import pick from "../../Resources/the-hive-pick.gif"
import publish from "../../Resources/the-hive-publish.gif"
import relax from "../../Resources/the-hive-relax.gif"
import sample from "../../Resources/the-hive-sample.gif"
import select from "../../Resources/the-hive-select.gif"

const HowItWorks = () =>{
    const buttony_style = {
        background: "#e6a837",
        height: 40,
        borderRadius: 2,
    }
    const steps = [
        {
            gif: select,
            information:
                {
                type: "Pick",
                info: "Our categories as over 500 products such as t-shirts, mugs, sucks and home accessories ready for you to customize. Pick the most the suitable product for your business based on prints provider locations, fulfilments time and pricing. "
                }
        },
        {
            information:
                {
                type: "Customize",
                info: "Use our free mokeup generator to apply your designs to your chosen products. Easily upload your design, switch between color options, and preview your products on high-quality images. The mockup is designed to easily add products to your "
                },
            gif: pick
        },
        {
            gif: sample,
            information: 
                {
                type: "Sample",
                info: "Order samples from your chosen print providers to make sure the end products look and feel exactly as you imagined. This allows you to test out different products and find the right print provider for your business. "
                },
        },
        {
           information:
                { 
                type: "Publish",
                info: "Once you’re happy with your custom product, publish it to your online store automatically. The Hive is integrated with leading eCommerce platforms such as local brands in Nigeria and more so you can sell to millions of online shoppers effortlessly."
                },
            gif: publish
        },
        {
            gif: relax,
            information: 
                {
                type: "Relax",
                info: "When you make a sale, and your product passes Quality Control, it is sent to production and thereafter, shipped directly to your customer. Focus on growing your brand while we take care of the rest."
                }
        }
    ]
    return(
        <Container>
            <Row className="hiw-dashbord css-selector">
                <div className="hwi-dashbord-contain">
                    <h1>How to Start</h1>
                    <p>
                        The Hive simplifies and automates the process of sourcing and creating print on demand products at the best prices on the market.
                    </p>
                    <div className="hwi-dashbord-contain-button">
                        <Button value={"Start Design"} style={buttony_style} />
                    </div>
                </div>
            </Row>
            <div className="hwi-steps">
                <h3>
                    The Hive Services in 5 Easy Steps.
                </h3>
            </div>
           { steps.map((val, idx)=>(
                Object.keys(val)[0]==="gif"?
                (
                    <Row key={idx} className="hwi-step-contain">
                        <Col sm={6} className="hwi-step-gif">
                            <img src={val["gif"]} alt={`the hive ${val["information"]["type"]} gif`} />
                        </Col>                                                                                                                                                                                                                                                                                                                                                                    
                        <Col sm={6} className="hwi-step-info">
                            <div className="hwi-step-info-contain" >
                                <h1>
                                    {val["information"]["type"]}
                                </h1>
                                <p>
                                    {val["information"]["info"]}
                                </p>
                            </div>
                        </Col>
                    </Row>
                ):
                (
                    <Row key={idx} className="hwi-step-contain">                                                                                                                                                                                                                                                                                                                                                                    
                        <Col sm={6} className="hwi-step-info">
                            <div className="hwi-step-info-contain" >
                                <h1>
                                    {val["information"]["type"]}
                                </h1>
                                <p>
                                    {val["information"]["info"]}
                                </p>
                            </div>
                        </Col>
                        <Col sm={6} className="hwi-step-gif">
                            <img src={val["gif"]} alt={`the hive ${val["information"]["type"]} gif`} />
                        </Col>
                    </Row>
                )
           )
           )
           }
           <h3 className="pricing-header">
                Choose the right plan for your business
            </h3>
            <h5 className="pricing-header">
                <b>
                    The Hive helps designers make more money with less effort.
                </b>
            </h5>
            
            <PricingPlan />
            
            <div className="hwt-banner">
                <img src={banner} alt="how it workse banner" />
                <div className="hwt-banner-info">
                    <h4 style={{
                        marginBottom: 20
                    }}>Already Found What You Were Looking For?</h4>
                    <h6 style={{
                        marginBottom: 20
                    }}>Make it happen right now.</h6>
                    <Button style={
                        {width: 200,
                        margin: "auto",
                        padding: 10,
                        borderRadius: 5}
                    } value={"Start selling"}/>
                </div>
            </div>

        </Container>
    );
}

export default HowItWorks