import { Place } from "@/types/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface Istate {
  mapOpen: boolean;
}

export const useStore = create(
  persist(
    (set, get) => ({
      mapOpen: false,
      toogleMap: () => set((state: Istate) => ({ mapOpen: !state.mapOpen })),

      pickupValue: null,
      setPickupValue: (value: string) => set(() => ({ pickupValue: value })),

      pickupLocation: null,
      setPickupLocation: (data: Place) =>
        set(() => ({ pickupLocation: data, pickupValue: data.address })),

      clearPickupValue: () =>
        set(() => ({ pickupValue: "", pickupLocation: null })),
      dropOffValue: null,
      dropOffLocation: null,
      setDropOffValue: (value: string) => set(() => ({ dropOffValue: value })),

      setDropOffocation: (data: Place) =>
        set(() => ({ dropOffLocation: data, dropOffValue: data.address })),

      clearDropOffValue: () =>
        set(() => ({ dropOffValue: "", dropOffLocation: null })),

      placeSuggestions: null,
      setPlaceSuggestions: (value: string) =>
        set(() => ({ placeSuggestions: value })),

      activeLocation: null,
      setActiveLocation: (value: string) =>
        set(() => ({ activeLocation: value })),

      activeInput: null,
      setActiveInput: (value: string) => set(() => ({ activeInput: value })),
    }),
    {
      name: "aegean-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
