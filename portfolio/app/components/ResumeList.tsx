
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

	return(
		<div className="flex flex-col mt-40">
			<h1 className="text-5xl">Experience</h1>
			{experienceData.experiences.map((experience: Experience, idx: number) => (
				<Experience 
					title={experience.title} 
					organization={experience.organization} 
					date={experience.date}
					description={experience.description}
					tags={experience.tags}
					link={experience.link}
	
					key={idx} />
			))}
		</div>
	)
}

export default ResumeList