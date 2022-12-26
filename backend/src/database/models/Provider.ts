import { STRING, INTEGER, DATE, Model } from 'sequelize';
import db from '.';
import Cnpj from './Cnpj';

export default class Provider extends Model {
  id!: number;
  name!: string;
  tradingName!: string;
  cashforceTax!: string;
  responsibleName!: string;
  responsiblePosition!: string;
  responsiblePhone!: string;
  responsibleMobile!: string;
  website!: string;
  postalCode!: string;
  address!: string;
  number!: string;
  complement!: string;
  neighborhood!: string;
  city!: string;
  state!: string;
  bank!: string;
  bankAgency!: string;
  documents!: string;
  phoneNumber!: string;
  situation!: string;
  situationDate!: string;
  createdAt!: Date;
  updatedAt!: Date;
  cnpjId!: number;
  email!: number;
}

Provider.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    tradingName: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    cashforceTax: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    responsibleName: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    responsibleEmail: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    responsiblePosition: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    responsiblePhone: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    responsibleMobile: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    website: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    postalCode: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    address: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    number: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    complement: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    neighborhood: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    city: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    state: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    bank: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    bankAgency: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    account: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    documents: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    phoneNumber: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    situation: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    situationDate: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    createdAt: {
      type: DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    updatedAt: {
      type: DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    cnpjId: {
      type: INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    email: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    underscored: false,
    sequelize: db,
    modelName: 'providers',
    timestamps: true,
  },
);

Provider.belongsTo(Cnpj, { foreignKey: 'cnpjId', as: 'cnpjId' });
Cnpj.hasMany(Provider, { foreignKey: 'id' });
