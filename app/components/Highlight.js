import clsx from "clsx";

export default function Highlight({ children, style = "large" }) {
	return (
		<span
			className={clsx(
				"bg-hfj-red text-left rounded-sm sm:rounded-md box-decoration-clone z-10 relative text-white",
				style === "small" ? "p-1" : "px-1.5 sm:px-3"
			)}
		>
			{children}
		</span>
	);
}
