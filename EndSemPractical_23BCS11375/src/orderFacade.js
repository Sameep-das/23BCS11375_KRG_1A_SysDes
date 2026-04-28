const Inventory = require("./inventory");
const PaymentGateway = require("./paymentGateway");
const { OrderStatus } = require("./enums");

class OrderFacade {
  constructor() {
    this.inventory = new Inventory();
    this.gateway = new PaymentGateway();
  }
  async placeOrder(order) {
    order.status = OrderStatus.PENDING;
    if (!this.inventory.checkStock(order.item, order.qty)) {
      order.status = OrderStatus.FAILED;
      return order;
    }
    const payment = await this.gateway.processPayment(order.amount);
    if (payment && payment.success) {
      const reduced = this.inventory.reduceStock(order.item, order.qty);
      if (reduced) {
        order.status = OrderStatus.CONFIRMED;
        order.transactionId = payment.transactionId;
      } else {
        order.status = OrderStatus.FAILED;
      }
    } else {
      order.status = OrderStatus.FAILED;
    }
    return order;
  }
}

module.exports = OrderFacade;
