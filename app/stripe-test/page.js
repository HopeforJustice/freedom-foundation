"use client"; // Needed for frontend components

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Page() {
	const [isLoading, setIsLoading] = useState(false);
	const [amount, setAmount] = useState(2000);
	const value = 1000;
	const handlePayment = async (amount) => {
		setIsLoading(true);
		const stripe = await stripePromise;
		const amountCents = amount * 100;

		const checkoutSession = await fetch("/api/checkout", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ amount: amountCents }),
		}).then((res) => res.json());

		await stripe.redirectToCheckout({ sessionId: checkoutSession.id });
	};

	const onChange = (value) => {
		setAmount(value);
	};

	return (
		<>
			<div className="relative w-full max-w-xl">
				<div className="absolute top-0 left-0 w-full h-full flex justify-between">
					{[...Array(6)].map((_, index) => (
						<span
							key={index}
							className="block w-[3px] h-[30px] bg-gray-300"
						></span>
					))}
				</div>
				<input
					type="range"
					min="1000"
					max="6000"
					defaultValue={value}
					onChange={(e) => onChange(Number(e.target.value))}
					step="1000"
					className="relative mb-8 w-full appearance-none outline-none focus:outline-none
            [&::-webkit-slider-runnable-track]:w-full [&::-webkit-slider-runnable-track]:h-[3px] [&::-webkit-slider-runnable-track]:bg-gray-300 [&::-webkit-slider-runnable-track]:rounded-md
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[30px] [&::-webkit-slider-thumb]:h-[40px] [&::-webkit-slider-thumb]:bg-[#d21220] [&::-webkit-slider-thumb]:rounded-lg [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-200 [&::-webkit-slider-thumb]:ease-in-out [&::-webkit-slider-thumb]:mt-[-18px] [&::-webkit-slider-thumb]:scale-110 hover:[&::-webkit-slider-thumb]:scale-125
            [&::-moz-range-track]:w-full [&::-moz-range-track]:outline-none
            [&::-moz-range-thumb]:w-[30px] [&::-moz-range-thumb]:h-[40px] [&::-moz-range-thumb]:mt-[-18px] [&::-moz-range-thumb]:bg-[#d21220] [&::-moz-range-thumb]:rounded-lg [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:transition-transform [&::-moz-range-thumb]:duration-200 [&::-moz-range-thumb]:ease-in-out hover:[&::-moz-range-thumb]:scale-125"
				/>
			</div>
			<button
				className="rounded-lg px-2 py-1 bg-hfj-red text-white font-bold"
				onClick={() => handlePayment(amount)}
			>
				Pay £{amount}
			</button>
		</>
	);
}
