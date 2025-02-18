export const getOrders = () => JSON.parse(localStorage.getItem("orders")) || [];

export const removeOrder = (index) => {
  const orders = getOrders().filter((_, i) => i !== index);
  localStorage.setItem("orders", JSON.stringify(orders));
};
