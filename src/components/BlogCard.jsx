import { Button, Card } from 'react-bootstrap';

function BlogCard({ post }) {
  return (
    <Card className="blog-card h-100 border-0 shadow-sm">
      <Card.Img variant="top" src={post.image} alt={post.alt} />
      <Card.Body className="d-flex flex-column">
        <Card.Subtitle className="mb-2 text-secondary small">{post.date}</Card.Subtitle>
        <Card.Title as="h3" className="h5 fw-bold">
          {post.title}
        </Card.Title>
        <Card.Text className="text-secondary flex-grow-1">{post.description}</Card.Text>
        <Button variant="link" href="#blog" className="product-link p-0 text-start">
          Read More <i className="bi bi-arrow-right ms-1" aria-hidden="true" />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;
