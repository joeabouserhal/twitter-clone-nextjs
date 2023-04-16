import Link from "next/link";
import React from "react";
import { BsBell, BsHash, BsInfoCircle, BsTwitter } from "react-icons/bs";
const Navbar = () => {
  return (
    <nav className="h-20 border-b border-stone-600 flex justify-between items-center px-10">
      <Link href="/" className="flex gap-2 items-center">
        <BsTwitter size={30} />
        <h1 className="text-2xl">Twitter Clone</h1>
      </Link>
      <div className="flex gap-4">
        <Link href="/about">
          <BsInfoCircle size={30} />
        </Link>
        <Link href="/explore">
          <BsHash size={30} />
        </Link>
        <Link href="/notifications">
          <BsBell size={30} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
