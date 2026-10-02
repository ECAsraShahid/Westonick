import { Col, Container, Row } from 'react-bootstrap';
import BlogCard from './BlogCard';

function BlogSection({ posts }) {
  return (
    <section className="blog-section py-5" id="blog">
      <Container>
        <Row className="align-items-end mb-4">
          <Col>
            <p className="eyebrow">Latest News</p>
            <h2 className="section-title fw-bold mb-1">From Our Blog</h2>
            <p className="text-secondary mb-0">Insights, tips and updates to help you stay ahead.</p>
          </Col>
          <Col xs="auto" className="d-none d-sm-block">
            <a href="#blog" className="blog-more text-decoration-none fw-semibold">
              View All Articles <i className="bi bi-arrow-right" aria-hidden="true" />
            </a>
          </Col>
        </Row>
        <Row xs={1} md={3} className="g-3">
          {posts.map((post) => (
            <Col key={post.id}>
              <BlogCard post={post} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default BlogSection;
