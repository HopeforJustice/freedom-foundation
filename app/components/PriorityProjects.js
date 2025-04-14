import { useSelection } from "../context/SelectionContext";
import Image from "next/image";
import Link from "next/link";

export default function PriorityProjects() {
	const { selection } = useSelection();
	const projects = [
		{
			title: "Fund aftercare for child survivors of human trafficking",
			link: "/fund-aftercare-for-child-survivors-of-human-trafficking",
			img: "/boy-thinking-aged-9-12.jpg",
			altText: "Boy thinking",
			contentReady: true,
		},
		{
			title: "Fund independent advocacy for survivors of modern slavery",
			link: "/fund-independent-advocacy-for-survivors-of-modern-slavery",
			img: "/HFJ-53.jpg",
			altText: "Independant modern slavery advocacy worker",
			contentReady: true,
		},
		{
			title:
				"Fund U.S. policy work that will transform how survivors are treated",
			link: "/fund-hope-for-justice-policy-work-in-the-us",
			img: "/us-1.jpg",
			altText: "Decorative image representing U.S.A",
			contentReady: false,
		},

		{
			title: "Fund outreach and protection for vulnerable youth in Tennessee",
			link: "/fund-outreach-and-protection-for-vulnerable-youth-in-tennessee",
			img: "/some-tale-14vAnL75uM4-unsplash.jpg",
			altText: "Stock photo of young girl",
			contentReady: true,
		},
		{
			title: "Fund safe shelter and care for exploited children in Ethiopia",
			link: "/fund-safe-shelter-and-care-for-exploited-children-in-ethiopia",
			img: "/childreninAddis.jpg",
			altText: "Happy Children in Addis",
			contentReady: false,
		},

		{
			title: "Fund victim identification and support in the Midwest",
			link: "/fund-victim-identification-and-support-in-the-midwest",
			img: "/interview-statement-police-woman-victim--AdobeStock_245201824.jpg",
			altText: "Stock photo of police with woman",
			contentReady: true,
		},
	];
	return (
		<div className="flex flex-col items-center px-4 mt-10 sm:mt-14 md:mt-18 lg:mt-22 animate-fade-in">
			<h2 className="text-3xl font-fk xs:text-4xl lg:text-5xl xl:text-6xl mb-6 lg:mb-12">
				Priority projects you could help fund:
			</h2>
			<div className="w-full flex-wrap grid grid-cols-12 gap-4 max-w-[1680px]">
				{projects.map((p) => {
					if (!p.contentReady) {
						return null;
					}
					return (
						<Link
							href={p.link}
							key={p.title}
							className="@container group hover:cursor-pointer relative rounded-lg bg-hfj-black col-span-12 lg:col-span-6 grid overflow-clip aspect-[1/0.55]"
						>
							{/* Image */}
							<Image
								src={p.img}
								width={822}
								height={427}
								alt={p.altText}
								className="w-full h-full lg:group-hover:scale-105 transition-all absolute top-0 left-0 object-cover row-start-1 col-start-1"
							/>
							{/* content */}
							<div className="p-2 @md:p-4 relative row-start-1 col-start-1 flex flex-col justify-between items-start">
								{/* live appeal tag */}
								<div className="rounded-md bg-hfj-white gap-2 items-center px-1.5 py-0.5 @sm:px-2 justify-self-start inline-flex w-auto">
									<div className="relative w-2.5 h-2.5">
										<div className="absolute top-0 left-0 w-2.5 h-2.5 bg-red-500 rounded-full"></div>
										<div className="absolute top-0 left-0 w-2.5 h-2.5 bg-red-500 animate-ping rounded-full"></div>
									</div>

									<div className="font-bold font-apercu mt-0.5 text-sm @sm:text-base">
										LIVE APPEAL
									</div>
								</div>
								{/* title */}
								<h3 className="text-3xl @sm:text-4xl @lg:text-5xl leading-tight @2xl:text-6xl font-fk text-white text-balance justify-end">
									<span className="bg-hfj-red px-1.5 text-left rounded-sm @lg:rounded-md @lg:px-3 box-decoration-clone">
										{p.title}
									</span>
								</h3>
							</div>
							{/* arrow svg */}
							<div className="w-3 @lg:w-5 right-6 self-center justify-self-end absolute">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-full"
									viewBox="0 0 22.982 39.364"
								>
									<path
										id="Path_17236"
										data-name="Path 17236"
										d="M19.574,22.982a3.9,3.9,0,0,1-2.727-1.109L.964,6.4A3.682,3.682,0,0,1,1.13,1.261,3.937,3.937,0,0,1,6.41,1.1L19.574,13.916,32.776,1.1a3.935,3.935,0,0,1,5.458,0,3.684,3.684,0,0,1,0,5.311L22.32,21.88A3.9,3.9,0,0,1,19.574,22.982Z"
										transform="translate(0 39.364) rotate(-90)"
										fill="#fff"
									/>
								</svg>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
