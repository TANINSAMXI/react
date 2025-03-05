import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cartSlice";
import { Table, Button, InputNumber } from "rsuite";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector(
    (state) => state.cart || { items: [], totalAmount: 0 },
  ); // 👈 Додано fallback
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Кошик</h2>
      <Table data={cart.items} autoHeight>
        <Table.Column width={200}>
          <Table.HeaderCell>Товар</Table.HeaderCell>
          <Table.Cell dataKey="title" />
        </Table.Column>
        <Table.Column width={100}>
          <Table.HeaderCell>Ціна</Table.HeaderCell>
          <Table.Cell dataKey="price" />
        </Table.Column>
        <Table.Column width={150}>
          <Table.HeaderCell>Кількість</Table.HeaderCell>
          <Table.Cell>
            {(rowData) => (
              <InputNumber
                min={1}
                value={rowData.quantity}
                onChange={(value) =>
                  dispatch(updateQuantity({ id: rowData.id, quantity: value }))
                }
              />
            )}
          </Table.Cell>
        </Table.Column>
        <Table.Column width={100}>
          <Table.HeaderCell>Дії</Table.HeaderCell>
          <Table.Cell>
            {(rowData) => (
              <Button
                color="red"
                onClick={() => dispatch(removeFromCart(rowData.id))}
              >
                Видалити
              </Button>
            )}
          </Table.Cell>
        </Table.Column>
      </Table>
      <h3>Загальна сума: {cart.totalAmount}$</h3>
      <Link to="/checkout">
        <Button appearance="primary">Оформити замовлення</Button>
      </Link>
    </div>
  );
};

export default Cart;
