import { useEffect, useState } from "react"
import { getAll } from "../../api/superhero";

interface Superhero {
  id: string,
  nickname: string,
  real_name: string,
  origin_description: string,
  superpowers: string[],
  catch_phrase: string,
  images: string[],
}

export const ListPage = () => {
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);

  useEffect(() => {
    getAll().then(setSuperheroes);
  }, [])

  return (
    <div className="">
      <ul className="w-full grid grid-cols-3 gap-1">
        {superheroes!.map(hero => {
          return (
            <li key={hero.id} className="h-90 bg-blue-100">
              {hero.id}
              <img
                src={hero.images[0]}
                alt={hero.images[0]}
                className="h-50% w-auto"
              />
              <br />
              <p>Nickname: {hero.nickname}</p>
              <br />
              <p>Real name: {hero.real_name}</p>
              <br />
              <p>Superpowers: {hero.superpowers}</p>
              <br />
              <p>Description: {hero.origin_description}</p>

            </li>
          )
        })}
      </ul>
      ListPagefdvdfv
    </div>
  )
}