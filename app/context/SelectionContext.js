"use client";
import { createContext, useContext, useState } from "react";

const SelectionContext = createContext();

export function SelectionProvider({ children, country }) {
	const [selection, setSelection] = useState({
		type: null,
		name: null,
		country: country,
	});
	return (
		<SelectionContext.Provider value={{ selection, setSelection }}>
			{children}
		</SelectionContext.Provider>
	);
}

export function useSelection() {
	return useContext(SelectionContext);
}
