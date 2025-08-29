import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize('superherodb', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
});
