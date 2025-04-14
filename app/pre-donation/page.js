"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSelection } from "../context/SelectionContext";
import Container from "../components/Container";
import Highlight from "../components/Highlight";
import RangeSlider from "../components/RangeSlider";
import { redirect } from "next/navigation";
import FF3 from "../components/pre-donation/FF3";

export default function Page() {
	const { selection, setSelection } = useSelection();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const storedSelection = localStorage.getItem("selection");

		if (storedSelection) {
			const parsed = JSON.parse(storedSelection);
			setSelection(parsed);
			setLoading(false);
			return;
		}

		setLoading(false);
	}, [setSelection]);

	if (loading) {
		return null;
	}
	if (
		!selection.projectTitle ||
		!selection.projectId ||
		!selection.budgetNumber ||
		!selection.name ||
		!selection.type
	) {
		redirect("/");
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

	return (
		<>
			{selection.projectId === "ff-3" && (
				<FF3 loading={loading} setLoading={setLoading} />
			)}
		</>
	);
}
