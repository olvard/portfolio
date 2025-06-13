import ResumeList from "../components/ResumeList"
import NavBar from "../components/NavBar"

const Resume = () => {
	return(
		<main className="flex flex-row w-screen h-screen justify-center">

			<NavBar/>

		<div className="w-5/7 h-screen bg-gray-100 overflow-scroll">

			<ResumeList/>

			<footer className="flex items-center justify-center max-w-150 h-64">
				<p className="p-4 font-light text-gray-300">©Oliver Lundin</p>
			</footer>

		</div>
		
		
		</main>
	)
}

export default Resume