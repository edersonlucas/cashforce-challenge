import { STRING, INTEGER, DATE, Model } from 'sequelize';
import db from '.';

export default class User extends Model {
  id!: number;
  name!: string;
  email!: string;
  phoneNumber!: string;
  mobile!: string;
  departament!: string;
  verificationCode!: string;
  emailChecked!: number;
  createdAt!: Date;
  updatedAt!: Date;
  cashforceAdm!: number;
}

User.init(
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
    email: {
      type: STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    mobile: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    departament: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    verificationCode: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    emailChecked: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 0,
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
    cashforceAdm: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    underscored: false,
    sequelize: db,
    modelName: 'users',
    timestamps: true,
  },
);
