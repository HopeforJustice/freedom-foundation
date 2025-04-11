export default function Container({ children }) {
	return (
		<div className="md:px-8 lg:max-w-6xl xl:max-w-(--max) mx-auto">
			{children}
		</div>
	);
}
