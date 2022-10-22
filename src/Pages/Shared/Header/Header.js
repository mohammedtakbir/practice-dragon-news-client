import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import LeftSide from '../LeftSide/LeftSide';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const handleLogOut = () => {
        logout()
        .then(res => {})
        .catch(err => console.error(err))
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mb-4'>
            <Container>
                <Navbar.Brand>
                    <Link to='/' className='text-decoration-none h3'>Dragon News</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All News</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className='d-flex align-items-center'>

                        {user && user?.uid ?
                            <>
                                <Link onClick={handleLogOut} className='text-decoration-none me-3'>LogOut</Link>
                                <Nav.Link>
                                    {user?.displayName}
                                </Nav.Link>
                                <Nav.Link eventKey={2}>
                                    {user?.photoURL ? <Image roundedCircle style={{height: '30px'}} src={user?.photoURL}/> : <FaUserAlt />}
                                </Nav.Link>
                            </>
                            :
                            <>
                                <Link to='/signup' className='text-decoration-none me-3'>SignUp</Link>
                                <Link to='/login' className='text-decoration-none me-3'>logIn</Link>
                            </>
                        }

                    </Nav>

                    <div className='d-lg-none'>
                        <LeftSide />
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;