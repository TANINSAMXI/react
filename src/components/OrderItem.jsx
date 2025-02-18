import { useState } from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

const OrderItem = ({ order, onDelete }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title onClick={() => setExpanded(!expanded)}>
          Date: {order.date} - Price: {order.totalPrice}€
        </Card.Title>
        {expanded && (
          <ul>
            {order.items.map((item, i) => (
              <li key={i}>
                {item.name} - {item.price}€
              </li>
            ))}
          </ul>
        )}
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

// Prop validation
OrderItem.propTypes = {
  order: PropTypes.shape({
    date: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default OrderItem;
