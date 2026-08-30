
import Link from "next/link"

type ExperienceProps = {
	title: string;
	organization: string;
	date: string;
	description: string;
	tags: string[];
	link?: string;
}


const Experience = ({ title, organization, date, description, tags, link }: ExperienceProps) => {
	const content = (
		<div className="rounded-sm my-5 md:max-w-150 space-y-2 hover:border hover:border-orange-300 p-4">
			<h1 className="text-xl">{title}</h1>
			<div className="flex flex-row justify-between">
				<p className="text-[#d6a457] font-sans">{organization}</p>
				<p className="text-[#b46c3d] font-sans">{date}</p>
			</div>
			<p className="font-light font-sans text-justify">{description}</p>
			<div className="flex flex-row flex-wrap">
				{tags.map((tag: string, idx: number) => (
					<span key={tag + idx} className="bg-black border border-pink-300 mr-3 px-3 rounded-xl text-blue-300 font-sans">
						{tag}
					</span>
				))}
			</div>
		</div>
	);

	return link ? (
		<Link href={link} target="_blank" rel="noopener noreferrer">
			{content}
		</Link>
	) : (
		content
	);
};

export default Experience