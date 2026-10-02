import { Button, Container, Stack } from 'react-bootstrap';

function Hero() {
  return (
    <section className="hero-section" id="home">
      <Container className="py-5">
        <div className="hero-copy py-lg-5">
          <p className="eyebrow">Build a brighter tomorrow</p>
          <h1 className="display-4 fw-bold">
            Smart Solutions
            <br />
            for a <span className="text-success">Sustainable Future</span>
          </h1>
          <p className="lead hero-description">
            We create innovative digital products and services that help businesses grow, people
            connect and the planet thrive.
          </p>
          <Stack direction="horizontal" gap={3} className="flex-wrap">
            <Button variant="success" href="#products" className="rounded-pill px-4">
              Explore Our Products <i className="bi bi-arrow-right ms-1" aria-hidden="true" />
            </Button>
            <Button variant="outline-dark" href="#solutions" className="rounded-pill px-4">
              <i className="bi bi-play-circle me-2" aria-hidden="true" />
              Watch Video
            </Button>
          </Stack>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
