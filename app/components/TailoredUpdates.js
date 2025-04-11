import { useSelection } from "../context/SelectionContext";
import Image from "next/image";

export default function TailoredUpdates() {
	const { selection } = useSelection();
	return (
		<>
			<div className="max-lg:flex-col flex w-full items-center max-w-(--max) mx-auto gap-4 mt-16 lg:mt-28 px-4 mb-20">
				{/* text */}
				<div className="w-full">
					<h2 className="font-fk text-5xl text-center mb-6 lg:text-6xl">
						Tailored updates for{" "}
						<span className="capitalize">{selection.name}</span>
					</h2>
					<p className="text-center mb-8 max-w-2xl text-balance mx-auto lg:text-xl">
						You will receive updates on the impact of your gift and the progress
						of your chosen project. You or your organization will also receive a
						special thank you gift. Most importantly, you will have made an
						amazing contribution to the cause of ending modern-day slavery and
						human trafficking.
					</p>
				</div>
				{/* images */}
				<div className="rounded-lg w-full flex flex-col items-center relative lg:scale-110">
					{/* phone */}
					<div className="h-[500px] overflow-clip w-full max-w-[320px]">
						<Image
							src="/ff-logo.svg"
							alt=""
							width={200}
							height={100}
							className="absolute top-[60px] left-1/2 -translate-x-1/2 w-[60%] max-w-[200px]"
						/>
						<Image
							src="/Hope-for-Justice-outreach-worker.jpg"
							alt=""
							width={410}
							height={273}
							className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[calc(100%-10.5vw)] max-w-[285px] h-[120px] object-cover object-top"
						/>
						<Image
							src="/phone.svg"
							alt=""
							width={452}
							height={903}
							className="w-full"
						/>
						<div className="bg-hfj-red w-[calc(100%-10.5vw)] max-w-[285px] absolute top-[220px] left-1/2 -translate-x-1/2 font-apercu text-white font-bold text-center text-sm px-2 py-4">
							<p>
								{selection.type === "individual" ? (
									<span>
										Without you{" "}
										<span className="capitalize">{selection.name}</span>, this
										work would not have been possible!
									</span>
								) : (
									<span>
										Without <span className="capitalize">{selection.name}</span>
										, this work would not have been possible!
									</span>
								)}
							</p>
						</div>
					</div>
					{/* gradient */}
					<div className="h-1/2 bg-linear-to-t from-hfj-white absolute bottom-0 w-full"></div>
					{/* slides */}
					<div className="w-full z-10 aspect-video max-w-[400px] mx-auto absolute top-[300px] lg:-translate-x-1/12 before:w-full before:h-full before:bg-white before:absolute before:top-[10px] before:left-[10px] before:block before:rounded-md before:overflow-clip before:border-gray-200 before:border before:shadow after:w-full after:h-full after:bg-white after:absolute after:top-[20px] after:left-[20px] after:block after:rounded-md after:overflow-clip after:border-gray-200 after:border after:shadow after:-z-10">
						<div className="bg-hfj-black relative aspect-video mx-auto rounded-md shadow overflow-clip">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 480 93.724"
								className="w-full absolute -top-0.5 left-1 pointer-events-none"
							>
								<path
									id="Path_17221"
									data-name="Path 17221"
									d="M3742.694-11990.287s7.632-40.784-112.343-64.216-367.559-29.508-367.559-29.508h479.9Z"
									transform="translate(-3262.791 12084.011)"
									fill="#fff"
								/>
							</svg>
							<p className="text-white w-full text-center absolute top-[60px] text-sm font-apercu">
								Impact slides for{" "}
								<span className="capitalize">{selection.name}</span>
							</p>
							<p className="text-white font-fk text-4xl px-20 absolute top-[90px] text-center w-full">
								See the impact you have made this quarter
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
