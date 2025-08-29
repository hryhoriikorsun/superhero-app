import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export const HeroModel = sequelize.define('hero',{
  nickname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  real_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  origin_description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  superpowers: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },
  catch_phrase: {
    type: DataTypes.STRING,
    allowNull: false
  },
  images: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },
}, {
  tableName: 'superheros'
});