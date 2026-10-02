import { Button, Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';

function Navbar({ navItems }) {
  return (
    <BootstrapNavbar expand="lg" bg="white" className="site-navbar shadow-sm">
      <Container>
        <BootstrapNavbar.Brand href="#home" className="fw-bold">
          <i className="bi bi-leaf-fill brand-icon me-2" aria-hidden="true" />
          Nexora
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="main-navigation" />

        <BootstrapNavbar.Collapse id="main-navigation">
          <Nav className="mx-auto my-2 my-lg-0 gap-lg-3">
            {navItems.map((item) => (
              <Nav.Link key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </Nav.Link>
            ))}
          </Nav>
          <Button variant="dark" href="#products" className="rounded-pill px-4">
            Get Started
          </Button>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
