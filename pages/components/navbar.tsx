import React from "react";
import logo from "../../public/logo.png";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-5 h-28 border-b-2 border-b-gray-500">
      <a href="#">
        <img src={logo.src} alt="" className="cursor-poiner" />
      </a>
      <button className=" bg-white rounded-3xl px-10 py-4">
        <span className="font-bold text-lg">Join Beta</span>
      </button>
    </nav>
  );
}
