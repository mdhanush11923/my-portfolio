import Link from "next/link";
import React from "react";

export default function Topbar() {
  return (
    <div className="container mt-5 p-4 bg-gray-100 flex justify-between rounded-lg opacity-60  ">
      <h1>Dhanush</h1>
      <div className="flex gap-4">
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#skill">Skills</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </div>
  );
}
