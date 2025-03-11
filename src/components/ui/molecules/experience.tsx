import React from 'react'

function Experience() {
  const experiences = [
    {
      role: 'Full-Stack Developer',
      company: 'Company Name',
      duration: 'Jan 2022 - Present',
      description: 'Developed scalable web applications and integrated APIs for betting platforms.',
    },
    {
      role: 'Junior Developer',
      company: 'Another Company',
      duration: 'Jun 2020 - Dec 2021',
      description: 'Built frontend components and optimized backend performance.',
    },
  ];

  return (
    <section id="experience" className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-6 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{exp.role} - {exp.company}</h3>
            <p className="text-sm text-gray-600">{exp.duration}</p>
            <p className="mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience
