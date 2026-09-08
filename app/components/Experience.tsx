
import Link from "next/link"
import PixelCard from "./PixelCard"

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
		<PixelCard
			variant="pink"
			noFocus={Boolean(link)}
			className="my-5 max-w-160 bg-surface"
		>
			<div className="relative z-10 flex h-full w-full flex-col justify-center space-y-2 p-6">
				<h1 className="text-xl">{title}</h1>
				<div className="flex flex-row justify-between gap-3">
					<p className="font-sans text-accent-yellow">{organization}</p>
					<p className="font-sans text-accent-orange">{date}</p>
				</div>
				{description && <p className="font-sans text-justify font-light">{description}</p>}
				<div className="flex flex-row flex-wrap">
					{tags.map((tag: string, idx: number) => (
						<span key={tag + idx} className="mr-3 rounded-xl border px-3 font-sans text-accent-fg">
							{tag}
						</span>
					))}
				</div>
			</div>
		</PixelCard>
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
