import { Place } from "@/types/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface Istate {
  mapOpen: boolean;
  activeInput: "pickUp" | "dropOff";
}

const initialState = {
  mapOpen: false,
  activeInput: "",
  pickupValue: "",
  pickupLocation: null,
  dropOffValue: "",
  dropOffLocation: null,
};

export const useStore = create(
  persist(
    (set, get) => ({
      reset: () => {
        set(initialState);
      },
      mapOpen: false,
      toogleMap: () => set((state: Istate) => ({ mapOpen: !state.mapOpen })),

      pickupValue: null,
      setPickupValue: (value: string) =>
        set(() => ({
          pickupValue: value,
          pickupLocation: value === "" && null,
        })),

      pickupLocation: null,
      setPickupLocation: (data: Place) =>
        set(() => ({
          pickupLocation: data,
          pickupValue: data.address,
          activeInput: "dropOff",
          placeSuggestions: null,
          viewHotspots: false,
          mapOpen: false,
        })),

      pinLocation: null,
      setPinLocation: (data: Place) =>
        set(() => ({
          pinLocation: data,
          mapOpen: false,
        })),

      clearPickupValue: () =>
        set(() => ({ pickupValue: "", pickupLocation: null })),
      dropOffValue: null,
      setDropOffValue: (value: string) => set(() => ({ dropOffValue: value })),
      dropOffLocation: null,

      setDropOffocation: (data: Place) =>
        set(() => ({
          dropOffLocation: data,
          dropOffValue: data.address,
          placeSuggestions: null,
          viewHotspots: false,
          mapOpen: false,
        })),

      clearDropOffValue: () =>
        set(() => ({ dropOffValue: "", dropOffLocation: null })),

      placeSuggestions: null,
      setPlaceSuggestions: (value: string) =>
        set(() => ({ placeSuggestions: value })),

      viewHotspots: false,
      setViewHotspots: (value: string) => set(() => ({ viewHotspots: value })),

      activeLocation: null,
      setActiveLocation: (value: string) => set(() => ({ hotSpots: value })),

      activeInput: null,
      setActiveInput: (value: string) =>
        set(() => ({ activeInput: value, mapOpen: true, viewHotspots: true })),

      pickUpDate: null,
      setPickUpDate: (date: string) => set(() => ({ pickUpDate: date })),

      pickUpTime: null,
      setPickUpTime: (date: string) => set(() => ({ pickUpTime: date })),

      transponrtation: null,
      setTransportation: (value: string) =>
        set(() => ({ transponrtation: value })),

      waypoints: null,
      setWaypoints: (value: string) => set(() => ({ waypoints: value })),

      client: null,
      setClient: (value: string) => set(() => ({ client: value })),

      notes: "",
      setNotes: (data: string) => set(() => ({ notes: data })),
    }),
    {
      name: "aegean-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
