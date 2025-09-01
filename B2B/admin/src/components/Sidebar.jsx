import React from 'react';
import { NavLink } from 'react-router-dom';

const linkBase =
  'flex items-center gap-3 px-4 py-2 rounded-xl transition focus:outline-none';
const linkIdle =
  'text-white/90 hover:bg-white/10';
const linkActive =
  'bg-white/15 text-white ring-1 ring-white/20 shadow-sm';

const Sidebar = () => {
  return (
    <aside
      className="hidden md:block w-[18%] min-h-screen bg-[#4f1c51] text-white sticky top-0 p-4"
      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
    >
      <div className="mb-4 px-2">
        <p className="text-sm text-white/80">Navigation</p>
      </div>

      <nav className="flex flex-col gap-2">
        {/* Add Jewellery */}
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? linkActive : linkIdle}`
          }
        >
          <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
          <span>Add Jewellery</span>
        </NavLink>

        {/* Manage Products */}
        <NavLink
          to="/list"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? linkActive : linkIdle}`
          }
        >
          <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
          <span>Manage Products</span>
        </NavLink>

        {/* Manage Orders */}
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? linkActive : linkIdle}`
          }
        >
          <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
          <span>Manage Orders</span>
        </NavLink>

        {/* Custom Requests */}
        <NavLink
          to="/custom-requests"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? linkActive : linkIdle}`
          }
        >
          <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
          <span>Custom Requests</span>
        </NavLink>

        {/* Inquiries */}
        <NavLink
          to="/inquiries"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? linkActive : linkIdle}`
          }
        >
          <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
          <span>Inquiries</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
