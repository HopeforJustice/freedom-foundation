"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Welcome from "./components/Welcome";
import { useSelection } from "./context/SelectionContext";
import MainIntro from "./components/MainIntro";
import PriorityProjects from "./components/PriorityProjects";
import TailoredUpdates from "./components/TailoredUpdates";
import { Suspense } from "react";

export default function Home() {
	const { selection, setSelection } = useSelection();
	const [loading, setLoading] = useState(true);
	const searchParams = useSearchParams();

	// useEffect(() => {
	// 	const name = searchParams.get("name");
	// 	const type = searchParams.get("type");
	// 	const geoOverride = searchParams.get("geoCountry");
	// 	const storedSelection = localStorage.getItem("selection");

	// 	// If there are values in the URL, use them
	// 	if (name || type || geoOverride) {
	// 		const newSelection = {
	// 			...selection,
	// 			name: name || selection.name,
	// 			type: type || selection.type,
	// 			country: geoOverride || selection.country,
	// 		};

	// 		setSelection(newSelection);
	// 		localStorage.setItem("selection", JSON.stringify(newSelection));
	// 		setLoading(false);
	// 		return;
	// 	}

	// 	// Fallback to localStorage only if no values in URL
	// 	if (storedSelection) {
	// 		const parsed = JSON.parse(storedSelection);
	// 		setSelection(parsed);
	// 	}

	// 	setLoading(false);
	// }, [searchParams, setSelection]);

	// if (loading) {
	// 	return null;
	// }

	return (
		<>
			{!selection.name && <Welcome />}
			{selection.name && (
				<>
					<MainIntro />
					<PriorityProjects />
					<TailoredUpdates />
					<div className="h-20 w-full"></div>
				</>
			)}
		</>
	);
}
