import { ModeToggle } from "./theme-switcher";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="font-bold text-xl">
              My Portfolio
            </a>
          </div>
          <div className="flex items-center">
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-primary">About</a>
              <a href="#skills" className="hover:text-primary">Skills</a>
              <a href="#projects" className="hover:text-primary">Projects</a>
              <a href="#education" className="hover:text-primary">Education</a>
            </nav>
            <div className="ml-4">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}