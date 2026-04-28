class PaymentGateway {
  processPayment(amount) {
    return new Promise((resolve) =>
      setTimeout(
        () => resolve({ success: true, transactionId: `tx_${Date.now()}` }),
        100,
      ),
    );
  }
}

module.exports = PaymentGateway;
