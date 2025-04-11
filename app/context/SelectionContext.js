"use client";
import { createContext, useContext, useState } from "react";

const SelectionContext = createContext();

export function SelectionProvider({ children }) {
	const [selection, setSelection] = useState({ type: null, name: null });
	return (
		<SelectionContext.Provider value={{ selection, setSelection }}>
			{children}
		</SelectionContext.Provider>
	);
}

export function useSelection() {
	return useContext(SelectionContext);
}
