import ResumeList from "../components/ResumeList"
import NavBar from "../components/NavBar"

const Resume = () => {
	return(
		<main className="w-screen h-screen flex flex-row">

			<NavBar/>

		<div className="w-5/7 h-screen bg-gray-100 overflow-scroll">

			<ResumeList/>

		</div>
		
		
		</main>
	)
}

export default Resume