export default interface IProvider {
  id: number;
  name: string;
  tradingName: string;
  address: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  bank: string;
  bankAgency: string;
  phoneNumber: string;
  email: string;
  cnpj: {
    cnpj: string;
  };
}