
type ExperienceProps = {
	title: string;
	organization: string;
	date: string;
	description: string;
	tags: string[];
}

const Experience = ({title, organization, date, description, tags }: ExperienceProps) => {
	return(
		<div className="rounded-sm my-5 max-w-150 space-y-2 hover:bg-gray-200 p-4">
			<h1 className="text-xl">{title}</h1>
			<div className="flex flex-row justify-between">
				<p className="text-gray-500">{organization}</p>
				<p className="text-gray-500">{date}</p>
			</div>
			<p>{description}</p>
			<div className="flex flex-row">
			{tags.map((tag: string, idx: number) => (
				<span key={tag + idx} className='bg-gray-200 mr-3 px-3 rounded-xl font-light'>{tag}</span>
			))}
			</div>
		</div>
	)
}

export default Experience