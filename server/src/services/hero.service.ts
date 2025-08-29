import { HeroModel } from '../models/hero.model';
import { Superhero } from '../types/Superhero';

export const getAll = async () => {
  return await HeroModel.findAll();
}

export const getById = async (id: Superhero['id']) => {
  return await HeroModel.findByPk(id);
}

export const create = (hero: Omit<Superhero , 'id'>) => {
  return HeroModel.create(hero);
}

export const update = async (id: Superhero['id'], changeHero: Omit<Superhero, 'id'>) => {
  await HeroModel.update(changeHero, {where: {id}});
}

export const remove = async (id: Superhero['id']) => {
  await HeroModel.destroy({where: {id}});
}