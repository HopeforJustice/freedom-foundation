import Container from "./Container";
import Image from "next/image";

export default function FreedomFoundationBanner() {
	return (
		<div className="bg-white w-full my-8 md:my-16 lg:my-20">
			<Container>
				<div className="px-4 flex flex-col-reverse md:flex-row gap-4 md:gap-8 text-center md:text-left justify-center items-center py-8">
					<p className="md:w-full md:text-lg">
						When you fund a project like this you become part of Hope for
						Justice&apos;s Freedom Foundation and you know your generosity is
						going directly where you want it and will have an immediate impact.
					</p>
					<div className="flex flex-col items-center gap-2 md:w-full">
						<p>Become part of</p>
						<Image
							width={310}
							height={40}
							src="/ff-logo.svg"
							alt="Freedom Foundation Logo"
							className="w-full max-w-[320px] md:max-w-[400px] lg:max-w-[450px] my-4"
						/>
					</div>
				</div>
			</Container>
		</div>
	);
}
