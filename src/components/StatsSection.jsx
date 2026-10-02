import { Col, Container, Row } from 'react-bootstrap';
import StatCard from './StatCard';

function StatsSection({ stats }) {
  return (
    <section className="stats-section" aria-label="Nexora in numbers">
      <Container>
        <Row xs={2} lg={4} className="g-0">
          {stats.map((stat) => (
            <Col key={stat.label}>
              <StatCard stat={stat} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default StatsSection;
