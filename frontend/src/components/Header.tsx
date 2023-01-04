import React, { useState, useContext } from 'react';

import { List, X, SignOut } from 'phosphor-react';
import { Link } from "react-router-dom";
import Logo from '../assets/images/Logo.svg';
import ProposalIcon from '../assets/images/ProposalIcon.svg';
import { AuthContext } from '../contexts/AuthContext';

export default function Header() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleLogout = () => {
    setIsOpenMenu(false);
    logout();
  };

  const openMenu = () => {
    if (isOpenMenu) {
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    isAuthenticated ? (
      <header
        className="fixed z-50 bg-white-900 w-full"
      >
        <div className="p-5 flex justify-between items-center w-full mx-auto text-green-500">
          <Link onClick={() => setIsOpenMenu(false)} to="/" className="flex items-center">
            <img
              src={Logo}
              alt="Logo Cashforce"
              className="h-30 w-28"
            />
          </Link>
          <button
            type="button"
            name="menu-sandwich"
            className="block hover:text-green-400 lg:hidden"
            onClick={openMenu}
          >
            {isOpenMenu ? <X size={35} /> : <List size={35} />}
          </button>
          <nav className="hidden items-center gap-6 lg:flex">
            <button type="button" onClick={logout} className="flex items-center gap-1 hover:opacity-90">
              Sair
              <SignOut size={32} />
            </button>
          </nav>
          <div
            className={`fixed left-0 bottom-[-71px] h-full w-full z-30 bg-white-900 bg-opacity-[99%] transform-gpu transition-all lg:hidden ${
              isOpenMenu ? '-translate-y-0' : 'translate-y-full'
            }`}
          >
            <nav className="h-full flex flex-col items-center justify-center gap-8 text-green-500 text-2xl">
              <Link onClick={() => setIsOpenMenu(!isOpenMenu)} to="/invoices" className="hover:font-medium flex gap-1">
                <img
                  src={ProposalIcon}
                  alt="Icon proposal"
                  className="h-8 w-8"
                />
                Notas Fiscais
              </Link>
              <button type="button" onClick={handleLogout} className="flex items-center gap-1 hover:opacity-90">
                Sair
                <SignOut size={32} />
              </button>
            </nav>
          </div>
        </div>
        <hr className="border-zinc-900 w-4/5 mx-auto opacity-30" />
      </header>
    ) : (
      <header
        className="fixed z-50 bg-white-900 w-full"
      >
        <div className="p-5 flex justify-between items-center w-full max-w-[1300px] mx-auto text-black-900">
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="Logo Cashforce"
              className="h-30 w-28"
            />
          </Link>
        </div>
        <hr className="border-zinc-900 w-4/5 mx-auto opacity-20" />
      </header>
    )
  );
}