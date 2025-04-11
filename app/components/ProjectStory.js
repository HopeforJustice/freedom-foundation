import Container from "./Container";
import Highlight from "./Highlight";
import Image from "next/image";
import clsx from "clsx";

export default function ProjectStory({
	title,
	quote,
	imagePosition,
	image,
	imageCredit,
	imageAlt,
	children,
	titleTop = false,
	smallTitle = false,
}) {
	if (imagePosition === "right") {
		return (
			<Container>
				<div className="my-8 md:my-16 lg:my-20">
					<div className="xl:grid xl:grid-cols-2 xl:grid-rows-[auto_1fr] xl:gap-x-12 xl:mt-40">
						<div className="flex flex-col justify-start items-start z-20 relative xl:col-start-1 xl:self-start xl:-mr-[200px] xl:-mt-20">
							<h2
								className={clsx(
									"mx-4 leading-tight font-fk text-white text-balance justify-end",
									smallTitle
										? "text-2xl xs:text-3xl lg:text-5xl xl:text-6xl"
										: "text-4xl xs:text-5xl lg:text-6xl xl:text-8xl"
								)}
							>
								<Highlight>{title}</Highlight>
							</h2>
							{quote && (
								<div className="bg-white rounded-md mx-4 p-4 font-bold text-sm sm:text-base md:text-lg lg:text-xl lg:p-6 md:max-w-4/5 xl:max-w-11/12 mt-2">
									<p>{quote}</p>
								</div>
							)}
						</div>

						<div className="w-[calc(100%-8px)] md:w-full rounded-md overflow-clip -mt-4 z-10 ml-1 flex aspect-video relative xl:col-start-2 xl:col-end-2 xl:row-span-2 xl:max-[1536px]:-mr-[32px] min-[1536px]:-mr-[calc((100vw-1536px+64px)/2)] xl:h-full xl:max-h-[750px] xl:aspect-auto xl:w-auto">
							<Image
								src={image}
								width={800}
								height={800}
								alt={imageAlt}
								className="w-full h-full object-cover object-center"
							/>
							<div className="text-xs bg-hfj-black justify-self-start text-white px-2 py-1 absolute bottom-0 left-0">
								{imageCredit}
							</div>
						</div>

						<p className="px-4 mt-4 md:mt-8 lg:text-lg w-full xl:col-start-1 self-start">
							{children}
						</p>
					</div>
				</div>
			</Container>
		);
	}
	if (imagePosition === "left") {
		return (
			<Container>
				<div className="my-8 md:my-16 lg:my-20">
					<div className="xl:grid xl:grid-cols-2 xl:grid-rows-[auto_1fr] xl:gap-x-12">
						<div
							className={clsx(
								"flex flex-col justify-start items-start xl:items-end z-20 relative xl:col-start-1 xl:-mr-9 xl:-mb-4",
								titleTop
									? "xl:items-start xl:justify-self-start xl:-mt-9 xl:row-start-1 xl:col-span-2 xl:ml-0"
									: "xl:self-end xl:justify-self-end xl:row-start-2"
							)}
						>
							<h2 className="mx-4 text-4xl xs:text-5xl lg:text-6xl xl:text-8xl leading-tight font-fk text-white text-balance justify-end">
								<Highlight>{title}</Highlight>
							</h2>
							{quote && (
								<div className="bg-white rounded-md mx-4 p-4 font-bold text-sm sm:text-base md:text-lg lg:text-xl lg:p-6 md:max-w-4/5 xl:max-w-3/5 mt-2">
									<p>{quote}</p>
								</div>
							)}
						</div>

						<div className="w-[calc(100%-8px)] md:w-full rounded-md overflow-clip -mt-4 z-10 ml-1 flex aspect-video relative xl:col-start-1 xl:row-span-2 xl:row-start-1 xl:max-[1536px]:-ml-[32px] min-[1536px]:-ml-[calc((100vw-1536px+64px)/2)] xl:h-full xl:max-h-[750px] xl:aspect-auto xl:w-auto xl:mt-0">
							<Image
								src={image}
								width={800}
								height={800}
								alt="stock image"
								className="w-full h-full object-cover object-center"
							/>
							<div className="text-xs bg-hfj-black justify-self-start text-white px-2 py-1 absolute bottom-0 left-0">
								{imageCredit}
							</div>
						</div>

						<p
							className={clsx(
								"px-4 mt-4 md:mt-8 lg:text-lg w-full xl:col-start-2 self-start",
								titleTop && "xl:mt-12"
							)}
						>
							{children}
						</p>
					</div>
				</div>
			</Container>
		);
	}
}
