interface Superhero {
  id: string,
  nickname: string,
  real_name: string,
  origin_description: string,
  superpowers: string[],
  catch_phrase: string,
  images: string[],
}

export const getAll = async (): Promise<Superhero[]> => {
  const res = await fetch('http://localhost:3003/superheroes');
  const superheroes: Superhero[] = await res.json();
  return superheroes;
};