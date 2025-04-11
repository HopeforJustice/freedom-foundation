export default function Highlight({ children }) {
	return (
		<span className="bg-hfj-red px-1.5 text-left rounded-sm sm:rounded-md sm:px-3 box-decoration-clone z-10 relative text-white">
			{children}
		</span>
	);
}
