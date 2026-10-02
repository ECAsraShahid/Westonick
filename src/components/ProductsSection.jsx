import { useState } from 'react';
import { Alert, Button, Col, Container, Row, Stack } from 'react-bootstrap';
import ProductCard from './ProductCard';

const categories = ['All', 'Software', 'Cloud', 'Business'];

function ProductsSection({ products }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const visibleProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <section className="products-section py-5" id="products">
      <Container>
        <p className="eyebrow">Our Products</p>
        <h2 className="section-title fw-bold">Powerful Tools for Modern Businesses</h2>
        <p className="text-secondary mb-4">
          Discover products designed to simplify your work and boost productivity.
        </p>

        <Stack direction="horizontal" gap={2} className="flex-wrap mb-4">
          {categories.map((category) => (
            <Button
              key={category}
              type="button"
              variant={selectedCategory === category ? 'success' : 'outline-success'}
              className="rounded-pill"
              aria-pressed={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </Stack>

        {visibleProducts.length > 0 ? (
          <Row xs={1} sm={2} lg={4} className="g-3">
            {visibleProducts.map((product) => (
              <Col key={product.id}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        ) : (
          <Alert variant="light" role="status" className="mb-0">
            No products found
          </Alert>
        )}
      </Container>
    </section>
  );
}

export default ProductsSection;
