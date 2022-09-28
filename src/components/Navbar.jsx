import {
  Stack,
  Offcanvas,
  Button,
  Container,
  Nav,
  Navbar as NavbarBs,
} from "react-bootstrap";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm">
      <Container>
        <Nav className="me-auto">
          <h1 className="fs-2">Map App</h1>
        </Nav>
        <Button
          onClick={handleShow}
          variant="light"
          style={{
            backgroundColor: "white",
            width: "3rem",
            height: "3rem",
            position: "relative",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </Button>
      </Container>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fs-3">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack className="align-items-center" gap={5}>
            <NavbarBs className="mb-3 bg-white">
              <Container>
                <Nav className="me-auto d-flex flex-column fs-4">
                  <Nav.Link to="/" as={NavLink}>
                    <span>Map</span>
                  </Nav.Link>
                  <Nav.Link to="/table" as={NavLink}>
                    <span>Table</span>
                  </Nav.Link>
                </Nav>
              </Container>
            </NavbarBs>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </NavbarBs>
  );
}
