import Container from "./Container";
import Link from "next/link";

export default function CTABanner({ title, color, buttonText, link }) {
	const bg = color === "red" ? "bg-hfj-red" : "bg-white";
	const titleColor = color === "red" ? "text-white" : "text-hfj-black";
	const buttonColor = color === "red" ? "bg-white" : "bg-hfj-red";
	const buttonTextColor = color === "red" ? "text-hfj-black" : "text-white";
	return (
		<div className={`w-full my-8 md:my-16 lg:my-20 ${bg}`}>
			<Container>
				<div className="flex flex-wrap gap-4 lg:gap-8 px-4 py-6 items-center w-full justify-center">
					<h2
						className={`${titleColor} text-4xl lg:text-6xl font-fk text-center`}
					>
						{title}
					</h2>
					<Link
						className={`${buttonColor} ${buttonTextColor} rounded-[60px] px-4 py-2 lg:px-6 lg:py-3 font-bold shadow lg:text-lg`}
						href={link}
					>
						{buttonText}
					</Link>
				</div>
			</Container>
		</div>
	);
}
