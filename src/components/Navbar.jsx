import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [franchiseOpen, setFranchiseOpen] = useState(false);

  const navItem = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md text-sm font-medium hover:text-cyan-300 ${
            isActive ? 'text-cyan-300' : 'text-white/90'
          }`
        }
        onClick={() => setOpen(false)}
      >
        Home
      </NavLink>

      <div className="relative">
        <button
          onClick={() => setFranchiseOpen((v) => !v)}
          className="inline-flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-white/90 hover:text-cyan-300"
        >
          Franchise <ChevronDown size={16} />
        </button>
        <div
          className={`absolute z-50 mt-2 w-56 rounded-xl bg-neutral-900/95 ring-1 ring-white/10 backdrop-blur-md shadow-xl ${
            franchiseOpen ? 'block' : 'hidden'
          }`}
          onMouseLeave={() => setFranchiseOpen(false)}
        >
          <div className="py-1">
            <DropdownLink to="/franchise/eps" label="EPS ATM Franchise" onClick={() => setOpen(false)} />
            <DropdownLink to="/franchise/india1" label="India1 ATM Franchise" onClick={() => setOpen(false)} />
            <DropdownLink to="/franchise/findi" label="Findi ATM Franchise" onClick={() => setOpen(false)} />
            <DropdownLink to="/franchise/hitachi" label="Hitachi Money Spot" onClick={() => setOpen(false)} />
          </div>
        </div>
      </div>

      <NavLink
        to="/blog"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md text-sm font-medium hover:text-cyan-300 ${
            isActive ? 'text-cyan-300' : 'text-white/90'
          }`
        }
        onClick={() => setOpen(false)}
      >
        Blog
      </NavLink>
    </>
  );

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-neutral-950/70 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 ring-1 ring-white/20" />
            <span className="font-semibold tracking-tight">ATM Franchise Pro</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">{navItem}</nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile */}
        {open && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-1">{navItem}</div>
          </div>
        )}
      </div>
    </header>
  );
}

function DropdownLink({ to, label, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block px-4 py-2 text-sm text-white/90 hover:text-cyan-300 hover:bg-white/5"
    >
      {label}
    </Link>
  );
}
