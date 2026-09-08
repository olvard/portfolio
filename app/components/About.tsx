import Image from "next/image"
import Dither from "./Dither"

const About = () => {
	return (
		<section className="relative isolate flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-3 text-center">
			<Dither waveFrequency={3.5} waveAmplitude={0.2} waveSpeed={0.02} waveColor={[0.55, 0.00, 0.01]} opacity={0.65} mouseRadius={0.2} />
			<div className="relative z-10 flex flex-col items-center">

				<h1 className="text-6xl">
					Oliver Lundin
				</h1>


				<Image priority className="max-w-full h-auto" src="/toyportraitnobg.png" alt="Oliver Lundin" width={512} height={512} />


				<p className="mt-5 max-w-150 font-sans font-light">
					Software Engineer based in Stockholm, Sweden.</p>
				{/* <hr className="mt-20 mb-10 w-full max-w-150 border-t-1 border-surface-subtle" /> */}
				<div className="w-full max-w-150 flex flex-row items-center justify-center gap-3">
					<p className="mt-5 max-w-150 font-sans text-accent-red">oliver.lundin@live.se</p>
					<a className="mt-5 max-w-150 font-sans text-accent-red" href="https://github.com/olvard">GitHub</a>
					<a className="mt-5 max-w-150 font-sans text-accent-red" href="https://www.linkedin.com/in/oliverlundin/">LinkedIn</a>
				</div>
			</div>
		</section >
	)
}

export default About
