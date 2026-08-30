import Image from "next/image"

const About = () => {
	return(
		<>

		<h1 className="md:mt-40 mt-20 text-6xl">
			Oliver Lundin
		</h1>


		<Image src="/toyportraitnobg.png" alt="Oliver Lundin" width={512} height={512} />
	

        <p className="mt-5 md:max-w-150 font-sans font-light text-justify">
		Software Engineer based in Stockholm, Sweden.</p>
        <hr className="mt-20 mb-10 border-t-1 border-surface-subtle md:max-w-150" />
		</>
	)
}

export default About
