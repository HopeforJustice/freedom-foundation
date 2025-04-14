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

	if (loading) {
		return null;
	}

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
