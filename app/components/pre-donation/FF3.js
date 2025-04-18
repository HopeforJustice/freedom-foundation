"use client";
import { useEffect, useState } from "react";
import { useSelection } from "../../context/SelectionContext";
import Container from "../../components/Container";
import Highlight from "../../components/Highlight";
import RangeSlider from "../../components/RangeSlider";

export default function FF3({ loading, setLoading }) {
	const { selection, setSelection } = useSelection();

	const [amount, setAmount] = useState(1000);
	const [monthNumber, setMonthNumber] = useState(1);
	const [survivorNumber, setSurvivorNumber] = useState(1);

	// for imsa calcs
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

	return (
		<Container>
			<div className="px-4 mt-10">
				<p className="font-bold mb-4 lg:text-xl">
					{selection.type === "individual"
						? `${selection.name}, you are funding:`
						: `${selection.name} is funding:`}
				</p>
				<h1 className="text-4xl xs:text-5xl xl:text-7xl xl:max-w-[1000px] leading-tight font-fk text-white mb-8 text-balance">
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
								<Highlight style="small">
									{survivorNumber}{" "}
									{survivorNumber > 1 ? "survivors" : "survivor"}
								</Highlight>{" "}
								for{" "}
								<Highlight style="small">
									{monthNumber} {monthNumber > 1 ? "months" : "month"}
								</Highlight>
							</span>
						</p>
					)}
					{amount >= selection.budgetNumber && (
						<p className="text-xl font-bold">
							£{amount.toLocaleString()} will fund this entire project for{" "}
							<Highlight style="small">1 year</Highlight>
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
