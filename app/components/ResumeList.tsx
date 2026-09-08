
import experienceData from "../assets/resume.json"
import Experience from "./Experience";


const ResumeList = () => {

	type Experience = {
		title: string;
		organization: string;
		date: string;
		description: string;
		tags: string[];
		link?: string;
	};

	return (
		<div className="mt-40 flex w-[calc(100%-2rem)] max-w-160 flex-col">
			<h1 className="text-5xl">Experience</h1>
			{experienceData.experiences.map((experience: Experience) => (
				<Experience
					title={experience.title}
					organization={experience.organization}
					date={experience.date}
					description={experience.description}
					tags={experience.tags}
					link={experience.link}

					key={`${experience.organization}-${experience.title}`} />
			))}
		</div>
	)
}

export default ResumeList
