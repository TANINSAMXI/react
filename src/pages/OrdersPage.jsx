import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import OrdersList from "../components/OrdersList.jsx";
import { faker } from "@faker-js/faker";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [showOrders, setShowOrders] = useState(false);

  const generateFakeOrders = () => {
    const fakeOrders = Array.from({ length: 5 }, () => ({
      date: faker.date.past().toISOString().split("T")[0],
      totalPrice: faker.commerce.price(),
      items: Array.from(
        { length: faker.number.int({ min: 1, max: 5 }) },
        () => ({
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
        }),
      ),
    }));

    setOrders(fakeOrders);
    setShowOrders(true);
  };

  return (
    <Container className="mt-4">
      {!showOrders ? (
        <>
          <Button onClick={generateFakeOrders}>My Orders</Button>
          <p>Product categories will be displayed here...</p>
        </>
      ) : (
        <>
          <Button onClick={() => setShowOrders(false)}>
            Back to Categories
          </Button>
          <OrdersList
            orders={orders}
            onDelete={(index) => {
              setOrders(orders.filter((_, i) => i !== index));
            }}
          />
        </>
      )}
    </Container>
  );
};

export default OrdersPage;
