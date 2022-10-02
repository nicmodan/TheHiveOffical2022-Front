import React from "react"
import "./inc.css"
import {Container, Nav, Navbar, Dropdown, NavItem, NavLink, NavDropdown, Row} from "react-bootstrap"
import navbarItems from "./navbarItems"
import Navlist from "./navlist"
import "./custom-dropdown-menu.css"
import logo from "../../Resources/HIVELOGO(2).png"
import { Link } from "react-router-dom"

const NavBar = ()=>{

    return(
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/"> 
                    <img
                    src={logo}
                    hieght={60}
                    width={70}
                    className="d-inline-block align-top"
                    alt="THE HIVE"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto" > 
                        <Nav.Link as={Link} to="/Catalog/:caterores">Catlog</Nav.Link>
                        <Dropdown as={NavItem}>
                            <Dropdown.Toggle className="toggle-signe" as={NavLink} />
                            <Dropdown.Menu className="large-dropdown-menu animate slideIn">
                                <div className="dropdown-menu-wrapper">
                                    <Row>
                                        {
                                            Object.keys(navbarItems).map((val, key)=>(
                                                // console.log(val)
                                                <Navlist key={key} 
                                                        listObj={navbarItems[val]} 
                                                        keyType={val}
                                                />
                                            ))
                                        }
                                    </Row>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    
                        <Nav.Link className="nav-main" as={Link} to="/HowItWorks">How it works</Nav.Link>
                        <Nav.Link className="nav-main" as={Link} to="/Pricing">Pricing</Nav.Link>
                        <Nav.Link className="nav-main" as={Link} to="/Blog">Blog</Nav.Link>
                        {/* <Nav.Link className="nav-main" href="#jobs">Services</Nav.Link> */}
                        <NavDropdown  title="Services" id="basic-nav-dropdown">
                             {/* <div  d-block"> */}
                                <NavDropdown.Item className="animate slideIn" as={Link} to="/Services/:TransferProducts">Transfer Products</NavDropdown.Item>
                                <NavDropdown.Item className="animate slideIn" as={Link} to="/Services/:OrderInBulk">
                                Order In Bulk
                                </NavDropdown.Item>
                                <NavDropdown.Item className="animate slideIn" as={Link} to="/Services/:ExpertsProgram">Experts Program</NavDropdown.Item>
                            {/* </div>                                */}

                        </NavDropdown>

                        <NavDropdown title="Need help" id="basic-nav-dropdown">
                            {/* <div className="animate slideIn d-block"> */}
                                <NavDropdown.Item className="animate slideIn" as={Link} to="/NeedHelp/:help-center">Help Centre</NavDropdown.Item>
                            {/* </div>     */}
                        </NavDropdown>
                        {/* <Nav.Link className="nav-main" href="#jobs">Need help</Nav.Link> */}
                        
                    </Nav>
                    <Nav>
                        <Nav.Link href="#jobs">Login</Nav.Link>
                        <Nav.Link href="#jobs">SigneUp</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
         </Navbar>
    )
}

export default NavBar
