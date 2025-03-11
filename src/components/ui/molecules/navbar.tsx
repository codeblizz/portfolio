"use client";

import React from "react";
import Nav from "@/components/ui/atoms/nav";
import Link from "@/components/ui/atoms/link";
import Section from "@/components/ui/atoms/section";

function Navbar() {
  return (
    <Nav className="fixed top-0 w-full bg-gray-800 text-white p-4 shadow-md">
      <Section className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Collins Maduka</Link>
        <Section className="space-x-4">
          <Link href="#about" className="hover:text-gray-300">About</Link>
          <Link href="#projects" className="hover:text-gray-300">Projects</Link>
          <Link href="#experience" className="hover:text-gray-300">Experience</Link>
          <Link href="#contact" className="hover:text-gray-300">Contact</Link>
        </Section>
      </Section>
    </Nav>
  );
}

export default Navbar;
