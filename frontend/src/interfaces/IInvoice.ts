export default interface IInvoice {
  nNf: string;
  buyer: {
    id: number;
    name: string;
  };
  provider: {
    id: number;
    name: string;
  };
  emissionDate: string;
  value: string;
  orderStatusBuyer: string;
};