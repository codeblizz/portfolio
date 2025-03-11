import React from 'react'
import Image from 'next/image';
import Section from '../atoms/section';

function Hero() {
  return (
    <Section className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <Image src="/profile.jpg" alt="Your Name" width={150} height={150} className="rounded-full mx-auto mb-4" />
        <h1 className="text-5xl font-bold">Hi, I’m Collins Maduka</h1>
        <p className="text-xl mt-2">Full-Stack Developer | Engineer</p>
        <a href="#contact" className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Get in Touch
        </a>
      </div>
    </Section>
  )
}

export default Hero
