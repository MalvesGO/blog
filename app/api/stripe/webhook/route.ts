import Stripe from "stripe";
import { headers } from "next/headers";
import { buffer } from "stream/consumers";

const stripe = new Stripe(process.env.STRIPE_SK_KEY!);

const endpoint_secret = process.env.ENDPOINT_SECRET!;

export async function POST(request: any) {
    const rawBody = await buffer(request.body);
    let event;
  try {
    const sig = headers().get("stripe-signature");
    event = stripe.webhooks.constructEvent(rawBody, sig!, endpoint_secret);
  } catch (err: any) {
    return Response.json({ "error": "Webhook Error" + err?.message });
    return;
  }

  // Handle the event
  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntentSucceeded = event.data.object;
      console.log(paymentIntentSucceeded)
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
  return Response.json({});
}
