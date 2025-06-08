
type TagBarProps = {
	tags: string[];
}

const TagBar = ({ tags }: TagBarProps) => {
	return (
	  <div className="absolute bottom-0 w-full bg-white bg-opacity-90 px-4 py-3 flex flex-row">
		
		{tags.map((tag: string, idx: number) => (
			<span key={tag + idx} className='bg-gray-100 rounded-xl px-3 mr-5 font-light'>{tag}</span>
		))}
		  
        </div>	
	)
}

export default TagBar