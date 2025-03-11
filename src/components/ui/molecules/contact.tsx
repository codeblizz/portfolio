import React from 'react'

function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg mb-6">Interested in collaborating? Reach out!</p>
        <a href="mailto:your.email@example.com" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Email Me
        </a>
        <div className="mt-4">
          <a href="https://linkedin.com/in/yourprofile" className="text-blue-600 hover:underline mx-2">LinkedIn</a>
          <a href="https://x.com/yourhandle" className="text-blue-600 hover:underline mx-2">X</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
