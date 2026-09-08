import About from "./components/About";
import ResumeList from "./components/ResumeList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <About />
      <ResumeList />
      <footer className="flex items-center justify-center">
        <p className="p-4 font-light text-foreground-muted">©Oliver Lundin</p>
      </footer>
    </main>
  );
}
