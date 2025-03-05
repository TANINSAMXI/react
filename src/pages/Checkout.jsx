import { useState } from "react";
import { Form, Button, Input, SelectPicker } from "rsuite";

const deliveryOptions = [
  { label: "Нова Пошта", value: "nova_poshta" },
  { label: "Укрпошта", value: "ukrposhta" },
];

const paymentOptions = [
  { label: "Картка", value: "card" },
  { label: "Готівка при отриманні", value: "cash" },
];

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    delivery: "",
    payment: "",
  });

  const handleSubmit = () => {
    console.log("Замовлення:", formData);
    alert("Замовлення оформлено!");
  };

  return (
    <Form
      fluid
      onChange={(value) => setFormData(value)}
      onSubmit={handleSubmit}
    >
      <h2>Оформлення замовлення</h2>
      <Form.Group>
        <Form.ControlLabel>П.I.Б</Form.ControlLabel>
        <Input name="name" required />
      </Form.Group>
      <Form.Group>
        <Form.ControlLabel>Телефон</Form.ControlLabel>
        <Input name="phone" required />
      </Form.Group>
      <Form.Group>
        <Form.ControlLabel>Адреса</Form.ControlLabel>
        <Input name="address" required />
      </Form.Group>
      <Form.Group>
        <Form.ControlLabel>Спосіб доставки</Form.ControlLabel>
        <SelectPicker data={deliveryOptions} block name="delivery" />
      </Form.Group>
      <Form.Group>
        <Form.ControlLabel>Спосіб оплати</Form.ControlLabel>
        <SelectPicker data={paymentOptions} block name="payment" />
      </Form.Group>
      <Button appearance="primary" type="submit">
        Підтвердити замовлення
      </Button>
    </Form>
  );
};

export default Checkout;
