import { Card } from 'react-bootstrap';

function StatCard({ stat }) {
  return (
    <Card className="stat-card h-100 border-0 rounded-0">
      <Card.Body className="d-flex align-items-center justify-content-center gap-3">
        <span className="stat-icon" aria-hidden="true">
          <i className={`bi ${stat.icon}`} />
        </span>
        <div>
          <Card.Title as="h3" className="mb-0 fw-bold">
            {stat.value}
          </Card.Title>
          <Card.Text className="mb-0 small">{stat.label}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default StatCard;
