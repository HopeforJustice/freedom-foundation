import Container from "./Container";
import Image from "next/image";

export default function BoxQuote({ quote, image, author, imageAlt }) {
	return (
		<div className="my-8 md:my-16 lg:my-20">
			<Container>
				{/* box */}
				<div className="bg-white lg:max-w-4xl rounded-lg p-8 mx-auto">
					<p className="text-lg font-bold text-center">{quote}</p>
					{/* author image and text */}
					<div className="flex gap-4 md:gap-8 justify-center w-full items-center md:max-w-md mx-auto mt-8">
						<div className="rounded-full overflow-clip">
							{image && (
								<Image width={80} height={80} src={image} alt={imageAlt} />
							)}
						</div>
						<p className="text-sm md:text-base">{author}</p>
					</div>
				</div>
			</Container>
		</div>
	);
}
