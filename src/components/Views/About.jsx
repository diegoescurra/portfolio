
const About = () => {
  return (
    <section className="bg-[#f9fafb] dark:bg-[#111827] py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            alt="Profile Picture"
            className="rounded-full w-48 h-48 mx-auto mb-6"
            height="500"
            src="/placeholder.svg"
            style={{
              aspectRatio: "500/500",
              objectFit: "cover",
            }}
            width="500"
          />
          <h2 className="text-3xl font-bold text-[#1f2937] dark:text-[#f9fafb] mb-4">Sobre mí</h2>
          <p className="text-[#6b7280] dark:text-[#d1d5db] mb-6">
            Hi, I'm John, a passionate web developer with a diverse skill set and a track record of delivering
            high-quality projects. I thrive on collaboration, innovative problem-solving, and continuously learning
            new technologies.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#1f2937] dark:text-[#f9fafb] mb-4">Habilidades</h3>
          <ul className="space-y-2 text-[#6b7280] dark:text-[#d1d5db]">
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>SQL</li>
            <li>Tailwind CSS</li>
            <li>Git</li>
         
          </ul>
          <h3 className="text-2xl font-bold text-[#1f2937] dark:text-[#f9fafb] mt-8 mb-4">Experiencia</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-[#1f2937] dark:text-[#f9fafb] font-bold">Freelance</h4>
              <p className="text-[#6b7280] dark:text-[#d1d5db]">Acme Inc. | 2020 - Present</p>
              <p className="text-[#6b7280] dark:text-[#d1d5db]">
                Developed and maintained complex web applications using React.js, Node.js, and TypeScript.
                Collaborated with cross-functional teams to deliver high-quality, user-centric solutions.
              </p>
            </div>
            <div>
              <h4 className="text-[#1f2937] dark:text-[#f9fafb] font-bold">Intern, Web Development</h4>
              <p className="text-[#6b7280] dark:text-[#d1d5db]">Zeta Corp | 2019 - 2020</p>
              <p className="text-[#6b7280] dark:text-[#d1d5db]">
                Gained hands-on experience in web development, including building responsive user interfaces and
                integrating backend services. Contributed to various projects and participated in team collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About