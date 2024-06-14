const stripe = require("stripe")(
  "sk_test_51L1vTZK44H9XXEsw6Kv0UJtybnNd4F9rnFlQvZaWQQjzRPo3DuX1Ejb66sPGHTepoeVMGYpMv6CWztPc7jPACqTm00sxUs34Bj"
);
module.exports = {
  createPaymentIntent: async (amount, currency) => {
    return await stripe.paymentIntents.create({
      amount,
      currency,
    });
  },
};
