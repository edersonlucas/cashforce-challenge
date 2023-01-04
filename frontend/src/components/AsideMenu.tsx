import React, { useContext } from "react";

import { Link, useLocation } from "react-router-dom";
import ProposalIcon from "../assets/images/ProposalIcon.svg";
import { AuthContext } from "../contexts/AuthContext";

export default function AsideMenu() {
  const { pathname } = useLocation();
  const { isAuthenticated } = useContext(AuthContext);
  const border = 'border-l-4 border-green-500'

  return isAuthenticated ? (
    <nav className="mt-[75px] fixed p-5 hidden grow items-start w-full max-w-[250px] h-[calc(100vh-75px)] text-green-500 lg:flex flex-col shadow-lg">
      <Link
        to="/invoices"
        className={`p-3 hover:font-medium flex items-center gap-1 ${ pathname === '/invoices' && border }`}
      >
        <img src={ProposalIcon} alt="Icon proposal" className="h-8 w-8" />
        Notas Fiscais
      </Link>
    </nav>
  ) : (
    <></>
  );
}
