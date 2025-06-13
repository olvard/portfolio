
import ImageCard from './ImageCard';

type ProjectProps = {
	title: string;
	description: string;
	image: string;
	link: string;
	tags: string[];
}

const Project = ({ title, description, image, link, tags }: ProjectProps) => {

	return(
		<div className="my-5">
			<h1 className="text-2xl font-medium">{title}</h1>
			<p className="my-3 max-w-150 font-light">{description}</p>

			<ImageCard imageUrl={image} link={link} tags={tags}/>

		</div>
	)

}

export default Project