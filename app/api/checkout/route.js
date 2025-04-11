import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
	try {
		const { amount } = await req.json(); // Get the amount from the request body
		const customer = await stripe.customers.create({
			email: "james.holt@hopeforjustice.org",
		});

		const session = await stripe.checkout.sessions.create({
			customer: customer.id,
			// customer_details: ,
			line_items: [
				{
					price_data: {
						currency: "usd",
						product_data: { name: "Freedom Foundation" },
						unit_amount: amount, // Amount in cents
					},
					quantity: 1,
				},
			],
			payment_intent_data: {
				metadata: {
					test: "Independent advocacy for survivors of modern slavery",
				},
			},
			mode: "payment",
			payment_method_types: ["card", "customer_balance"],
			payment_method_options: {
				customer_balance: {
					funding_type: "bank_transfer",
					bank_transfer: {
						type: "us_bank_transfer",
					},
				},
			},
			success_url: `${req.headers.get(
				"origin"
			)}/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${req.headers.get("origin")}/cancel`,
		});

		return new Response(JSON.stringify({ id: session.id }), { status: 200 });
	} catch (err) {
		return new Response(JSON.stringify({ error: err.message }), {
			status: 500,
		});
	}
}
