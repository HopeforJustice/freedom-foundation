"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSelection } from "../context/SelectionContext";
import Container from "../components/Container";
import Highlight from "../components/Highlight";
import RangeSlider from "../components/RangeSlider";

export default function Page() {
	const { selection, setSelection } = useSelection();
	// console.log(selection);

	const [loading, setLoading] = useState(true);
	const [amount, setAmount] = useState(1000);
	const [monthNumber, setMonthNumber] = useState(1);
	const [survivorNumber, setSurvivorNumber] = useState(1);
	const searchParams = useSearchParams();

	useEffect(() => {
		const storedSelection = localStorage.getItem("selection");

		const name = searchParams.get("name");
		const type = searchParams.get("type");

		// Only set if we *don't* already have this data
		if (type && name && (!selection.name || !selection.type)) {
			const newSelection = { ...selection, name, type };
			setSelection(newSelection);
			localStorage.setItem("selection", JSON.stringify(newSelection));
		}

		if (storedSelection) {
			const parsed = JSON.parse(storedSelection);
			setSelection(parsed);
			setLoading(false);
			return;
		}

		setLoading(false);
	}, [searchParams, setSelection, selection.name, selection.type]);

	useEffect(() => {
		if (amount === 4000) {
			setMonthNumber(2);
			setSurvivorNumber(2);
		} else if (amount === 9000) {
			setMonthNumber(3);
			setSurvivorNumber(3);
		} else if (amount === 16000) {
			setMonthNumber(4);
			setSurvivorNumber(4);
		} else if (amount === 36000) {
			setMonthNumber(6);
			setSurvivorNumber(6);
		} else if (amount >= 1000) {
			const MAX_MONTHS = 12;
			const MAX_SURVIVORS = 30;
			const COST_PER_UNIT = 1000;

			let bestMonths = 1;
			let bestSurvivors = 1;
			let maxUsedAmount = 0;

			for (let months = MAX_MONTHS; months >= 1; months--) {
				let survivors = Math.floor(amount / (months * COST_PER_UNIT));
				survivors = Math.min(survivors, MAX_SURVIVORS);

				const usedAmount = survivors * months * COST_PER_UNIT;

				if (
					survivors >= 1 &&
					usedAmount <= amount &&
					usedAmount > maxUsedAmount
				) {
					bestMonths = months;
					bestSurvivors = survivors;
					maxUsedAmount = usedAmount;
				}
			}

			setMonthNumber(bestMonths);
			setSurvivorNumber(bestSurvivors);
		} else {
			setMonthNumber(1);
			setSurvivorNumber(1);
		}
	}, [amount]);

	if (loading) {
		return null;
	}

	const handleSliderChange = (value) => {
		switch (value) {
			case 1:
				value = 1000;
				break;
			case 2:
				value = 4000;
				break;
			case 3:
				value = 9000;
				break;
			case 4:
				value = 16000;
				break;
			case 5:
				value = 36000;
				break;
			case 6:
				value = selection.budgetNumber;
				break;
		}
		setAmount(value);
		console.log(amount);
	};
	if (!selection.projectTitle) {
		return null;
	}
	return (
		<Container>
			<div className="px-4 mt-10">
				<p className="font-bold mb-4 lg:text-xl">
					{selection.type === "individual"
						? `${selection.name}, you are funding:`
						: `${selection.name} is funding:`}
				</p>
				<h1 className="text-4xl xs:text-5xl xl:text-7xl leading-tight font-fk text-white mb-8 text-balance">
					<Highlight>
						{selection.projectTitle.charAt(0).toUpperCase() +
							selection.projectTitle.slice(1)}
					</Highlight>
				</h1>
				<h2 className="font-fk text-3xl xs:text-4xl xl:text-5xl my-4 mb-6">
					How much impact do you want to make?
				</h2>
				<RangeSlider handleSliderChange={handleSliderChange} initialNotch={1} />
				<p className="mt-8 text-sm">Use the slider or enter a custom amount</p>
				<div className="mt-4 border border-gray-300 rounded-lg bg-white max-w-[150px]">
					<input
						className="w-full h-full font-fk text-5xl outline-none"
						type="text"
						value={amount ? `£${amount.toLocaleString()}` : ""}
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
							£{amount.toLocaleString()}{" "}
							<span className="mt-4">
								will enable Independent Modern Slavery Advocacy for{" "}
								<Highlight>
									{survivorNumber}{" "}
									{survivorNumber > 1 ? "survivors" : "survivor"}
								</Highlight>{" "}
								for{" "}
								<Highlight>
									{monthNumber} {monthNumber > 1 ? "months" : "month"}
								</Highlight>
							</span>
						</p>
					)}
					{amount >= selection.budgetNumber && (
						<p className="text-xl font-bold">
							£{amount.toLocaleString()} will fund this entire project for{" "}
							<Highlight>1 year</Highlight>
						</p>
					)}
					{amount < 1000 && (
						<p className="text-xl font-bold">
							The minimum contribution to this project: £1,000. Smaller
							donations are gratefully received and will make an enormous
							difference but they cannot be allocated via the Freedom
							Foundation.
						</p>
					)}
				</div>
			</div>
		</Container>
	);
}
