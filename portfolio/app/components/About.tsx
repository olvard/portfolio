import Image from "next/image"

const About = () => {
	return(
		<section className="flex min-h-screen w-full flex-col items-center justify-center px-3 text-center">

		<h1 className="text-6xl">
			Oliver Lundin
		</h1>


		<Image className="max-w-full h-auto" src="/toyportraitnobg.png" alt="Oliver Lundin" width={512} height={512} />
	

        <p className="mt-5 max-w-150 font-sans font-light">
		Software Engineer based in Stockholm, Sweden.</p>
        <hr className="mt-20 mb-10 w-full max-w-150 border-t-1 border-surface-subtle" />
		</section>
	)
}

export default About
