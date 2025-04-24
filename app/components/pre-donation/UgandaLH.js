"use client";
import { useEffect, useState } from "react";
import { useSelection } from "../../context/SelectionContext";
import Container from "../Container";
import Highlight from "../Highlight";
import RangeSlider from "../RangeSlider";
import Link from "next/link";

export default function FF3({ loading, setLoading, baseDonateUrl }) {
	const { selection, setSelection } = useSelection();
	const costPerChild = selection.budgetNumber / 250;
	const calculateCost = (children) => {
		return Math.ceil(costPerChild * children);
	};
	const initialAmount = calculateCost(1) > 1000 ? calculateCost(1) : 1000;
	const [amount, setAmount] = useState(initialAmount);
	const [survivorNumber, setSurvivorNumber] = useState(1);
	const stripeMode = process.env.NEXT_PUBLIC_STRIPE_MODE;
	let currency = "gbp";
	if (selection.country === "US") {
		currency = "usd";
	}
	const currencySymbol = currency === "gbp" ? "£" : "$";

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
		givingTo:
			"fund aftercare for child survivors of human trafficking via Hope for Justice's Freedom Foundation.",
	});

	// Only include organisationName if donor is not an individual
	if (selection.type !== "individual") {
		query.set("organisationName", selection.name);
	}

	const donateUrl = `${baseDonateUrl}/?${query.toString()}`;

	// for imsa calcs
	useEffect(() => {
		let children = amount / costPerChild;
		setSurvivorNumber(Math.floor(children));
	}, [amount, selection.budgetNumber]);

	const handleSliderChange = (value) => {
		switch (value) {
			case 1:
				value = initialAmount;
				break;
			case 2:
				value = calculateCost(5);
				break;
			case 3:
				value = calculateCost(10);
				break;
			case 4:
				value = calculateCost(20);
				break;
			case 5:
				value = calculateCost(100);
				break;
			case 6:
				value = selection.budgetNumber;
				break;
		}
		setAmount(value);
		console.log(amount);
	};

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
				<RangeSlider handleSliderChange={handleSliderChange} initialNotch={1} />
				<p className="mt-8 lg:mt-12 text-sm lg:text-base">
					Use the slider or enter a custom amount
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
							{amount.toLocaleString()}{" "}
							<span className="mt-4">
								will serve{" "}
								<Highlight style="small">
									{survivorNumber}&nbsp;
									{survivorNumber > 1 ? "children" : "child"}
								</Highlight>{" "}
								across the Uganda Lighthouse programme for{" "}
								<Highlight style="small">12 months</Highlight>
							</span>
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
					</div>
					<p className="text-sm lg:text-base max-w-[1200px] mb-4 pt-4">
						Questions about the Freedom Foundation or your donation? Email{" "}
						<strong className="text-hfj-red underline">
							{selection.country === "US" ? (
								<a href="mailto:donorsupport.us@hopeforjustice.org">
									donorsupport.us@hopeforjustice.org
								</a>
							) : (
								<a href="mailto:supporters@hopeforjustice.org">
									supporters@hopeforjustice.org
								</a>
							)}
						</strong>{" "}
						and you will hear from us soon!
					</p>
					<p className="text-sm lg:text-base max-w-[1200px]">
						Any donations received above this project’s budget of{" "}
						{currencySymbol}
						{selection.budgetNumber.toLocaleString()} will be reallocated to
						other Hope for Justice projects and costs around the world in the
						service of our mission to end modern slavery and human trafficking.
						The minimum contribution to this project:{" "}
						{selection.country === "US" ? "$1,000" : "£1,000"} Smaller donations
						are gratefully received and will make an enormous difference but
						they cannot be allocated via the Freedom Foundation.
					</p>
				</div>
			</div>
			<div className="h-10 w-full"></div>
		</Container>
	);
}
