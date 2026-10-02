import { Badge, Button, Card } from 'react-bootstrap';

function ProductCard({ product }) {
  return (
    <Card className="product-card h-100 border-0 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div className={`product-icon ${product.color}`} aria-hidden="true">
            <i className={`bi ${product.icon}`} />
          </div>
          <Badge bg="light" text="dark" pill>
            {product.category}
          </Badge>
        </div>
        <Card.Title as="h3" className="h5 fw-bold">
          {product.name}
        </Card.Title>
        <Card.Text className="text-secondary flex-grow-1">{product.description}</Card.Text>
        <Button variant="link" href={product.learnMoreUrl} className="product-link p-0 text-start">
          Learn More <i className="bi bi-arrow-right ms-1" aria-hidden="true" />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
