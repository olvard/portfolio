import Link from "next/link";
import ProjectGallery from "./components/ProjectGallery";


export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-row">
      <div className="w-2/7 h-screen bg-gray-100 flex justify-center items-start ">
        <ul className="mt-50">
          <li className="transition-all duration-150 hover:text-black hover:scale-105"><Link href={""}>About me</Link></li>
          <li className="transition-all duration-150 hover:text-black hover:scale-105"><Link href={""}>Projects</Link></li>
          <li className="transition-all duration-150 hover:text-black hover:scale-105"><Link href={"/resume"}>Resume</Link></li>
          <li>
            <hr className="my-2 border-t-1 border-gray-300" />
          </li>
          <li className="transition-all duration-150 hover:text-black hover:scale-105"><Link href={""}>Contact</Link></li>
        </ul>

      </div>
      <div className="w-5/7 h-screen bg-gray-100 overflow-scroll">
        <h1 className="mt-45 font-bold text-4xl">Oliver Lundin</h1>
        <p className="mr-60 mt-5 max-w-150">Software engineering Master’s graduate with a focus on artificial intelligence and machine learning. Experienced in computer
          vision, data analysis and visualization. I have a strong interest in emerging technologies and want to use my knowledge to make a
          difference. I&apos;m good at working both independently and in teams, contributing positive and curious energy. Excited to apply my
          skills and competence in a full-time position at a leading tech company.</p>
        <hr className="mt-20 mb-10 border-t-1 border-gray-300 max-w-150" />

        <ProjectGallery/>

      </div>
      
      
    </main>
  )
}
