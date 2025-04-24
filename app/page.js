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

	//change for preview branch

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
