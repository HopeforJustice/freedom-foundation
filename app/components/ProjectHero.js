import Image from "next/image";
import Container from "./Container";
import Link from "next/link";

export default function ProjectHero({
	donorName,
	donorType,
	image,
	altText,
	title,
	link,
}) {
	return (
		<Container>
			<h1 className="text-3xl xs:text-4xl sm:text-5xl xl:text-7xl font-fk px-4 mb-4 mt-4 md:text-center md:mt-10 md:mb-6 xl:mb-12 xl:mt-12">
				With help from {donorType === "individual" && <span>you </span>}
				<span className="capitalize">{donorName}</span>, we can:
			</h1>
			<div className="md:grid md:grid-cols-1 md:grid-rows-1 md:px-4">
				<div className="w-full aspect-video lg:aspect-2/1 overflow-clip px-1 md:px-0 md:col-start-1 md:row-start-1">
					<Image
						width={1600}
						height={800}
						src={image}
						alt={altText}
						className="w-full h-full object-cover rounded-lg lg:rounded-xl"
					/>
				</div>

				{/* text content */}
				<div className="md:col-start-1 md:row-start-1 self-end md:flex md:gap-4 md:p-4 lg:p-8">
					{" "}
					<div className="-mt-24 sm:-mt-32 md:mt-0 px-4 md:px-0 md:flex md:flex-col md:justify-end">
						{/* live appeal tag */}
						<div className="rounded-md bg-hfj-white gap-2 items-center px-1.5 py-0.5 @sm:px-2 justify-self-start self-start inline-flex w-auto mb-2">
							<div className="relative w-2.5 h-2.5">
								<div className="absolute top-0 left-0 w-2.5 h-2.5 bg-red-500 rounded-full"></div>
								<div className="absolute top-0 left-0 w-2.5 h-2.5 bg-red-500 animate-ping rounded-full"></div>
							</div>

							<div className="font-bold font-apercu mt-0.5 text-xs md:text-sm lg:text-base">
								LIVE APPEAL
							</div>
						</div>
						{/* title */}
						<h2 className="text-4xl xs:text-5xl xl:text-7xl leading-tight font-fk text-white text-balance justify-end">
							<span className="bg-hfj-red px-1.5 text-left rounded-sm sm:rounded-md sm:px-3 box-decoration-clone">
								Fund {title}
							</span>
						</h2>
					</div>
					{/* next step content */}
					<div className="rounded-lg mx-4 p-4 md:self-end sm:p-6 sm:text-center xl:text-lg md:mx-0 bg-white mt-4 font-apercu font-bold md:max-w-[360px] lg:max-w-[420px]">
						<p className="">
							Make a life changing impact today and become part of Freedom
							Foundation
						</p>
						<Link
							href={link}
							className="w-full block bg-hfj-black rounded-sm text-center text-white px-2.5 py-1.5 md:py-2 mt-4"
						>
							Take the next step
						</Link>
					</div>
				</div>
			</div>
		</Container>
	);
}
