

import ProjectGallery from "./components/ProjectGallery";
import NavBar from "./components/NavBar";
import About from "./components/About";
//import ResumeList from "./components/ResumeList";


export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="w-screen h-screen flex flex-row">

        <NavBar/>

        <div className="w-5/7 h-screen bg-gray-100 overflow-scroll">


          <About/>

          <div id="projects">
          <ProjectGallery />
          </div>
          <footer className="flex items-center justify-center max-w-150">
            <p className="p-4 font-light text-gray-300">©Oliver Lundin</p>
          </footer>

        </div>
      </div>
    </main>
  )
}
