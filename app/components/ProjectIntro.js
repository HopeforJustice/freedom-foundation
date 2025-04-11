import Container from "./Container";

export default function ProjectIntro({ title, text }) {
	return (
		<Container>
			<div className="max-w-5xl my-8 md:my-16 lg:my-20 px-4">
				<h2 className="font-fk text-3xl sm:text-4xl xl:text-5xl mb-4 lg:mb-8 lg:mt-12">
					{title}
				</h2>
				{text.map((t, i) => {
					if (i == 0) {
						return (
							<p key={i} className="mb-4 md:text-lg">
								{t}
							</p>
						);
					} else {
						return (
							<p key={i} className="mb-4 md:text-lg">
								<strong>{t}</strong>
							</p>
						);
					}
				})}
			</div>
		</Container>
	);
}
