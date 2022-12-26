import { STRING, INTEGER, DATE, Model } from 'sequelize';
import db from '.';

export default class Cnpj extends Model {
  id!: number;
  cnpj!: string;
  companyType!: string;
  createdAt!: Date;
  updatedAt!: Date;
};

Cnpj.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    cnpj: {
      type: STRING,
      allowNull: false,
    },
    companyType: {
      type: STRING,
      allowNull: false,
    },
    createdAt: {
      type: DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DATE,
      allowNull: false,
    }
  },
  {
    underscored: false,
    sequelize: db,
    modelName: 'Cnpjs',
    timestamps: true,
  },
);
