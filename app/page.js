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
		const name = searchParams.get("name");
		const type = searchParams.get("type");

		if (type && name) {
			setSelection({ name, type });
		}
		setLoading(false);
	}, [searchParams, setSelection]);

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
