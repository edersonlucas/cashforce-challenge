import React from "react";
import { X } from "phosphor-react";
import IProvider from "../interfaces/IProvider";

interface ProviderModalProps {
  dataProvider: IProvider | null;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProviderModal({
  setIsOpen,
  dataProvider,
}: ProviderModalProps) {
  return (
    <div className="h-full max-h-[600px] w-full lg:max-w-[400px] absolute right-2 top-[150px] text-white-900">
      <div className="bg-blue-300 p-4 rounded-md">
        <button
          onClick={() => setIsOpen(false)}
          type="button"
          className="p-2 absolute right-[16px] rounded-full text-zinc-900 bg-green-500 hover:bg-green-400"
        >
          <X />
        </button>
        <h1 className="text-xl text-center text-green-500">Dados Cedente</h1>
        <div>
          <p>{`ID: ${dataProvider?.id}`}</p>
          <p>{`NAME: ${dataProvider?.name}`}</p>
          <p>{`TRADINGNAME: ${dataProvider?.tradingName}`}</p>
          <p>{`ADDRESS: ${dataProvider?.address}`}</p>
          <p>{`NUMBER: ${dataProvider?.number}`}</p>
          <p>{`COMPLEMENT: ${dataProvider?.complement}`}</p>
          <p>{`CITY: ${dataProvider?.city}`}</p>
          <p>{`STATE: ${dataProvider?.state}`}</p>
          <p>{`BANK: ${dataProvider?.bank}`}</p>
          <p>{`BANKAGENCY: ${dataProvider?.bankAgency}`}</p>
          <p>{`PHONENUMBER: ${dataProvider?.phoneNumber}`}</p>
          <p>{`EMAIL: ${dataProvider?.email}`}</p>
          <p>{`CNPJ: ${dataProvider?.cnpj.cnpj}`}</p>
        </div>
      </div>
    </div>
  );
}
