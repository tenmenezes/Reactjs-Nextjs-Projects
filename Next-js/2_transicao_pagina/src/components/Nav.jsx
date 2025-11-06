"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathName = usePathname();

  return (
    <nav>
      <br />
      <ul>
        <li className="text-center">
          <Link className={`link ${pathName === "/" ? "active" : ""}`} href="/">
            Home
          </Link>
        </li>
        <li className="text-center">
          <Link
            className={`link ${pathName === "/sobre" ? "active" : ""}`}
            href="/sobre"
          >
            Sobre
          </Link>
        </li>
      </ul>
      <br />
    </nav>
  );
};

export default Nav;
