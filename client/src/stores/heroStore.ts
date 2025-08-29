import { create } from 'zustand';
import type { Superhero } from '../types/Superhero';
import { getAll, getById, removeHero } from '../api/superhero';

interface HeroStoreState {
  allHeros: Superhero[];
  visitedHeros: Superhero[],
  isLoading: boolean;
  error: string | null;
  message: string | null;
  featchAllHeros: () => Promise<void>;
  featchHeroById: (id: Superhero['id']) => Promise<void>;
  deleteHero: (id: Superhero['id']) => Promise<void>;
}

export const useHeroStore = create<HeroStoreState>((set, get) => ({
  allHeros: [],
  visitedHeros: [],
  isLoading: false,
  error: null,
  message: null,
  
  featchAllHeros: async () => {
    set({ isLoading: true, error: null });
    try {
      const allHeros = await getAll();
      set({ allHeros, isLoading: false });
      // console.log(get())
    } catch (err: any) {
      set({ error: err.message, isLoading: false });
    }
  },

  featchHeroById: async (id: Superhero['id']) => {
    set({ isLoading: true, error: null });
    try {
      const getVisitedHeros = get().visitedHeros;
      const isVisitedHeros = getVisitedHeros.find(hero => hero.id === id );

      if (isVisitedHeros) {
        set({ visitedHeros: getVisitedHeros, isLoading: false });
      } else {
        const hero = await getById(id);
        set({ visitedHeros: [...getVisitedHeros, hero], isLoading: false });
      }
      console.log(get())
    } catch (err: any) {
      set({ error: err.message, isLoading: false });
    }
  },

  deleteHero: async (id: Superhero['id']) => {
    set({ error: null, message: null });
    try {
      const msg = await removeHero(id);
      console.log(msg);

      const herosInStore = get().allHeros;
      const filteredHeros = herosInStore.filter(hero => hero.id !== id);
      console.log(get())

      set({ allHeros: filteredHeros, message: msg });
    } catch (err: any) {
      set({ error: err.message});
    }
  }
}))