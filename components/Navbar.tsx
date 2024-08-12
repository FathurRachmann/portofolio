import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-xl font-bold">Portofolio Saya</a>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <a>Beranda</a>
            </Link>
          </li>
          <li>
            <Link href="/tentang">
              <a>Tentang</a>
            </Link>
          </li>
          <li>
            <Link href="/proyek">
              <a>Proyek</a>
            </Link>
          </li>
          <li>
            <Link href="/kontak">
              <a>Kontak</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
