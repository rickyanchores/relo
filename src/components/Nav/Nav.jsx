import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Nav = () => {
  let navList = [
    {
      name: "Home",
      link: "#"
    },
    {
      name: "About",
      link: "#about"
    },
    {
      name: "Gallery",
      link: "#gallery"
    },
    {
      name: "Contact",
      link: "#contact"
    }
  ];

  return (
    <nav className="Nav bg-white p-4 m-4 rounded-md sticky top-0 z-10" data-aos="fade-up" data-aos-duration="8000">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-xl font-bold">RELO</div>
        <ul className="NavLinks flex space-x-4">
          {navList.map((link, index) => {
            return (
              <li key={index}>
                <Link className="link text-black" to={link.link}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
        <button className='btn bg-orange-600 text-white p-2 rounded-lg'>Get Relo</button>
      </div>
    </nav>
  );
};

export default Nav;
