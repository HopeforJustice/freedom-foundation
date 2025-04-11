import Container from "./Container";
import Highlight from "./Highlight";
import Image from "next/image";

export default function ProjectOutcomes({ outcomes, budget }) {
	return (
		<div className="my-8 md:my-16 lg:my-20">
			<Container>
				<div className="px-4">
					<h2 className="font-fk text-4xl lg:text-6xl mb-8">
						Project Outcomes - <Highlight>What your investment funds</Highlight>
					</h2>
					<p className="my-8 text-xl">
						To fund this project we need to meet the total budgeted costs for
						2025/2026: <span className="font-bold text-hfj-red">{budget}</span>
					</p>
					<ul className="flex flex-wrap gap-4 lg:text-lg w-full">
						{outcomes.map((o, i) => {
							return (
								<li
									key={i}
									className="bg-white rounded-md flex items-start gap-4 p-4 lg:p-6 font-bold w-full lg:basis-[calc(50%-16px)]"
								>
									<Image
										src="/tick.svg"
										alt="tick"
										width={23}
										height={23}
										className="lg:min-w-10"
									/>
									{o}
								</li>
							);
						})}
					</ul>
				</div>
			</Container>
		</div>
	);
}
