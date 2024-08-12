import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Portofolio Saya
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white">
              Tentang
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-white">
              Proyek
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white">
              Kontak
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;