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
		image: "/some-tale-14vAnL75uM4-unsplash.jpg",
		title: "outreach and protection for vulnerable youth in Tennessee",
		altText: "Stock photo of young girl",
		budget: "£268,897",
		budgetNumber: 268897,
		id: "PP1009 Tennessee",
		intro: {
			title: "Together, we can make a life-changing impact",
			text: [
				"By funding Hope for Justice’s work in Middle Tennessee, you can contribute to the safety, wellbeing, and self-sufficiency of people experiencing all forms of human trafficking in underserved, vulnerable young adult populations. Our survivor advocacy program provides emergency support services for young people who have recently escaped or been freed from an exploitative situation. With your funding, this project would help those survivors to access their entitlements, public services and exercise their rights, as well as additional support including access to justice, life skills training, mentoring, and family reunification.",
				"Our outreach teams help to identify victims through outreach to vulnerable populations most likely to be targeted by traffickers, such as the homeless and runaway youth.",
			],
		},
		projectOutcomes: [
			"Serve 25 young adult survivors through personalized advocacy and support.",
			"Reach 70 victims through community outreach.",
			"Mental health assessments and trauma counselling sessions for survivors.",
			"Engage with vulnerable young people and potential victims at 15 community outreach events.",
			"Meet the immediate emergency support needs of 18 young adults and signpost others to appropriate services.",
			"Train 1,000 law enforcement, first responders, and community service providers in trafficking victim identification.",
		],
		link: "/pre-donation",
	};

	if (selection.country === "US") {
		project.budget = "$268,897";
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
				title="You will help young people find freedom from trafficking"
				quote=""
				image="/tn-2.jpg"
				imagePosition="left"
				imageAlt="Image used for illustration purposes."
				imageCredit="Image used for illustration purposes."
				titleTop={true}
			>
				A missing and endangered 14-year-old girl who ran away from home and was
				picked up off the streets by a much older man was safely recovered by
				Hope for Justice because someone had received our training in Tennessee.
				<br></br>
				<br></br>A friend of the girl’s mom knew about the signs of human
				trafficking and the work of Hope for Justice because of this training,
				and told her to contact us. Our investigators quickly established that
				there were many different reasons to believe the girl was at high risk
				of being trafficked. They coordinated with volunteers from among the
				girl’s family and friends to launch a search party, putting up ‘missing’
				posters, canvassing the neighborhood and homeless camps through
				outreach, and reviewing footage from home security cameras and
				surveillance cameras nearby.<br></br>
				<br></br>
				Hope for Justice investigators interviewed more of her friends and
				relatives to get the facts, and scoured online sources to track her
				down.<br></br>
				<br></br>
				After several days of surveillance and research, someone who had seen
				one of the missing persons posters called their sheriff’s office and
				said they had information. Separately, Hope for Justice received
				information about a Facebook message that had also been sent and,
				together with police, recovered the teen and brought her home.<br></br>
				<br></br>
				Hope for Justice established the key facts about who picked her up off
				the streets and why, and learned of other potential victims linked to
				the case. A police department with which we often work closely has now
				opened an official human trafficking investigation, based on this
				intelligence. We cannot share more information publicly while the
				investigation continues and for the protection of the 14-year-old girl.
				We are continuing to support the family.
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
				image=""
				imageAlt=""
				quote="“I recently took your human trafficking course. I believe I have encountered a possible victim. From taking your class, I now see the signs that my juvenile runaway may be a human trafficking victim.”"
				author="Deputy Sheriff"
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
