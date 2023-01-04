import React, { useContext, useEffect, useState } from 'react';
import TableInvoices from '../components/TableInvoices';
import ProposalIcon from "../assets/images/ProposalIcon.svg";
import { parseCookies } from 'nookies';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { AuthContext } from '../contexts/AuthContext';
import IInvoice from '../interfaces/IInvoice';
import ProviderModal from '../components/ProviderModal';
import IProvider from '../interfaces/IProvider';

export default function Invoice () {
  const [invoices, setInvoices] = useState<IInvoice[] | []>([]);
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [providerId, setProviderId] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const { logout } = useContext(AuthContext);

  useEffect(() => {
    const { 'cashforce.token': token } = parseCookies();
    if (!token) {
      navigate('/login');
    }

    api.get(`/provider/${providerId}`, {
      headers: { Authorization: token},
    })
      .then((response) => setProvider(response.data))
      .catch(() => logout())
  }, [providerId, navigate, logout])

  useEffect(() => {
    const { 'cashforce.token': token } = parseCookies();
    if (!token) {
      navigate('/login');
    }

    api.get('/orders', {
      headers: { Authorization: token},
    })
      .then((response) => setInvoices(response.data))
      .catch(() => logout())
  }, [navigate, logout]);

  return (
    <div className="mt-[75px] text-blue-300 p-2 h-full max-w-full lg:w-[calc(100%-250px)] lg:ml-[250px] p-none m-auto">
      {isOpen && <ProviderModal setIsOpen={setIsOpen} dataProvider={provider}/>}
      <div className='text-green-500 flex items-center gap-1'>
        <img src={ProposalIcon} alt="Icon proposal" className="h-8 w-8" />
        <h1 className=" text-2xl">Notas Fiscais</h1>
      </div>
      <p>Visualize as notas fiscais que voce tem.</p>
      <TableInvoices invoices={invoices} setProviderId={setProviderId} setIsOpen={setIsOpen}/>
    </div>
  )
}