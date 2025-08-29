import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import { useHeroStore } from "../../stores/heroStore";

export const HeroPage = () => {
  const { state } = useLocation();

  const {visitedHeros, featchHeroById} = useHeroStore();
  const hero = visitedHeros.find(hero => hero.id === state.heroId );

  useEffect(() => {
    featchHeroById(state.heroId);
  }, [featchHeroById]);

  return (
    <div>
      <div className="flex">
        <img
          src={`http://localhost:3003/uploads/${hero?.images[0]}`}
          alt={hero?.nickname}
          className="w-[25%]"
        />

        <div>
          <p>{hero?.nickname}</p>
          <p>{hero?.origin_description}</p>
          <p>{hero?.real_name}</p>
          <p>{hero?.superpowers}</p>
        </div>
      </div>
    </div>
  )
}