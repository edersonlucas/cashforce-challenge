import React, {
  FormEvent, useState, useContext, useEffect
} from 'react';

import { parseCookies } from 'nookies';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import Illustration from '../assets/images/Illustration.svg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const { login } = useContext(AuthContext);

  
  
  useEffect(() => {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i
    setIsDisabled(!regexEmail.test(email))
  }, [email])

  const navigate = useNavigate();

  useEffect(() => {
    const { 'cashforce.token': token } = parseCookies();
    if (token) {
      navigate('/');
    }
  }, [navigate]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    await login({ email });
  }

  return (
      <div className="mt-[75px] p-2 w-full bg-white-900 lg:bg-white-900 grow p-none flex items-center justify-between max-w-[900px] mx-auto">
        <div className="flex w-full rounded-lg bg-blue-300 lg:flex-row mx-auto">
          <div className="w-full rounded-tl-lg rounded-bl-lg hidden bg-blue-300 lg:flex lg:flex-col">
            <div className="p-3">
              <h2 className="text-lg">A EVOLUÇÃO DO SUPPLY CHAIN FINANCE</h2>
              <h1 className="text-2xl font-bold">Você tem a força. Multiplique-a.</h1>
            </div>
            <img
              className="my-9 m-auto w-96 h-60"
              src={Illustration}
              alt="Ilustração cashforce"
            />
          </div>
          <div className="w-full flex items-center lg:rounded-br-lg lg:rounded-tr-lg flex-col bg-blue-300 border-0 rounded-none p-8 lg:m-auto">
            <strong className="text-white-900 text-4xl mb-4 block">Login</strong>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full p-2">
              <input
                className="bg-white-900 rounded px-5 h-14 text-zinc-900"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button
                className="w-full mt-2 bg-green-500 uppercase py-4 rounded font-bold text-sm enabled:hover:bg-green-400 transition-colors disabled:opacity-50"
                disabled={isDisabled}
                type="submit"
              >
                ENTRAR
              </button>
            </form>
          </div>
        </div>
      </div>
  );
}