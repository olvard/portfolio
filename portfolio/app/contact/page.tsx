import NavBar from "../components/NavBar"
import PageWrapper from "../components/PageWrapper"
import ContactCard from "../components/ContactCard"

const Contact = () => {
	return(
		<main className="w-screen h-screen flex flex-row">

			<NavBar/>
			
			<div className="md:w-5/7">
				<PageWrapper>
				<ContactCard />	
				</PageWrapper>
			</div>
			

		</main>
	)
}

export default Contact