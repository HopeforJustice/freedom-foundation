import Container from "./Container";
import { useState } from "react";
import clsx from "clsx";

export default function GivingDetails({ budget }) {
	const [showDetails, setShowDetails] = useState(true);
	const handleShowDetails = () => {
		setShowDetails(!showDetails);
	};
	return (
		<div className="my-8 md:my-16 lg:my-20">
			<Container>
				<div className="px-4 text-center">
					<h2 className="text-4xl lg:text-6xl font-fk mb-4">
						Give with Confidence
					</h2>
					<p className="mb-4 text-lg max-w-4xl mx-auto">
						To fund this project we need to meet the total budgeted costs for
						2025/2026: <span className="text-hfj-red">{budget}</span>
					</p>
					<p className="opacity-50 text-lg">
						<span className="lg:hidden">Tap</span>
						<span className="lg:inline-block hidden">Click</span> the graphic
						see how the funds will be allocated.
					</p>
					<div className="flex flex-col md:flex-row max-w-6xl mx-auto my-8 gap-4 hover:cursor-pointer md:h-[150px] lg:h-[200px]">
						<div
							onClick={handleShowDetails}
							className={clsx(
								"bg-[#F39315] flex gap-2 lg:gap-8 w-full rounded-lg items-center justify-center text-white p-4 lg:p-8 transition-all",
								showDetails ? "md:w-[80%]" : "md:w-[20%]"
							)}
						>
							<h3 className="text-6xl font-fk lg:text-8xl">90%</h3>
							{showDetails && (
								<p className="animate-fade-in max-w-[500px] text-sm lg:text-lg font-bold">
									A minimum of 90 percent of your donation will go directly to
									funding this project for survivors of modern slavery in
									Uganda.
								</p>
							)}
						</div>
						<div
							onClick={handleShowDetails}
							className={clsx(
								"bg-[#5CAA7F] flex gap-2 lg:gap-8 w-full rounded-lg items-center justify-center text-white p-4 lg:p-8 transition-all",
								showDetails ? "md:w-[20%]" : "md:w-[80%]"
							)}
						>
							<h3 className="text-6xl lg:text-8xl font-fk">10%</h3>
							{!showDetails && (
								<p className="animate-fade-in max-w-[500px] font-bold text-sm lg:text-lg ">
									The remaining 10 percent support costs to enable safe and
									sustainable operations (including administration, security,
									equipment, oversight and governance)
								</p>
							)}
						</div>
					</div>

					<p className="mb-8 text-lg max-w-4xl mx-auto">
						Any donations received above this project’s budget will be relocated
						to other Hope for Justice projects and costs around the world in the
						service of our mission to end modern-day slavery.
					</p>
					<p className="mb-4 text-sm max-w-4xl mx-auto">
						<strong>The minimum contribution to this project: £1,000.</strong>{" "}
						Smaller donations are gratefully received and will make an enormous
						difference but they cannot be allocated via the Freedom Foundation.
					</p>
				</div>
			</Container>
		</div>
	);
}
