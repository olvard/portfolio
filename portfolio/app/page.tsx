"use client"

import ProjectGallery from "./components/ProjectGallery";
import NavBar from "./components/NavBar";
import About from "./components/About";
import ResumeList from "./components/ResumeList";
import ContactCard from "./components/ContactCard";
import useIsMobile from "./hooks/useIsMobile";

export default function Home() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <main className="flex flex-col bg-gray-100 overflow-scroll md:justify-center md:items-center px-3">
        <About />
        <div id="projects">
          <ProjectGallery />
        </div>
        <ResumeList />
        <ContactCard />
        <footer className="flex items-center justify-center">
          <p className="p-4 font-light text-gray-300">©Oliver Lundin</p>
        </footer>
      </main>
    );
  }

  return (
    <main className="flex flex-col">
      <div className="w-screen h-screen flex flex-row">
        <NavBar />
        <div className="w-5/7 h-screen bg-gray-100 overflow-scroll">
          <About />
          <div id="projects">
            <ProjectGallery />
          </div>
          <footer className="flex items-center justify-center max-w-150">
            <p className="p-4 font-light text-gray-300">©Oliver Lundin</p>
          </footer>
        </div>
      </div>
    </main>
  );
}