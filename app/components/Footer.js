"use client";
import React from "react";
import Container from "./Container";
import { useSelection } from "../context/SelectionContext";

const Footer = () => {
	const { selection, setSelection } = useSelection();
	const handleResetSelection = () => {
		setSelection({});
		// Clear local storage
		localStorage.removeItem("selection");
	};
	if (!selection.name) {
		return null; // Don't render the footer if name is not set
	}
	return (
		<footer className="w-full mt-20 py-10 text-sm bg-hfj-black text-hfj-white">
			<Container>
				<div className="px-4">
					Freedom Foundation is part of{" "}
					<a
						className="text-hfj-red underline"
						href="https://hopeforjustice.org"
					>
						Hope for Justice
					</a>
					, Hope for Justice is a 501(c)(3) not for profit organization in the
					USA. All gifts received are tax deductible as charitable contributions
					for federal income tax purposes (EIN 75-3179471). | Hope for Justice
					is a registered charity in England & Wales (no. 1126097) and in
					Scotland (no. SC045769), and a company limited by guarantee,
					registered in England and Wales, number 6563365. Registered office: 30
					Old Bailey, London, EC4M 7AU. |{" "}
					<a
						className="text-hfj-red underline"
						href="#"
						onClick={handleResetSelection}
					>
						Reset Selection
					</a>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
