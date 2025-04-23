"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const SelectionContext = createContext();

export function SelectionProvider({ children, country }) {
	const [loading, setLoading] = useState(true);
	const [selection, setSelection] = useState({
		type: null,
		name: null,
		country: country,
	});

	const searchParams = useSearchParams();

	useEffect(() => {
		const name = searchParams.get("name");
		const type = searchParams.get("type");
		const geoOverride = searchParams.get("geoCountry");
		const storedSelection = localStorage.getItem("selection");

		// Start from current or stored selection
		let newSelection = storedSelection
			? { ...JSON.parse(storedSelection) }
			: { ...selection };

		// Apply geo override if present
		if (geoOverride) {
			newSelection.country = geoOverride;
		}

		// Apply name/type if present in URL (overrides localStorage)
		if (name) {
			newSelection.name = name;
		}
		if (type) {
			newSelection.type = type;
		}

		// If any values were set from URL or storage, save and apply them
		if (geoOverride || name || type || storedSelection) {
			setSelection(newSelection);
			localStorage.setItem("selection", JSON.stringify(newSelection));
		}

		setLoading(false);
	}, [searchParams, setSelection]);

	console.log(selection);
	if (loading) {
		return null;
	}
	return (
		<SelectionContext.Provider value={{ selection, setSelection }}>
			{children}
		</SelectionContext.Provider>
	);
}

export function useSelection() {
	return useContext(SelectionContext);
}
