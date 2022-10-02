import React from "react"
import "./inc.css"
import {Container, Nav, Navbar, Dropdown, NavItem, NavLink, NavDropdown, Row} from "react-bootstrap"
import navbarItems from "./navbarItems"
import Navlist from "./navlist"
import "./custom-dropdown-menu.css"
import logo from "../../Resources/HIVELOGO(2).png"

const NavBar = ()=>{

    return(
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand herf="#href"> 
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
                        <Nav.Link href="#jobs">Catlog</Nav.Link>
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
                    
                        <Nav.Link className="nav-main" href="#jobs">How it works</Nav.Link>
                        <Nav.Link className="nav-main" href="#jobs">Pricing</Nav.Link>
                        <Nav.Link className="nav-main" href="#jobs">Blog</Nav.Link>
                        {/* <Nav.Link className="nav-main" href="#jobs">Services</Nav.Link> */}
                        <NavDropdown  title="Services" id="basic-nav-dropdown">
                             {/* <div  d-block"> */}
                                <NavDropdown.Item className="animate slideIn" href="#action/3.1">Transfer Products</NavDropdown.Item>
                                <NavDropdown.Item className="animate slideIn" href="#action/3.2">
                                Order In Bulk
                                </NavDropdown.Item>
                                <NavDropdown.Item className="animate slideIn" href="#action/3.3">Experts Program</NavDropdown.Item>
                            {/* </div>                                */}

                        </NavDropdown>

                        <NavDropdown title="Need help" id="basic-nav-dropdown">
                            {/* <div className="animate slideIn d-block"> */}
                                <NavDropdown.Item className="animate slideIn" href="#action/3.1">Help Centre</NavDropdown.Item>
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
