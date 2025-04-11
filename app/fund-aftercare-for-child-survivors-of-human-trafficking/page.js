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
		budget: "£207,205",
		intro: {
			title: "Together, we can make a life-changing impact",
			text: [
				"Hope for Justice Lighthouses in Uganda’s capital city, Kampala, have for many years offered a place of safety and healing for child survivors of trafficking and those most vulnerable to being targeted. In the Lighthouse, children get critical services such as healthcare, catch-up education, psychosocial support and life skills, before we seek to safely reintegrate them into families and communities.",
				"With your help we can continue to advocate for them as they try to understand and navigate the complex systems they face during their recovery from trafficking, empowering them to make informed decisions.",
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
		link: "#",
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
			/>
			<ProjectIntro title={project.intro.title} text={project.intro.text} />
			<FreedomFoundationBanner />
			<ProjectStory
				title="You will help people like Alumu*"
				quote=""
				image="/alumu-1.jpg"
				imagePosition="left"
				imageAlt="Image used for illustration purposes"
				imageCredit="Image used for illustration purposes"
				titleTop={true}
			>
				16-year-old Alumu just wanted to go to school and spend time with her
				friends, but sadly what was happening to her at home was making that
				impossible. Her uncle was abusing her trust in him, and exploiting her
				repeatedly for sex. She understood that what was being done to her was
				wrong and a violation, and she bravely reported it. Thankfully, the
				police intervened and he was arrested.
				<br></br>
				<br></br>
				Alumu was referred to a Hope for Justice Lighthouse for care and
				protection. She received trauma-informed care services including
				psychosocial support, business skills training, life skills and
				healthcare information, as well as education on human trafficking. She
				also began vocational training with a partner organisation, to pursue
				her passion in tailoring.
				<br></br>
				<br></br>
				<strong>
					When Hope for Justice social workers spoke with her family, some
					relatives made it clear the young girl was not welcome home.
				</strong>
				<br></br>
				<br></br>
				They couldn’t understand why she would report her uncle and believed she
				ought to have stayed quiet. Hope for Justice realized that unfortunately
				her community might shun her for exposing her uncle’s crimes to the
				world, and because of the stigma and shame that still persist in that
				community about matters to do with sexual abuse.
				<br></br>
				<br></br>
				So, knowing that it might no longer be safe for her there, last summer
				Hope for Justice took her to live with her stepmother instead, who
				promised her a loving and safe home. Alumu was overjoyed, and she is now
				a self-employed tailor and still living with her stepmother. During a
				recent follow-up visit, they were provided support with
				income-generation activities, to improve their financial stability and
				resilience. Alumu aspires to expand her business and buy the land for
				them to have their own house.
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
			/>
			<BoxQuote
				image="/global-fund.svg"
				imageAlt="Independent case study commissioned by the Global Fund to End Modern Slavery"
				quote="“[The Lighthouse teams are] highly engaged, knowledgeable … and … dedicated to incorporating trauma-informed care into their everyday work with survivors of human trafficking and exploitation.”"
				author="Independent case study commissioned by the Global Fund to End Modern Slavery"
			/>
			<GivingDetails budget={project.budget} />
			<CTABanner
				title="Make a life-changing impact today!"
				color="white"
				link={project.link}
				buttonText="Take the next step"
			/>
			<p className="text-sm my-4 w-full px-4 text-center">
				*Names and images changed to protect identities
			</p>
			<div className="h-20"></div>
		</div>
	);
}
