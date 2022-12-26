import { STRING, INTEGER, DATE, Model } from 'sequelize';
import db from '.';
import Cnpj from './Cnpj';
import User from './User';
import Provider from './Provider';
import Buyer from './Buyer';

export default class Order extends Model {
  id!: number;
  orderNfId!: string;
  orderNumber!: string;
  orderPath!: string;
  orderFileName!: string;
  orderOriginalName!: string;
  emissionDate!: string;
  pdfFile!: string;
  emitedTo!: string;
  nNf!: string;
  CTE!: string;
  value!: string;
  createdAt!: Date;
  updatedAt!: Date;
  cnpjId!: number;
  userId!: number;
  buyerId!: number;
  providerId!: number;
  orderStatusBuyer!: string;
  orderStatusProvider!: string;
  deliveryReceipt!: string;
  cargoPackingList!: string;
  deliveryCtrc!: string;
}

Order.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    orderNfId: {
      type: STRING,
      allowNull: false,
    },
    orderNumber: {
      type: STRING,
      allowNull: false,
    },
    orderPath: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    orderFileName: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    orderOriginalName: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    emissionDate: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    pdfFile: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    emitedTo: {
      type: STRING,
      allowNull: false,
    },
    nNf: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    CTE: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    value: {
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
    userId: {
      type: INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    buyerId: {
      type: INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    providerId: {
      type: INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    orderStatusBuyer: {
      type: STRING,
      allowNull: false,
      defaultValue: 0,
    },
    orderStatusProvider: {
      type: STRING,
      allowNull: false,
      defaultValue: 0,
    },
    deliveryReceipt: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    cargoPackingList: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    deliveryCtrc: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    underscored: false,
    sequelize: db,
    modelName: 'orders',
    timestamps: true,
  },
);

Order.belongsTo(Cnpj, { foreignKey: 'cnpjId', as: 'cnpjId' });
Order.belongsTo(User, { foreignKey: 'userId', as: 'userId' });
Order.belongsTo(Provider, { foreignKey: 'providerId', as: 'providerId' });
Order.belongsTo(Buyer, { foreignKey: 'buyerId', as: 'buyerId' });
Cnpj.hasMany(Order, { foreignKey: 'id' });
User.hasMany(Order, { foreignKey: 'id' });
Provider.hasMany(Order, { foreignKey: 'id' });
Buyer.hasMany(Order, { foreignKey: 'id' });
