import React from 'react'

function About() {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          I’m a passionate software developer with expertise in React, Next.js, and Node.js. I specialize in building innovative solutions like Telegram mini apps for betting platforms and odds comparison tools. With X years of experience, I’ve worked with companies like [Company Name] to deliver scalable, user-focused applications.
        </p>
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Skills</h3>
          <ul className="flex flex-wrap justify-center gap-4 mt-2">
            <li className="bg-blue-600 text-white py-1 px-3 rounded">React</li>
            <li className="bg-blue-600 text-white py-1 px-3 rounded">Next.js</li>
            <li className="bg-blue-600 text-white py-1 px-3 rounded">Node.js</li>
            <li className="bg-blue-600 text-white py-1 px-3 rounded">Tailwind CSS</li>
            <li className="bg-blue-600 text-white py-1 px-3 rounded">API Integration</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
