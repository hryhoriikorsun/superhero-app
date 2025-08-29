import type { Superhero } from "../types/Superhero";

export const getAll = async (): Promise<Superhero[]> => {
  const res = await fetch('http://localhost:3003/api/superheroes');
  const { data } = await res.json();
  return data;
};

export const getById = async (heroId: Superhero['id']): Promise<Superhero> => {
  const res = await fetch(`http://localhost:3003/api/superheroes/${heroId}`);
  const { data } = await res.json();
  return data;
}

export const createHero = (hero: Omit<Superhero, 'id'>) => {
  fetch(`http://localhost:3003/api/superheroes/`, { 
    method: 'POST', 
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(hero)
  });
}

export const removeHero = async (heroId: Superhero['id']): Promise<string> => {
  const res = await fetch(`http://localhost:3003/api/superheroes/${heroId}`, {method: 'DELETE'});
  const { message } = await res.json();
  return message;
}