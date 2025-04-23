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
		console.log(selection);
		console.log("no name");
		redirect("/");
	}

	const project = {
		image: "/HFJ-53.jpg",
		title: "independent advocacy for survivors of modern slavery",
		altText: "Independant modern slavery advocacy worker",
		budget: "£251,398",
		budgetNumber: 251398,
		id: "PP1006 Advocacy",
		intro: {
			title: "Together, we can make a life-changing impact",
			text: [
				"Hope for Justice UK has provided independent advocacy to survivors for over ten years, taking a survivor-centred and holistic approach and responding to what survivors have asked for: a single point of trust. Our Independent Modern Slavery Advocates, or IMSAs, are trained experts who consider each survivor’s social needs and legal rights.",
				"With your help we can continue to advocate for them as they try to understand and navigate the complex systems they face during their recovery from trafficking, empowering them to make informed decisions. ",
			],
		},
		projectOutcomes: [
			"Independent Modern Slavery Advocacy for 30 survivors each month.",
			"All survivors to receive individual support and a needs & risk assessment.",
			"Mental health assessments and trauma counselling sessions for survivors.",
			"All survivors to have an appointed IMSA to act as a co-ordinating focal point for all involved professionals and services during their recovery.",
			"Provision of work readiness, training, English language lessons and/or education to improve survivors’ long-term financial stability and reduce the risk of retrafficking for them and their dependents.",
			"Provision of essential items and emergency support to meet basic needs and prevent destitution and re-trafficking (food vouchers, clothing, footwear, toiletries, mobile phone & top-ups, translation services, transport, and emergency accommodation).",
			"Survivors informed about their legal rights and entitlements, and more able to access these.",
		],
		link: "/pre-donation",
	};

	if (selection.country === "US") {
		project.budget = "$251,398";
	}

	console.log("selection", selection);
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
				title="You will help people like Stefan*"
				quote="“When we arrived at the house, everybody had a bed, apart from me. I had to sleep on pieces of cardboard on the floor in the kitchen.”"
				image="/imsa-1.jpg"
				imagePosition="right"
				imageAlt="Image used for illustration purposes - credit invisible people Rory Carnegie"
				imageCredit="Image used for illustration purposes - credit invisible people Rory Carnegie"
			>
				Stefan grew up in orphanages and spent time living on the streets, and
				was exploited in Romania and Bulgaria for forced labour from 2013. He
				was physically and verbally abused, then targeted by a trafficker. He
				thought his life would improve with the good job he was promised, but it
				turned out he had been recruited to beg on the streets and was forced to
				hand over any money he collected. The trafficker controlled everything,
				even where he lived. “I didn’t want to go, but he told me I had to, and
				I was too scared to turn him down,” Stefan said later.
				<br></br>
				<br></br>He managed to escape and was put in contact with Hope for
				Justice. Our Advocates helped ensure he had somewhere to live and helped
				him manage his council tax and bills. We advocated on his behalf for
				debts associated with his time in exploitation and recovery to be
				reduced or wiped, and helped him get new ID to be able to access
				employment. We helped him with food parcels when he was not able to
				work, with access to health services, and helped him apply to the
				Criminal Injuries Compensation Authority.
			</ProjectStory>
			<ProjectStory
				title="Stefan* Says"
				quote="“I feel good, I feel happy – I wouldn’t have known what to do without Hope for Justice’s help.”"
				image="/imsa-2.jpg"
				imagePosition="left"
				imageAlt="Image used for illustration purposes"
				imageCredit="Image used for illustration purposes"
			>
				Stefan* has received a ‘conclusive grounds’ decision, which means he is
				formally recognised as a victim of modern slavery by the UK Government.
				He got help with this and other legal matters from Carita Thomas, a
				solicitor from legal charity ATLEU. She said:
				<br></br>
				<br></br>
				<strong>
					“Hope for Justice have been amazing. They were able to use expert
					knowledge of trafficking and what recovery requires… Their
					representations as independent modern slavery advocates were essential
					to build the legal case and I could not have achieved any result
					without them.”
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
			<BoxQuote
				image="/asc.jpg"
				imageAlt="Eleanor Lyons, UK Independent Anti-Slavery Commissioner"
				quote="“This programme is a great example of a collaborative approach that places survivors’ needs at the heart of it. The IMSAs’ advocacy work for victims and survivors of the most appalling crimes of modern slavery and human trafficking is so important. The IMSAs demonstrate a model that works, and it is essential that more victims and survivors have access to the programme.”"
				author="Eleanor Lyons, UK Independent Anti-Slavery Commissioner"
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
