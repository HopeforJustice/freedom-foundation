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
		image: "/interview-statement-police-woman-victim--AdobeStock_245201824.jpg",
		title: "victim identification and support in the Midwest",
		altText: "Stock photo of police with woman",
		budget: "£207,205",
		budgetNumber: 207205,
		id: "ff-6",
		intro: {
			title: "Together, we can make a life-changing impact",
			text: [
				"The Hope for Justice Iowa Regional Center covers the Midwest region and has a strong track record of identifying victims of human trafficking, locating them and getting them to safety. We share our cases and intelligence with law enforcement and prosecutors to ensure the criminals are brought to justice.",
				"With your help we can continue to find survivors of human trafficking and get them back home to their families whilst bringing the perpetrators to justice.",
			],
		},
		projectOutcomes: [
			"15 additional victims identified in a 12-month period and 50 survivors referred to other service providers for long-term support.",
			"Survivors’ immediate needs are met and they are supported with decision-making.",
			"Community members and practitioners in the Midwest are more prepared to tackle trafficking.",
			"Rising number of tips and referrals/intelligence leading to victim identification; all incoming referrals are responded to and every tip investigated for legitimacy, with all legitimate tips followed up.",
			"Survivors supported in their journey to justice through the criminal justice system, with Hope for Justice providing evidence-gathering and expert testimony.",
			"Survivor screenings and onward referrals to specialized services where necessary.",
		],
		link: "/pre-donation",
	};
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
			/>
			<ProjectIntro title={project.intro.title} text={project.intro.text} />
			<FreedomFoundationBanner />
			<ProjectStory
				title="You will help girls like Naomi*"
				quote=""
				image="/naomi-stock.jpg"
				imagePosition="left"
				imageAlt="Image used for illustration purposes."
				imageCredit="Image used for illustration purposes."
				titleTop={true}
			>
				Naomi*, in her 30s and from north-east Iowa, told our investigator over
				the phone that she needed help. Her traffickers knew where she was
				staying. She was scared they’d come for her, but she was too traumatized
				and disoriented to trust law enforcement. She was worried she might be
				arrested or have things dug up from her past. She needed another way out
				of exploitation and away from the dangerous men who were controlling
				her.<br></br>
				<br></br>
				Hope for Justice arranged a safe meeting place and brought along a
				victim services specialist. Together, we made sure Naomi got safe
				shelter, clothing, food and other vital services.<br></br>
				<br></br>
				Her trust in our team grew. As she became more comfortable, Naomi
				courageously shared her experiences with us. We were able to support her
				as she told an FBI agent assigned to her case what had happened to her,
				a conversation she said that she would never have agreed to without our
				support.<br></br>
				<br></br>
				During this conversation, she named and identified her traffickers and
				also agreed to meet with a local law enforcement agent if we would
				accompany her.<br></br> <br></br>
				This was an incredibly brave step, given her trauma. Naomi provided
				critical evidence, including a timeline of events, locations, witness
				details and the names of other victims. Hope for Justice has continued
				to support Naomi. She is getting aftercare services and is moving
				forward in her ongoing recovery. We recently handed this case over to
				the U.S. Attorney’s Office for further investigation and prosecution.
				<br></br>
				<br></br>
				<strong>
					With your investment and support, we can help more victims like Naomi
					become survivors and advocates in their own communities.
				</strong>
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
			/>
			<ProjectStory
				title="Hope for Justice works to investigate potential human trafficking cases and identify victims."
				quote=""
				smallTitle={true}
				image="/david.jpg"
				imagePosition="right"
				imageAlt="Pictured: David Gonzalez"
				imageCredit="Pictured: David Gonzalez"
			>
				Hope for Justice’s team of investigators in the Midwest has strong
				relationships with law enforcement and often accepts referrals for cases
				that they do not have the resources to investigate. The investigations
				team works closely with other partners and organizations to refer
				victims once identified.<br></br>
				<br></br>
				Midwest team leader David Gonzalez has over 30 years of combined
				military and law enforcement experience. As a detective, he worked sex
				crimes (adult and children), violent crime, major cases, cold-case
				homicides, and trafficking investigations.<br></br>
				<br></br>
				He led his team at federal, state and local law enforcement levels in
				cross-state sex trafficking and labor trafficking investigations. He has
				multiple awards for this from the Iowa governor, the U.S. Attorney’s
				Office and federal government, and two “Law Enforcement Officer of the
				Year” awards for his investigations.<br></br>
				<br></br>
				<strong>
					David’s team co-ordinates closely with other Hope for Justice teams at
					our other Regional Centers and around the world, and with our
					survivor-focused advocacy and support workers.
				</strong>
			</ProjectStory>
			<BoxQuote
				image="/iowa.svg"
				imageAlt="Iowa Department of Public Safety’s Division of Intelligence and Fusion Center logo"
				quote="“Partnering with Hope for Justice will allow us to help more law enforcement agencies identify traffickers and help those who need it the most.”"
				author="Amy Veon, Criminal Intelligence Analyst at Iowa Department of Public Safety’s Division of Intelligence and Fusion Center"
			/>
			<GivingDetails budget={project.budget} />
			<CTABanner
				title="Make a life-changing impact today!"
				color="white"
				link={project.link}
				buttonText="Take the next step"
				projectId={project.id}
				budgetNumber={project.budgetNumber}
			/>
			<p className="text-sm my-4 w-full px-4 text-center">
				*Names and images changed to protect identities
			</p>
			<div className="h-20"></div>
		</div>
	);
}
