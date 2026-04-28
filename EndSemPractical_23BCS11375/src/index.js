const OrderFacade = require("./orderFacade");
(async () => {
  const facade = new OrderFacade();
  const order1 = { id: 1, item: "item1", qty: 3, amount: 150 };
  const res1 = await facade.placeOrder(order1);
  console.log(res1);

  const order2 = { id: 2, item: "item2", qty: 5, amount: 250 };
  const res2 = await facade.placeOrder(order2);
  console.log(res2);
})();
