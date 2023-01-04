import React from "react";
import IInvoice from "../interfaces/IInvoice";
import { dateFormatter, priceFormatter } from "../helpers/formatter";
import { statusInvoice } from "../enums/statusInvoice.enum";

interface TableInvoicesProps {
  invoices: IInvoice[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setProviderId: React.Dispatch<React.SetStateAction<number>>;
}

export default function TableInvoices({
  invoices,
  setProviderId,
  setIsOpen,
}: TableInvoicesProps) {
  const handleClick = (id: number) => {
    setIsOpen(true);
    setProviderId(id);
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    NOTA FISCAL
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    SACADO
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    CEDENTE
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    EMISSÃO
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    VALOR
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    STATUS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-800">
                {invoices.map((invoice) => (
                  <tr className="border rounded-lg" key={invoice.nNf}>
                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                      {invoice.nNf}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      {invoice.buyer.name}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      {invoice.provider.name}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      {dateFormatter.format(new Date(invoice.emissionDate))}
                    </td>
                    <td className="px-6 py-4 text-green-500 text-sm font-bold whitespace-nowrap">
                      {priceFormatter.format(Number(invoice.value))}
                    </td>
                    <td className="px-6 py-4 text-green-500 font-bold text-sm whitespace-nowrap">
                      {statusInvoice[Number(invoice.orderStatusBuyer)]}
                    </td>
                    <td>
                      <button
                        onClick={() => handleClick(Number(invoice.provider.id))}
                        type="button"
                        className="p-4 m-2 border-2 rounded-lg"
                      >
                        Dados cedente
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
