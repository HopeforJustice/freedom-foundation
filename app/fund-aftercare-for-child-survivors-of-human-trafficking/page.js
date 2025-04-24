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
		image: "/boy-thinking-aged-9-12.jpg",
		title: "aftercare for child survivors of human trafficking",
		altText: "boy thinking",
		budget: "£169,957",
		budgetNumber: 169957,
		id: "PP1018 Uganda",
		intro: {
			title: "Together, we can make a life-changing impact",
			text: [
				"Hope for Justice Lighthouse in Uganda’s capital city, Kampala, has for many years offered a place of safety and healing for child survivors of trafficking and those most vulnerable to being targeted. In the Lighthouse, children get critical services such as healthcare, catch-up education, psychosocial support and life skills, before we seek to safely reintegrate them into families and communities.",
				"With your help, we can reunite more children with their families and give each child the care they need.",
			],
		},
		projectOutcomes: [
			"250 children served across the Uganda Lighthouse programme in 12 months.",
			"Every child is helped to return to education at an appropriate level if this is in their best interest.",
			"Every child taught how best to keep safe against the risk of further exploitation and abuse..",
			"Every child has improved wellbeing (physical, emotional, psychosocial and spiritual).",
			"Provision of work readiness, training, English language lessons and/or education to improve survivors’ long-term financial stability and reduce the risk of retrafficking for them and their dependents.",
			"Every child’s legal rights are protected, and they are helped to access legal support wherever possible.",
			"Every child to be reintegrated from the Lighthouse to a safe family setting as soon as possible, or (where appropriate and in their interests) helped to live safely and independently in the community with sustainable employment.",
			"Every child to receive follow-up visits from our team.",
		],
		link: "/pre-donation",
	};
	if (selection.country === "US") {
		project.budget = "$225,975";
		project.budgetNumber = 225975;
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
				title="You will help children like Alumu*"
				quote=""
				image="/alumu-1.jpg"
				imagePosition="left"
				imageAlt="Image used for illustration purposes"
				imageCredit="Image used for illustration purposes"
				titleTop={true}
			>
				Among those helped at our Lighthouses was 16-year-old Alumu, sexually
				abused and trafficked by her own uncle. She understood that what was
				being done to her was wrong and a violation, and she bravely reported
				it. She received trauma-informed care, support and protection at our
				Lighthouse, plus medical treatment and a chance to process what had
				happened to her. <br></br>
				<br></br>But when it was time for her to move on, sadly her community
				shunned her for having exposing her uncle&apos;s crimes to the world.
				They believed she ought to have stayed quiet, and our social workers
				knew it was unsafe for her in that community. Instead, we tracked down
				her stepmother, who was happy to take her in. Alumu has been living
				happily there and is now a self-employed tailor, using business skills
				she learned while in our care. She is proof that our past does not have
				to define our future. Alumu&apos;s story is just one of many. Every
				year, we support thousands of people like Alumu on their journey to
				freedom and recovery.
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
				image="/global-fund.svg"
				imageAlt="Independent case study commissioned by the Global Fund to End Modern Slavery"
				quote="“[The Lighthouse teams are] highly engaged, knowledgeable … and … dedicated to incorporating trauma-informed care into their everyday work with survivors of human trafficking and exploitation.”"
				author="Independent case study commissioned by the Global Fund to End Modern Slavery"
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
