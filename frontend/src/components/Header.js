import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const token = localStorage.getItem("token")
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/login")
    localStorage.removeItem("token");
  }
  return (
    <>
    <Navbar bg={token ? "primary" : "dark"} data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">APP</Navbar.Brand>
            <Nav className="m1-auto">
            { token ? (
              <>
              <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
              <Nav.Link onClick={handleLogOut}>LogOut</Nav.Link>
              </>
            ) : (
              <>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to= "/register">Signup</Nav.Link>
              </>
            )}
            </Nav>
        </Container>
      </Navbar>
      
    </>
  )
}

export default Header