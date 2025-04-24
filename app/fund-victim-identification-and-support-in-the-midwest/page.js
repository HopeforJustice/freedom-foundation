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
		budget: "£240,944",
		budgetNumber: 240944,
		id: "PP1010 Midwest",
		intro: {
			title: "Together, we can make a life-changing impact",
			text: [
				"The Hope for Justice Iowa Regional Center covers the Midwest region and has a strong track record of identifying victims of human trafficking, locating them and getting them to safety. We share our cases and intelligence with law enforcement and prosecutors to ensure the criminals are brought to justice.",
				"With your help we can take a stand against human trafficking. We can identify victims, support survivors and prevent exploitation.",
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

	if (selection.country === "US") {
		project.budget = "$240,944";
		project.budgetNumber = 240944;
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
			/>
			<ProjectIntro title={project.intro.title} text={project.intro.text} />
			<FreedomFoundationBanner />
			<ProjectStory
				title="You will help survivors like Naomi*"
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
				Naomi provided critical evidence, including a timeline of events,
				locations, witness details and the names of other victims. Hope for
				Justice has continued to support Naomi. She is getting aftercare
				services and is moving forward in her ongoing recovery.
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
				projectTitle={project.title}
			/>
			<ProjectStory
				title="Hope for Justice works to investigate potential human trafficking cases and identify victims."
				quote=""
				smallTitle={true}
				image="/iowa-training.jpg"
				imagePosition="right"
				imageAlt="Hope for Justice sharing key messages about the risks of online exploitation with students and faculty at schools in Cass County, Iowa"
				imageCredit="Hope for Justice sharing key messages about the risks of online exploitation with students and faculty at schools in Cass County, Iowa"
			>
				Hope for Justice’s team of investigators in the Midwest has strong
				relationships with law enforcement and often accepts referrals for cases
				that they do not have the resources to investigate. The investigations
				team works closely with other partners and organizations to refer
				victims once identified.<br></br>
				<br></br>
				The team also provide training and education, including awareness
				sessions at schools to ensure students know about the risks of online
				enticement and online sexual exploitation. Approximately 2 in 5 victims
				of sex trafficking in the U.S.A are recruited online, according to data
				from the Department of Justice. That makes online platforms – including
				social media, gaming sites and messaging apps – the most common place
				for victim recruitment. The topics we cover include online safety,
				recognizing safe relationships, managing peer pressure and navigating
				social media.
				<br></br>
				<strong>
					Our Midwest team co-ordinates closely with other Hope for Justice
					teams at our other Regional Centers and around the world, and with our
					survivor-focused advocacy and support workers.
				</strong>
			</ProjectStory>
			<BoxQuote
				image="/iowa.svg"
				imageAlt="Iowa Department of Public Safety’s Division of Intelligence and Fusion Center logo"
				quote="“Partnering with Hope for Justice will allow us to help more law enforcement agencies identify traffickers and help those who need it the most.”"
				author="Amy Veon, Criminal Intelligence Analyst at Iowa Department of Public Safety’s Division of Intelligence and Fusion Center"
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
