"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSelection } from "../context/SelectionContext";
import Container from "../components/Container";
import Highlight from "../components/Highlight";
import RangeSlider from "../components/RangeSlider";
import { redirect } from "next/navigation";
import IMSA from "../components/pre-donation/IMSA";
import UgandaLH from "../components/pre-donation/UgandaLH";
import USPolicy from "../components/pre-donation/USPolicy";
import DonateViaButtons from "../components/pre-donation/DonateViaButtons";

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

	const PP1028DeborahAmounts = [
		{ amount: 2000, reason: "Will (reason A PP1028)" },
		{ amount: 5000, reason: "Will (reason B PP1028)" },
		{ amount: 10000, reason: "Will (reason C PP1028)" },
		{ amount: 20000, reason: "Will (reason D PP1028)" },
		{ amount: 50000, reason: "Will (reason D PP1028)" },
	];

	const PP1010MidwestAmounts = [
		{ amount: 2000, reason: "Will (reason A PP1010)" },
		{ amount: 5000, reason: "Will (reason B PP1010)" },
		{ amount: 10000, reason: "Will (reason C PP1010)" },
		{ amount: 20000, reason: "Will (reason D PP1010)" },
		{ amount: 50000, reason: "Will (reason D PP1010)" },
	];

	const PP1009TennesseeAmounts = [
		{ amount: 2000, reason: "Will (reason A PP1010)" },
		{ amount: 5000, reason: "Will (reason B PP1010)" },
		{ amount: 10000, reason: "Will (reason C PP1010)" },
		{ amount: 20000, reason: "Will (reason D PP1010)" },
		{ amount: 50000, reason: "Will (reason D PP1010)" },
	];

	return (
		<>
			{selection.projectId === "PP1006 Advocacy" && (
				<IMSA loading={loading} setLoading={setLoading} />
			)}
			{selection.projectId === "PP1018 Uganda" && (
				<UgandaLH loading={loading} setLoading={setLoading} />
			)}
			{selection.projectId === "FF25 USA Policy" && (
				<USPolicy loading={loading} setLoading={setLoading} />
			)}
			{selection.projectId === "PP1028 Deborah" && (
				<DonateViaButtons
					amounts={PP1028DeborahAmounts}
					givingTo={`fund ${selection.projectTitle} via Hope for Justice's Freedom Foundation.`}
					defaultReason={"Will... (default reason PP1028)"}
				/>
			)}
			{selection.projectId === "PP1010 Midwest" && (
				<DonateViaButtons
					amounts={PP1010MidwestAmounts}
					givingTo={`fund ${selection.projectTitle} via Hope for Justice's Freedom Foundation.`}
					defaultReason={"Will... (default reason PP1010)"}
				/>
			)}
			{selection.projectId === "PP1009 Tennessee" && (
				<DonateViaButtons
					amounts={PP1009TennesseeAmounts}
					givingTo={`fund ${selection.projectTitle} via Hope for Justice's Freedom Foundation.`}
					defaultReason={"Will... (default reason PP1009)"}
				/>
			)}
		</>
	);
}
