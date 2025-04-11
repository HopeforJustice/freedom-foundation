"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { useSelection } from "../context/SelectionContext";

export default function Welcome() {
	const [nameInput, setNameInput] = useState("");
	const [type, setType] = useState(null);
	const { selection, setSelection } = useSelection();
	const [step, setStep] = useState("type"); // 'type' → 'name'

	// Refs for animation
	const containerRef = useRef(null);
	const typeStepRef = useRef(null);
	const nameStepRef = useRef(null);

	useEffect(() => {
		if (step === "name" && nameStepRef.current) {
			gsap.fromTo(
				nameStepRef.current,
				{ opacity: 0, y: 30 },
				{ opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
			);
		}
	}, [step]);

	const handleSelect = (choice) => {
		if (!typeStepRef.current) return;

		// Animate out with GSAP
		gsap.to(typeStepRef.current, {
			opacity: 0,
			y: -50,
			duration: 0.5,
			ease: "power2.out",
			onComplete: () => {
				setType(choice);
				setSelection({ type: choice, name: null });
				setStep("name");
			},
		});
	};

	const handleSubmit = () => {
		// Animate container out
		console.log("submitting");
		gsap.to(containerRef.current, {
			opacity: 0,
			y: -50,
			duration: 0.5,
			onComplete: () => {
				setSelection({ type: type, name: nameInput });
			},
		});
	};

	return (
		<div ref={containerRef} className="animate-fade-in">
			{/* initial welcome and type select */}
			{step === "type" && (
				<div
					ref={typeStepRef}
					className="mt-10 px-4 flex flex-col items-center"
				>
					<p className="font-apercu font-bold text-xl md:text-2xl text-center">
						Welcome to Hope for Justice&apos;s
					</p>
					<Image
						src="./ff-logo.svg"
						width={610}
						height={77}
						alt="Freedom Foundation logo"
						className="w-[402px] md:w-[600px] mt-4 lg:mt-8"
					/>
					<p className="font-apercu font-bold text-xl md:text-2xl text-center mt-20 mb-4 lg:mb-8">
						Please tell us who you are
					</p>
					<div className="flex gap-4 w-full max-w-3xl">
						{/* Individual */}
						<div
							onClick={() => handleSelect("individual")}
							className="cursor-pointer bg-gray-400 aspect-square w-full rounded-lg overflow-clip grid grid-cols-1 grid-rows-1 content-stretch transition-all lg:hover:scale-105"
						>
							<Image
								src="/linkedin-sales-solutions-Mis5fyJi7Q0-unsplash.jpg"
								alt="smiling woman representing an individual"
								width={800}
								height={800}
								className="col-start-1 row-start-1 w-full h-full aspect-square object-cover"
							/>
							<div className="col-start-1 row-start-1 bg-linear-to-t from-black h-1/2 w-full self-end opacity-35"></div>
							<p className="col-start-1 row-start-1 text-white font-bold self-end justify-center text-center z-10 p-2 sm:text-md md:p-4 md:text-xl">
								I&apos;m an individual
							</p>
						</div>
						{/* Organisation */}
						<div
							onClick={() => handleSelect("organisation")}
							className="cursor-pointer bg-gray-400 aspect-square w-full rounded-lg overflow-clip grid grid-cols-1 grid-rows-1 content-stretch transition-all lg:hover:scale-105"
						>
							<Image
								src="/annie-spratt-hCb3lIB8L8E-unsplash.jpg"
								alt="organisation"
								width={800}
								height={800}
								className="col-start-1 row-start-1 w-full h-full aspect-square object-cover"
							/>
							<div className="col-start-1 row-start-1 bg-linear-to-t from-black h-1/2 w-full self-end opacity-35"></div>
							<p className="col-start-1 row-start-1 text-white font-bold self-end justify-center text-center z-10 p-2 sm:text-md md:p-4 md:text-xl">
								I represent an organisation
							</p>
						</div>
					</div>
				</div>
			)}
			{/* name input */}
			{step === "name" && (
				<div
					ref={nameStepRef}
					className="flex w-full flex-col items-center mt-20 md:mt-40 p-4 text-center"
				>
					<p className="text-xl md:text-2xl font-bold mb-8 max-w-[30ch]">
						{type === "individual"
							? "Let's get to know eachother a bit more, what is your first name?"
							: "What is the name of your organisation?"}
					</p>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							handleSubmit();
						}}
						className="flex flex-col items-center text-center"
					>
						<input
							type="text"
							onChange={(e) => setNameInput(e.target.value)}
							placeholder="Answer here"
							className="font-fk text-6xl md:text-6xl lg:text-8xl w-full text-center outline-hidden mb-8"
						/>
						<button
							type="submit"
							className="bg-hfj-red px-8 py-4 text-xl text-white rounded-full font-bold hover:cursor-pointer"
						>
							Submit
						</button>
					</form>
				</div>
			)}
		</div>
	);
}
