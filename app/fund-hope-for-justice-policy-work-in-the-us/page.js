"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useSelection } from "../context/SelectionContext";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/Container";
import FreedomFoundationBanner from "../components/FreedomFoundationBanner";
import ProjectHero from "../components/ProjectHero";
import Highlight from "../components/Highlight";
import ProjectIntro from "../components/ProjectIntro";
import ProjectStory from "../components/ProjectStory";
import ProjectOutcomes from "../components/ProjectOutcomes";
import CTABanner from "../components/CTABanner";
import BoxQuote from "../components/BoxQuote";
import GivingDetails from "../components/GivingDetails";

export default function Page() {
	const { selection, setSelection } = useSelection();
	const [loading, setLoading] = useState(true);
	const searchParams = useSearchParams();

	useEffect(() => {
		const name = searchParams.get("name");
		const type = searchParams.get("type");

		if (type && name) {
			setSelection({ name, type });
		}
		setLoading(false);
	}, [searchParams, setSelection]);

	if (loading) {
		return null;
	}

	if (!selection.name) {
		redirect("/");
	}

	const project = {
		image: "/us-1.jpg",
		title: "U.S. policy work that will transform how survivors are treated",
		altText: "Decorative image representing U.S.A",
		budget: "£42,000",
		budgetNumber: 42000,
		id: "FF25 USA Policy",
		intro: {
			title:
				"Fund Hope for Justice’s policy work in the U.S. and make a truly lasting impact ",
			text: [
				"Hope for Justice is seeking urgent financial investment to enable another year of successful interventions on human trafficking policy and legislative issues in state houses and in Washington, D.C. With your support, we can actively change the landscape for survivors across the United States.",
				"Funding our policy work and maintaining our presence on the Hill will allow Hope for Justice to continue to change lives for survivors by advocating for bills that change the landscape for survivor relief, allowing them to re-enter society in a meaningful way.",
			],
		},
		projectOutcomes: [
			"$2,500 funds one roundtable event",
			"$3,500 funds one month of policy work",
			"$42,000 funds one year of policy work",
			"Help share best practice with anti-trafficking colleagues around the world",
			"Ensure survivor-focused legislation comes into force at the State and Federal level",
			"Ensure our vital messages are heard at the global level too, at the U.N. Office on Drugs & Crime, the OSCE, Interpol and the Commission on Crime Prevention and Criminal Justice",
		],
		link: "/pre-donation",
	};

	if (selection.country === "US") {
		project.budget = "$42,000";
	}
	return (
		// page wrapper
		<div className="animate-fade-in">
			<ProjectHero
				donorName={selection.name}
				donorType={selection.type}
				image={project.image}
				altText={project.altText}
				title={project.title}
				link={project.link}
				projectId={project.id}
				budgetNumber={project.budgetNumber}
				alternateHeadingText="make a transformational change in the response to human trafficking "
			/>
			<ProjectIntro title={project.intro.title} text={project.intro.text} />
			<FreedomFoundationBanner />
			<ProjectStory
				title="You will help ensure survivor-focused legislation comes into force"
				quote=""
				image="/us-policy-1.jpg"
				imagePosition="right"
				smallTitle={true}
				imageAlt="Image used for illustration purposes"
				imageCredit="Image used for illustration purposes"
			>
				Our policy and advocacy on Capitol Hill are informed by our frontline
				experiences as human trafficking investigators, engaging with victims
				and survivors every single day. We know the barriers they face and the
				changes to state and federal legislation that could make their recovery
				smoother and that could prevent trafficking in the first place. Our
				policy work is also informed by our expertise as trainers and educators
				who work with law enforcement, healthcare workers, schools, banks and
				everyday people who might come into contact with victims.
				<br></br>
				<br></br>
				In recent months, Hope for Justice’s endorsement of the Strengthening
				Child Exploitation Enforcement Act was welcomed by its introducers, U.S.
				Senators John Cornyn (R-TX) and Cory Booker (D-NJ) and Representatives
				Troy Nehls (TX-22) and Madeleine Dean (PA-04).
				<br></br>
				<br></br>
				We have been instrumental in pushing forward the Trafficking Survivors
				Relief Act (TSRA), which Hope for Justice has recently been introduced
				to Congress. Philanthropic funding for our policy work enabled Hope for
				Justice to secure stakeholders for the TSRA Coalition letter, which we
				headed. Our support and endorsement was quoted by the Members of
				Congress introducing the bill, with our support noted by CNN Politics
				and other media organizations.
				<br></br>
				<br></br>
				Separately, the Frederick Douglass Trafficking Victims Protection Act
				passed the House with our support. The legislation was authored by Rep.
				Chris Smith (R-New Jersey), who quoted Hope for Justice’s support and
				endorsement and values us as a partner and a “major anti-trafficking
				organization”. Our close involvement in these two major bills was only
				possible thanks to philanthropic funding for our policy work, which also
				enabled us to host Senate roundtables in Washington, D.C. This level of
				influence translates to media interest and opportunities too, helping to
				shape the national conversation and to get more people pushing their own
				representatives for positive change in the response to human
				trafficking.
			</ProjectStory>
			<ProjectOutcomes
				outcomes={project.projectOutcomes}
				budget={project.budget}
			/>
			<CTABanner
				title="Make a life-changing impact today!"
				color="red"
				link={project.link}
				buttonText="Take the next step"
				projectId={project.id}
				budgetNumber={project.budgetNumber}
				projectTitle={project.title}
			/>
			<BoxQuote
				image="/ng-1.jpg"
				imageAlt="Hope for Justice Global Ambassador and Co-Founder, Natalie Grant"
				quote="“Every single one of us, no matter who you are, no matter where you’re from, no matter whether you have a platform or you are just serving your family, every single one of us can do something to make a difference.”"
				author="Hope for Justice Global Ambassador and Co-Founder, Natalie Grant"
			/>
			<GivingDetails budget={project.budget} projectTitle={project.title} />
			<CTABanner
				title="Make a life-changing impact today!"
				color="white"
				link={project.link}
				buttonText="Take the next step"
				projectId={project.id}
				budgetNumber={project.budgetNumber}
				projectTitle={project.title}
			/>
			<p className="text-sm my-4 w-full px-4 text-center">
				*Names and images changed to protect identities
			</p>
			<div className="h-20"></div>
		</div>
	);
}
