import Container from "../Container";
import Highlight from "../Highlight";
import { useEffect, useState } from "react";
import { useSelection } from "../../context/SelectionContext";
import Link from "next/link";
import clsx from "clsx";

export default function DonateViaButtons({ amounts, givingTo, defaultReason }) {
	const { selection, setSelection } = useSelection();

	const [amount, setAmount] = useState(amounts[0].amount);
	const [reason, setReason] = useState(amounts[0].reason);
	const stripeMode = process.env.NEXT_PUBLIC_STRIPE_MODE;
	let currency = "gbp";
	if (selection.country === "US") {
		currency = "usd";
	}
	const currencySymbol = currency === "gbp" ? "£" : "$";
	const baseDonateUrl =
		process.env.NEXT_PUBLIC_ENV === "production"
			? "https://donate.hopeforjustice.org"
			: "http://localhost:3001";

	const query = new URLSearchParams({
		amount,
		campaign: "FreedomFoundation",
		givingFrequency: "once",
		currency,
		projectId: selection.projectId,
		stripeMode,
		paymentGateway: "stripe",
		monthlyAllowed: "false",
		allowChange: "false",
		donorType: selection.type,
		givingTo: givingTo,
	});

	const handleAmountClick = (value) => {
		setAmount(value);
	};

	useEffect(() => {
		const matchedAmount = amounts.find((item) => item.amount === amount);
		if (matchedAmount) {
			setReason(matchedAmount.reason);
		} else {
			setReason(defaultReason);
		}
	}, [amount, amounts]);

	// Only include organisationName if donor is not an individual
	if (selection.type !== "individual") {
		query.set("organisationName", selection.name);
	}

	const donateUrl = `${baseDonateUrl}/?${query.toString()}`;
	return (
		<Container>
			<div className="px-4 mt-10">
				<p className="font-bold mb-4 lg:text-xl">
					{selection.type === "individual"
						? `${selection.name}, you are funding:`
						: `${selection.name} is funding:`}
				</p>
				<h1 className="text-4xl xs:text-5xl xl:text-7xl leading-tight font-fk text-white mb-8">
					<Highlight>
						{selection.projectTitle.charAt(0).toUpperCase() +
							selection.projectTitle.slice(1)}
					</Highlight>
				</h1>
				<h2 className="font-fk text-3xl xs:text-4xl xl:text-5xl my-4 mb-6 lg:mb-12">
					How much impact do you want to make?
				</h2>

				<div className="flex flex-wrap gap-4">
					{amounts.map((item, index) => (
						<div
							className={clsx(
								"rounded-lg p-4 font-fk text-4xl lg:text-6xl cursor-pointer transition",
								item.amount === amount
									? "bg-hfj-red text-white"
									: "bg-[#DEDEDE] text-[#ACACAC] hover:opacity-60"
							)}
							key={index}
							onClick={() => handleAmountClick(item.amount)}
						>
							{currencySymbol}
							{item.amount.toLocaleString()}
						</div>
					))}
				</div>

				<p className="mt-8 lg:mt-12 text-sm lg:text-base">
					Select an amount or enter a custom value.
				</p>
				<div className="mt-4 border border-gray-300 pl-2 rounded-lg bg-white max-w-[150px] lg:max-w-[220px]">
					<input
						className="w-full h-full font-fk text-5xl lg:text-7xl outline-none"
						type="text"
						value={amount ? `${currencySymbol}${amount.toLocaleString()}` : ""}
						onChange={(e) => {
							const value = e.target.value.replace(/[^0-9]/g, "");
							setAmount(Number(value));
							console.log(amount);
						}}
					/>
				</div>

				{/* reasons */}
				<div className="mt-8 max-w-[1200px]">
					{amount >= 1000 && amount < selection.budgetNumber && (
						<p className="text-xl font-bold">
							{currencySymbol}
							{amount.toLocaleString()} <span className="mt-4">{reason}</span>
						</p>
					)}
					{amount >= selection.budgetNumber && (
						<p className="text-xl font-bold">
							{currencySymbol}
							{amount.toLocaleString()} will fund this entire project for{" "}
							<Highlight style="small">1 year</Highlight>
						</p>
					)}
					{amount < 1000 && (
						<p className="text-xl font-bold">
							The minimum contribution to this project: {currencySymbol}1,000.
							Smaller donations are gratefully received and will make an
							enormous difference but they cannot be allocated via the Freedom
							Foundation.
						</p>
					)}
				</div>
				<div>
					<div className="mt-16 mb-6 flex flex-wrap gap-4 lg:gap-8">
						<Link
							className="bg-hfj-red px-5 py-4 rounded-[100px] text-white font-bold text-lg lg:text-xl hover:scale-105 inline-block transition"
							href={donateUrl}
						>
							Donate {currencySymbol}
							{amount.toLocaleString()} via card or bank transfer
						</Link>
						<Link
							className="bg-hfj-black px-5 py-4 rounded-[100px] text-white font-bold text-lg lg:text-xl hover:scale-105 inline-block transition"
							href="#"
						>
							Get in touch
						</Link>
					</div>
					<p className="text-sm lg:text-base max-w-[600px]">
						If you have any questions about the Freedom Foundation or your
						donation select <strong>&quot;Get in touch&quot;</strong> and we
						will be in contact.
					</p>
				</div>
			</div>
			<div className="h-20 w-full"></div>
		</Container>
	);
}
