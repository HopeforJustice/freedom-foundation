"use client";

import Image from "next/image";
import { useSelection } from "../context/SelectionContext";
import Link from "next/link";

export default function Header() {
	const { selection, setSelection } = useSelection();
	return (
		<>
			<div className="w-full p-2 xs:p-4 flex justify-between relative z-10 items-center lg:items-start">
				<Link href="https://hopeforjustice.org" target="_blank">
					<Image
						src="./hfj-logo.svg"
						alt="logo for Hope for Justice"
						width={226}
						height={67.72}
						className="w-[130px] xxs:w-[160px] xs:w-[180px] md:w-[200px] lg:w-[226px]"
					/>
				</Link>
				{selection.type && (
					<Link href="/">
						<Image
							src="./ff-logo.svg"
							width={310}
							height={39}
							alt="Freedom Foundation logo"
							className="w-[130px] xxs:w-[170px] xs:w-[195px] md:w-[310px] animate-fade-in"
						/>
					</Link>
				)}
			</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 480 93.724"
				className="w-full absolute top-0 left-0 pointer-events-none"
			>
				<path
					id="Path_17221"
					data-name="Path 17221"
					d="M3742.694-11990.287s7.632-40.784-112.343-64.216-367.559-29.508-367.559-29.508h479.9Z"
					transform="translate(-3262.791 12084.011)"
					fill="#fff"
				/>
			</svg>
		</>
	);
}
