import { Button, Col, Container, Image, Row } from 'react-bootstrap';

const featureItems = [
  { icon: 'bi-lightning-charge-fill', label: 'Faster performance' },
  { icon: 'bi-shield-lock-fill', label: 'Enterprise-grade security' },
  { icon: 'bi-people-fill', label: 'Dedicated support' }
];

function WhyChooseUs({ benefits }) {
  return (
    <section className="why-section py-5" id="solutions">
      <Container>
        <Row className="align-items-center g-4">
          <Col lg={6} id="about">
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="section-title fw-bold">Built for Your Success</h2>
            <p className="text-secondary">
              We combine technology, creativity and support to help you achieve more, faster.
            </p>
            <ul className="list-unstyled d-grid gap-2 mb-4">
              {benefits.map((benefit) => (
                <li key={benefit}>
                  <i className="bi bi-check-circle-fill text-success me-2" aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>
            <Button variant="success" href="#products" className="rounded-pill px-4">
              Learn More <i className="bi bi-arrow-right ms-1" aria-hidden="true" />
            </Button>
          </Col>
          <Col lg={6}>
            <div className="position-relative">
              <Image
                className="why-image w-100"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85"
                alt="Laptop and plant on a bright workspace desk"
                rounded
              />
              <div className="feature-badges d-grid gap-2 position-absolute top-50 end-0 translate-middle-y me-3">
                {featureItems.map((feature) => (
                  <div className="badge bg-white text-dark shadow-sm p-2" key={feature.label}>
                    <i className={`bi ${feature.icon} text-success me-2`} aria-hidden="true" />
                    {feature.label}
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhyChooseUs;
