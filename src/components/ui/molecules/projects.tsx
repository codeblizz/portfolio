import React from 'react'

function Projects() {
  const projects = [
    {
      title: 'Telegram Betting Mini App',
      description: 'A Telegram mini app guiding users to betting platforms via affiliate links with a tap-to-earn system.',
      tech: 'React, Next.js, Telegram Bot API',
      link: 'https://github.com/yourusername/project',
    },
    {
      title: 'Odds Comparison Tool',
      description: 'A web app that scrapes and compares odds from multiple betting platforms.',
      tech: 'Python, Flask, PostgreSQL',
      link: 'https://github.com/yourusername/project',
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <p className="mt-2 text-sm text-gray-600">Tech: {project.tech}</p>
              <a href={project.link} className="mt-4 inline-block text-blue-600 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects
