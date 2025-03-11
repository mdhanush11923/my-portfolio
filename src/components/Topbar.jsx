import Link from "next/link";
import React from "react";

export default function Topbar() {
  return (
    <div className="fixed top-1 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[90%] bg-gray-100/50 backdrop-blur-md p-4 flex justify-between items-center shadow-md z-50 rounded-lg">
      <h1 className="text-xl font-bold">Dhanush</h1>
      <div className="flex gap-4 text-blue-600">
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#skill">Skills</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </div>
  );
}
