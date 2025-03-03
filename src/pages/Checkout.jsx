import { useState } from "react";
import { novaPostApi } from "../api/novaPostApi";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

const Checkout = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const [shippingMethod, setShippingMethod] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const dispatch = useDispatch();

  const shippingMethods = novaPostApi.getShippingMethods();
  const paymentMethods = novaPostApi.getPaymentMethods();

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = {
      items,
      totalAmount,
      shippingMethod,
      paymentMethod,
    };

    console.log(orderData);

    alert("Order placed!");
    dispatch(clearCart());
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Shipping Method</h3>
          {shippingMethods.map((method) => (
            <label key={method.id}>
              <input
                type="radio"
                name="shipping"
                value={method.id}
                onChange={() => setShippingMethod(method.id)}
              />
              {method.name}
            </label>
          ))}
        </div>

        <div>
          <h3>Payment Method</h3>
          {paymentMethods.map((method) => (
            <label key={method.id}>
              <input
                type="radio"
                name="payment"
                value={method.id}
                onChange={() => setPaymentMethod(method.id)}
              />
              {method.name}
            </label>
          ))}
        </div>

        <div>
          <h3>Total: ${totalAmount}</h3>
          <button type="submit">Place Order</button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
