import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";
import OrderItem from "./OrderItem";

const OrdersList = ({ orders, onDelete }) => (
  <ListGroup>
    {orders.length === 0 ? (
      <p>No orders available</p>
    ) : (
      orders.map((order, index) => (
        <OrderItem key={index} order={order} onDelete={() => onDelete(index)} />
      ))
    )}
  </ListGroup>
);

// Prop validation
OrdersList.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      totalPrice: PropTypes.number.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default OrdersList;
