"use client"

import ProjectGallery from "./components/ProjectGallery";
import NavBar from "./components/NavBar";
import About from "./components/About";
import ResumeList from "./components/ResumeList";
import useIsMobile from "./hooks/useIsMobile";
import PageWrapper from "./components/PageWrapper";
import Link from "next/dist/client/link";
import Image from "next/image";

export default function Home() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <main className="flex flex-col overflow-scroll md:justify-center md:items-center px-3">
        <About />
        {/* <div id="projects">
          <ProjectGallery />
        </div> */}
        <ResumeList />
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
          <PageWrapper>
            <About />
            <div id="projects">
              <ProjectGallery />
            </div>
          </PageWrapper>
          <footer className="flex items-center justify-between w-full h-64 px-6">
            <p className="p-4 font-light text-gray-300">©Oliver Lundin</p>

            <Link href="mailto:oliver.lundin@live.se" className="text-[#ea6962] text-lg hover:underline font-sans">
              oliver.lundin@live.se
            </Link>

            <Link href="https://github.com/olvard" aria-label="GitHub">
              <Image src="/github.svg" alt="GitHub" width={10} height={10} className="invert hover:scale-110 transition-transform" />
            </Link>
            <Link href="https://www.linkedin.com/in/oliver-lundin/" aria-label="LinkedIn">
              <Image src="/linkedin.svg" alt="LinkedIn" width={10} height={10} className="invert hover:scale-110 transition-transform" />
            </Link>
          </footer>
        </div>
      </div>
    </main>
  );
}