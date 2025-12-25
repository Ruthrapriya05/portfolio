export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black/70 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto flex justify-between p-4">
        <h1 className="text-xl font-bold text-primary">Portfolio</h1>
        <div className="space-x-6">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
