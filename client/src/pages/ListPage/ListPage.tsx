import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useHeroStore } from "../../stores/heroStore";
import type { Superhero } from "../../types/Superhero";

export const ListPage = () => {
  const navigate = useNavigate();

  const { allHeros, isLoading, featchAllHeros, deleteHero } = useHeroStore();

  const handleRemoveHero = (id: Superhero['id']) => {
    deleteHero(id);
    navigate(0);
  }

  useEffect(() => {
    featchAllHeros();
  }, [featchAllHeros]);

  return (
    <div className="">
      {isLoading ?
       <>Loaging...</>
       :
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 ">
          {allHeros.map(hero => {
            return (
              <li 
                key={hero.id} 
                 
              >
                <div className="flex justify-between">
                  <p>{hero.real_name}</p>
                  <button
                    className=" cursor-pointer"
                    onClick={() => handleRemoveHero(hero.id)}
                  >
                    remove
                  </button>
                </div>

                <div
                className="bg-blue-100 relative hover:-translate-y-0.5"
                onClick={() => navigate('/superhero', {
                  state: {
                    heroId: hero.id,
                  }
                })} 
                >

                  <img
                    // src={`/superheros/${hero.images[0]}`}
                    src={`http://localhost:3003/uploads/${hero.images[0]}`}
                    alt={hero.nickname}
                    className="w-full"
                  />
                  <div className="text-amber-50 text-shadow-lg/100  absolute bottom-1 p-2 h-full flex flex-col justify-end">
                    <p className="">Nickname: {hero.nickname}</p>
                    <p className="">Description: {hero.origin_description}</p>
                  </div>

                </div>

              </li>
            )
          })}
        </ul>
       }
    </div>
  )
}