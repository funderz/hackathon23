const stripe = require("stripe")(process.env.stripeSecret);
const { contributeToCompain } = require("./compain");

const stripeWebHook = async (request, response) => {
  try {
    const sig = request.headers["stripe-signature"];
    const event = await stripe.webhooks.constructEvent(
      request.body,
      sig,
      process.env.endPointWebHooks
    );
    if (event.type === "payment_intent.succeeded") {
      const { object: payment_data } = event?.data || {};
      const paymentIntent = await stripe.paymentIntents.retrieve(
        payment_data?.id
      );
      const paymentMethodId = paymentIntent.payment_method;
      if (paymentMethodId) {
        await stripe.paymentMethods.retrieve(paymentMethodId);
        const { metadata, amount } = paymentIntent || {};
        const { compainId, userId } = metadata || {};
        await contributeToCompain(amount, compainId, userId);
      } else {
        throw new Error("No payment method found for the Payment Intent");
      }
    }
    response.send({ success: true });
  } catch (err) {
    log.error(err);
  }
};

const createPayment = async (req, res) => {
  const stripe = new stripePackage(process.env.stripeSecret, {
    apiVersion: null,
  });
  const { amount, number, exp_month, exp_year, cvc, compainId } =
    req.body || {};
  const userId = req.params.id;
  try {
    const paymentMethod = await stripe.paymentMethods.create({
      type: "card",
      card: {
        number, // Card number
        exp_month, // Expiry month (2-digit)
        exp_year, // Expiry year (4-digit)
        cvc, // CVC code
      },
    });
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "usd",
      amount,
      payment_method_types: ["card"],
      metadata: { compainId, userId },
      payment_method: paymentMethod.id,
      confirmation_method: "manual",
      confirm: true,
    });
    res.send({
      clientSecret: paymentIntent.client_secret,
      paymentMethod: paymentMethod.id,
    });
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  stripeWebHook,
  createPayment,
};
