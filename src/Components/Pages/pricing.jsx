import React from "react"
import "./pages.css"
import { Container, Row, Col} from "react-bootstrap";
import PricingPlan from "../Inc/prcing-plan";
import prcing from "../../Resources/prcing-plan.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaShieldAlt, FaDollarSign, FaClock, FaBoxOpen, FaTshirt, FaHeart } from "react-icons/fa";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";

const Pricing = ()=>{
    const ans = [
        {
            img: <FaDollarSign />,
            topic: "REDUCE COST AND RISKS",
            ans: "Avoid the dead stock problem of frozen assets never being sold. The Hive means no inventory, no commitments or up-front investments, no warehousing costs or minimum order quantities – you pay only after your end-customer buys."
        },
        {
            img: <FaClock />,
            topic: "LOWER COST AND INCREASE REVENUE",
            ans: "Maximize margins and increase your revenue by getting access to some of the largest printing houses in the world. The Hive network's cumulative order volume creates economies of scale for our printing partners and for you, so you get lower costs for your products."
        },
        {
            img: <FaBoxOpen />,
            topic: "LESS EFFORT-SAVED TIME AND MONY",
            ans: "No longer need to source products, find new suppliers or warehouses yourself. Regardless of what and where you sell, The Hive handles new product sourcing, printing, packaging, and shipping so you can save time and money and focus on your core business and services."
        },
        {
            img: <FaTshirt />,
            topic: "NEVER LOSE ANOTHER ORDER",
            ans: "Automatic order routing means you’re never out of stock and always keeping up with demand. Our network will re-route the order to the next print provider in line so you can keep up with the demand even during the busiest of the seasons."
        },
        {
            img: <FaHeart />,
            topic: "LAUNCH NEW PEODUCTS AND COLLECTIONS QUICKLY",
            ans: "No more long lead times or MOQs. Use The Hive global network of print providers to quickly launch new product lines, collections and enter new geographies without hassle, risks or upfront investment."
        },
        {
            img: <FaShieldAlt />,
            topic: "INCREASE SATISFACTION AND DRIVE RETURNING CUSTOMERERS",
            ans: "Reduce the number of products returned The Hive hand-picked, top-quality products and manufacturers ensure your customers get the best quality and experience - so they keep returning to your store to buy more products."
        },
    ]
    return(
        <Container>
            <Row className="pricing-plan-dashbord">
                <Col sm={5} className="pricing-plan-dashbord-info-contain">
                    <div className="pricing-plan-dashbord-info">
                        <h3>
                            Choose the right plan for your business
                        </h3>
                        <p>
                            <b style={{
                                color: "#b7b712"
                            }}>
                                The Hive helps designes make more money with less effort from home.
                            </b>
                        </p>
                        <p>
                            Regardless if you’re just starting out or if you’re a fast growing and established business or an enterprise, we’ve got you covered. Choose the pricing plan that suits your needs the best!
                        </p>
                    </div>
                </Col>
                <Col sm={7}>
                    <img src={prcing} alt="pricing plan dashbord img" />
                </Col>
            </Row>
            <PricingPlan />
            <Row style={{
                backgroundColor: "whitesmoke"
            }}>
                <div className="prcing-plan-question">
                    <h4>
                        Are You an Established Seller or an Enterprise looking for something more tailored to your needs?
                    </h4>
                    <h6 style={{
                        marginTop: 20
                    }}>
                        <b>
                            Printify's Enterprise solution allows to leverage Printify's network in combination with your requirements to help you reach your goals more effectively.
                        </b>
                    </h6>
                </div>
                {
                    ans.map((val, idx)=>(
                        <Col key={idx} className="prcing-plan-question-ans" sm={4}>
                            <span className="pricing-plan-Icon">
                                {/* <FontAwesomeIcon icon={} /> */}
                                {val["img"]}
                            </span>
                            <div className="pricing-plan-questions-ans-info">
                                <h5>
                                    {val["topic"]}
                                </h5>
                                <p>
                                    {val["ans"]}
                                </p>
                            </div>
                        </Col>
                    ))
                }
                {/* <Col></Col> */}
            </Row>
            
        </Container>
    );
}

export default Pricing