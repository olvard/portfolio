import Link from "next/link"
import Image from "next/image";

const ContactCard = () => {
	return(
		<div className="md:h-screen bg-gray-100 flex">
			<div className="md:mt-40 mt-20 h-fit bg-white/30 backdrop-blur-md border border-white/20 
			rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center justify-between md:max-w-150 w-full relative overflow-hidden">
				
				{/* Background Effect */}
				<div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 opacity-30 pointer-events-none"></div>
				
				{/* Left Side (Text Info) */}
				<div className="flex flex-col gap-2 z-10">
				<h1 className="text-3xl font-semibold text-gray-800">Oliver Lundin</h1>
				<Link href="mailto:oliver.lundin@live.se" className="text-gray-500 text-lg hover:underline font-sans">
					oliver.lundin@live.se
				</Link>
				</div>

				{/* Right Side (Icons) */}
				<div className="flex gap-4 z-10 items-center">
				<Link href="https://github.com/olvard">
					<Image src="github.svg" alt="GitHub" width={50} height={50} className="hover:scale-110 transition-transform" />
				</Link>
				<Link href="https://www.linkedin.com/in/oliver-lundin/">
					<Image src="linkedin.svg" alt="LinkedIn" width={70} height={70} className="hover:scale-110 transition-transform" />
				</Link>
				</div>
			</div>
		</div>
	)
}

export default ContactCard;