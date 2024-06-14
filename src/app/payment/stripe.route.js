const express = require("express");
const { createPaymentIntent } = require("./stripe.js");
const router = express.Router();

router.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount, currency } = req.body;
    const paymentIntent = await createPaymentIntent(amount, currency);
    res.status(200).send({
      clientSecret:
        "pk_test_51L1vTZK44H9XXEswee8PSvYxA1azbnu3WWTRh4GygBrNJuOyRtOlt2bTZTa1N4PGadIFlHUZ9AmnV772TXzFmKA500q5oY0hDJ",
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
