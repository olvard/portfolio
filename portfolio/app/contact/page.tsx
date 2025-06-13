import NavBar from "../components/NavBar"

import ContactCard from "../components/ContactCard"

const Contact = () => {
	return(
		<main className="w-screen h-screen flex flex-row">

			<NavBar/>

			<div className="md:w-5/7">
				<ContactCard />	
			</div>

		</main>
	)
}

export default Contact