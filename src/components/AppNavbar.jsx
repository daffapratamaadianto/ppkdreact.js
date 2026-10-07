import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function AppNavbar() {

    return (
        <Navbar expand="lg" bg="dark" variant="dark" className="shadow-sm mb-4">
            <Container>
                <Navbar.Brand href="#home">Point of sales ppkdjp</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/dashboard">Home</Nav.Link>
                        <Nav.Link href="/Category">Category</Nav.Link>
                        <Nav.Link href="/Product">poruct</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
                    <nav className="align-item-center gap-2">
                        <Navbar.Text className="text-secondary me-2">admin</Navbar.Text>
                        <Button variant="outline-danger" size="sm">
                            logout
                        </Button>

                    </nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}