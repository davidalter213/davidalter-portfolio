

export const About = () => {
    
    const frontEndSkills = [
        "React",
        "HTML/CSS/JS",
        "TypeScript",
        "TailWindCSS",
        "Next.js"
    ]

    const backEndSkills = [
        "Node.js",
        "Python",
        "AWS",
        "PostgreSQL",
        "Java"
    ]
    
    return <section id = "about" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                About Me
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    I am a very ambitious software developer with a unique background that has prepared 
                    me to be a team player who communicates effectively, faces problems analytically 
                    and has the technical skills to tackle any challenge.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontEndSkills.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full
                                            text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backEndSkills.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full
                                            text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>B.S. in Computer Science</strong> - Western University (2020-2024)
                        </li>
                        <li>
                            Relevant Coursework: Data Structure & Algorithms, Web Development, Cloud Computing
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold"><strong> QA Analyst at KPMG</strong> (2025 - Present)</h4>
                            <p>
                                Tested and deployed a Python-based data migration pipeline on Azure, achieving 
                                a 50% reduction in transfer time for 100+ terabytes of critical business data
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold"><strong>Software Engineer at Sentrido</strong> (2023-2024) </h4>
                            <p>
                                Assisted in building front end components, user authentication, and integration
                                and testing of REST APIs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}