const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"];

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-3 gap-4">
          {skills.map(skill => (
            <div key={skill} className="bg-gray-800 p-4 text-center rounded">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
