import React from 'react';

const Navbar = () => {
    return (
<div className='bg-base-100 shadow-sm '>
   <div className="navbar mx-auto max-w-400">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">News Latest</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Link</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div> 
</div>

    );
};

export default Navbar;