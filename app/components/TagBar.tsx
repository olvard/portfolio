import Image from 'next/image';

type TagBarProps = {
	tags: string[];
}

const TagBar = ({ tags }: TagBarProps) => {
	return (
	  <div className="absolute bottom-0 w-full bg-surface-raised/90 backdrop-blur-md border border-surface-subtle px-4 py-3 flex flex-row">
		
		{tags.map((tag: string, idx: number) => (
			<span key={tag + idx} className='bg-surface-subtle text-foreground rounded-xl px-3 mr-5 font-light font-sans'>{tag}</span>
		))}

		<Image src="github.svg" alt="github logo" width={20} height={20} className='absolute right-5'/>
		  
        </div>	
	)
}

export default TagBar
