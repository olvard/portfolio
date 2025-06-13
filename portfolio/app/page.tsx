

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

        </div>
        
        
      </div>

    </main>
  )
}
