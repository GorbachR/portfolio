import { useState } from "react";

function Navigation() {
  const [showMenu, setShowMenu] = useState<boolean>();

  return (
    <>
      {showMenu ? (
        <div></div>
      ) : (
        <div className="py-8 flex content-center justify-between">
          <a className="text-4xl" href="/">
            👋
          </a>
          <nav className="flex justify-end items-center gap-12 font-bold">
            <a href="#skills" className="link">
              Skills
            </a>
            <a href="#projects" className="link">
              Projects
            </a>
            <a href="/blog" className="link">
              Blog
            </a>
            <a href="#" className="button bg-gray-900">
              Connect
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navigation;
