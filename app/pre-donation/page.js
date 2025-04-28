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
import EthiopiaLH from "../components/pre-donation/EthiopiaLH";

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

	//
	const PP1010MidwestAmounts = [
		{
			amount: 2000,
			reason:
				"will provide ten survivors with emergency hotel stays and overnight necessities like food, clothes, and hygiene products upon immediate exit of their trafficking situation.",
		},
		{
			amount: 5000,
			reason:
				"will fund a full year of vehicle expenses for investigators. Vehicles are critical for surveillance and survivor care. This cost includes gas, maintenance, and insurance.",
		},
		{
			amount: 10000,
			reason:
				"will provide full investigative services for 10 survivors, including costs for surveillance, case management software, and investigator time.",
		},
		{
			amount: 20000,
			reason:
				"will fund 12 sessions of two-day training to different groups of law enforcement, first responders, or critical stakeholders on spotting the signs and responding to human trafficking.",
		},
		{
			amount: 50000,
			reason:
				"will aid in the launch of a new survivor care arm for our Midwest program",
		},
	];

	const PP1009TennesseeAmounts = [
		{
			amount: 2000,
			reason:
				"will provide ten survivors with emergency hotel stays and overnight necessities like food, clothes, and hygiene products upon immediate exit of their trafficking situation.",
		},
		{
			amount: 5000,
			reason:
				"will fund a full year of vehicle expenses for investigators. Vehicles are critical for surveillance and survivor care. This cost includes gas, maintenance, and insurance.",
		},
		{
			amount: 10000,
			reason:
				"will provide full investigative services for 10 survivors, including costs for surveillance, case management software, and investigator time.",
		},
		{
			amount: 20000,
			reason:
				"will fund 12 sessions of two-day training to different groups of law enforcement, first responders, or critical stakeholders on spotting the signs and responding to human trafficking.",
		},
		{
			amount: 268897,
			reason:
				"will fund this entire program for one year, changing young lives forever.",
		},
	];

	let baseDonateUrl;
	const nextEnv = process.env.NEXT_PUBLIC_ENV;
	if (nextEnv === "production") {
		baseDonateUrl = "https://donate.hopeforjustice.org";
	} else if (nextEnv === "preview") {
		baseDonateUrl =
			"https://donation-app-git-preview-hope-for-justice.vercel.app";
	} else {
		baseDonateUrl = "http://localhost:3001";
	}

	return (
		<>
			{selection.projectId === "PP1006 Advocacy" && (
				<IMSA
					loading={loading}
					setLoading={setLoading}
					baseDonateUrl={baseDonateUrl}
				/>
			)}
			{selection.projectId === "PP1018 Uganda" && (
				<UgandaLH
					loading={loading}
					setLoading={setLoading}
					baseDonateUrl={baseDonateUrl}
				/>
			)}
			{selection.projectId === "FF25 USA Policy" && (
				<USPolicy
					loading={loading}
					setLoading={setLoading}
					baseDonateUrl={baseDonateUrl}
				/>
			)}
			{selection.projectId === "PP1028 Deborah" && (
				<EthiopiaLH
					loading={loading}
					setLoading={setLoading}
					baseDonateUrl={baseDonateUrl}
				/>
			)}
			{selection.projectId === "PP1010 Midwest" && (
				<DonateViaButtons
					amounts={PP1010MidwestAmounts}
					baseDonateUrl={baseDonateUrl}
					givingTo={`fund ${selection.projectTitle} via Hope for Justice's Freedom Foundation.`}
					defaultReason={`will go directly towards funding ${selection.projectTitle}`}
				/>
			)}
			{selection.projectId === "PP1009 Tennessee" && (
				<DonateViaButtons
					amounts={PP1009TennesseeAmounts}
					baseDonateUrl={baseDonateUrl}
					givingTo={`fund ${selection.projectTitle} via Hope for Justice's Freedom Foundation.`}
					defaultReason={`will go directly towards funding ${selection.projectTitle}`}
				/>
			)}
		</>
	);
}
