

import Image from 'next/image';

type ProjectProps = {
	title: string;
	description: string;
	image: string;
}

const Project = ({ title, description, image }: ProjectProps) => {

	return(
		<div className="my-10">
			<h1 className="text-2xl font-medium">{title}</h1>
			<p className="my-5">{description}</p>

			<Image src={image} alt={title} width={600} height={400} className='rounded-2xl'/>

		</div>
	)

}

export default Project