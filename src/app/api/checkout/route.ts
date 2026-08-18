import Stripe from "stripe";

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY environment variable is not set");
  }
  return new Stripe(key, {
    apiVersion: "2026-07-29.dahlia",
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { productId, productName, price, date, time, email } = body;

    if (productId === "keynote-booking") {
      return Response.json({
        url: `/contact?subject=keynote-booking&date=${date || ""}&time=${time || ""}`,
      });
    }

    if (!price || price <= 0) {
      return Response.json(
        { error: "Invalid product or price" },
        { status: 400 }
      );
    }

    const stripe = getStripe();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: productName || "Consultation Call",
              description: date && time
                ? `Scheduled for ${date} at ${time}`
                : "Nahim will confirm the session time after purchase.",
              metadata: {
                productId,
                date: date || "",
                time: time || "",
              },
            },
            unit_amount: price,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${request.headers.get("origin") || "http://localhost:3000"}/book/confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get("origin") || "http://localhost:3000"}/shop`,
      customer_email: email || undefined,
      metadata: {
        productId,
        date: date || "",
        time: time || "",
      },
    });

    return Response.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return Response.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
