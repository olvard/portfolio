import projectData from "../assets/projects.json"
import Project from "./Project";


type Project = {
	title: string;
	description: string;
	imageUrl: string;
};

const ProjectGallery = () => {
	return (
		<div className="flex flex-col">
			{projectData.projects.map((project: Project, idx: number) => (
				<Project title={project.title} description={project.description} image={project.imageUrl} key={idx} />
			))}
		</div>
	)
}

export default ProjectGallery