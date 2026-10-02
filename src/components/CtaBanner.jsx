import { Button, Container, Stack } from 'react-bootstrap';

function CtaBanner() {
  return (
    <section className="cta-banner text-white py-4">
      <Container>
        <Stack
          direction="horizontal"
          className="flex-column flex-md-row justify-content-between align-items-md-center"
          gap={3}
        >
          <div>
            <h2 className="h3 fw-bold mb-1">Ready to Build Something Great?</h2>
            <p className="mb-0">Join thousands of businesses already using Nexora.</p>
          </div>
          <Button variant="light" href="#products" className="rounded-pill px-4 fw-semibold">
            Get Started Free <i className="bi bi-arrow-right ms-1" aria-hidden="true" />
          </Button>
        </Stack>
      </Container>
    </section>
  );
}

export default CtaBanner;
