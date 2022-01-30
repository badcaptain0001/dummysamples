import React from "react";

function Navbar() {
  return (
    <div className="flex px-28 justify-between items-center font-monts bg-parent-500 pt-6">
      <div className="flex py-4">
        <img className="w-14 pr-4" src="/images/Logo.svg" alt="" />
        <img className="w-28" src="/images/Discord.svg" alt="" />
      </div>
      <div>
        <ul className="flex gap-10 text-white">
          <li>Download</li>
          <li>Nitro</li>
          <li>Safety</li>
          <li>Support</li>
          <li>Blog</li>
          <li>Career</li>
        </ul>
      </div>
      <button className="px-4 py-2 bg-white rounded-lg active:bg-slate-300 hover:bg-slate-100 hover:drop-shadow-md active:transition">
        <p>Log in</p>
      </button>
    </div>
  );
}

export default Navbar;
