import React from 'react';

const Nav = () => {
  return (
    <nav className="Nav bg-white p-4 m-4 rounded-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-xl font-bold">RELO</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-black hover:text-orange-600">Home</a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-orange-600">About</a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-orange-600">Services</a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-orange-600">Contact</a>
          </li>
        </ul>
        <button className='btn bg-orange-600 text-white p-2 rounded-lg'>Get Relo</button>
      </div>
    </nav>
  );
};

export default Nav;
