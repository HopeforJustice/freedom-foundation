import { useSelection } from "../context/SelectionContext";

export default function MainIntro() {
	const { selection } = useSelection();
	return (
		<div className="w-full flex-col flex items-center px-4 animate-fade-in mt-10 md:mt-20 lg:mt-30">
			<h1 className="font-fk text-4xl xs:text-5xl md:text-6xl xl:text-8xl text-center max-w-[30ch] mb-4 md:mb-8 lg:mb-12">
				<span className="capitalize">{selection.name}</span>
				{selection.type === "organisation"
					? " can make an immediate 'impact that helps survivors of trafficking by funding one of our priority projects"
					: ", you can make an immediate impact on survivors of trafficking by funding one of our priority projects"}
			</h1>
			<p className="font-apercu max-w-[50ch] text-center md:text-xl lg:text-2xl">
				And by doing so, you would become part of Hope for Justice&apos;s
				Freedom Foundation, a community of the most committed donors, who give
				directly to specific projects and get tailored updates on the difference
				they are making.
			</p>
		</div>
	);
}
