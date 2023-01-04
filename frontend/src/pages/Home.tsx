import React, { useEffect } from 'react';
import { parseCookies } from 'nookies';
import { useNavigate } from 'react-router-dom';
import CashforceTeam from '../assets/images/CashforceTeam.webp'

export default function Home () {

  const navigate = useNavigate();

  useEffect(() => {
    const { 'cashforce.token': token } = parseCookies();
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="mt-[75px] p-2 max-w-full lg:w-[calc(100%-250px)] flex-col lg:flex-row lg:ml-[250px] grow p-none flex items-center justify-center mx-auto">
      <div>
        <h1 className="text-blue-700 max-w-[500px] text-5xl">A <span className="text-green-500">evolução</span> do Supply Chain Finance.</h1>
        <p className="text-blue-300 max-w-[550px]">Enxergando a cadeia produtiva pelo lado financeiro, as oportunidades se multiplicam.</p>
      </div>
      <img
        src={CashforceTeam}
        alt="Team cashforce"
        className='w-2/5 hidden lg:block'
      />
    </div>
  )
}