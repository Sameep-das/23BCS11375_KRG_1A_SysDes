class Inventory {
  constructor() {
    this.stock = { item1: 5, item2: 2 };
  }
  checkStock(item, qty) {
    return (this.stock[item] || 0) >= qty;
  }
  reduceStock(item, qty) {
    if (this.checkStock(item, qty)) {
      this.stock[item] -= qty;
      return true;
    }
    return false;
  }
}

module.exports = Inventory;
