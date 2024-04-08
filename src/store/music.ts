import { create } from "zustand";

interface MusicStoreInterface {
  controller?: HTMLAudioElement;
  setController: (controller: HTMLAudioElement) => void;

  isPlaying: boolean;
  toggleIsPlaying: () => void;
  setIsPlaying: (isPlaying: boolean) => void;

  id: number;
  title?: string;
  artist?: string;
  audio?: HTMLAudioElement;
  image?: string;
  lyrics?: string;
  totalTime: string;
  currentTime: string;
  progress: string;

  setId: (id: number) => void;

  setTotalTime: (time: number) => void;
  setCurrentTime: (time: number) => void;
  setProgress: (currentTime: number, totalTime: number) => void;
}

const CalculationTime = (time: number): string => {
  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(Math.floor(time % 60)).padStart(2, "0");
  return `${minutes}:${seconds}`;
};

export const musicStore = create<MusicStoreInterface>((set) => ({
  controller: undefined,
  setController: (controller: HTMLAudioElement) => set(() => ({ controller })),

  isPlaying: false,
  toggleIsPlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setIsPlaying: (isPlaying: boolean) => set(() => ({ isPlaying })),

  id: 0,
  title: undefined,
  artist: undefined,
  audio: undefined,
  image: undefined,
  lyrics: undefined,
  totalTime: "00:00",
  currentTime: "00:00",
  progress: "0%",

  setId: (id: number) => set(() => ({ id })),
  setTotalTime: (time: number) => {
    set(() => ({ totalTime: CalculationTime(time) }));
  },
  setCurrentTime: (time: number) => {
    set(() => ({ currentTime: CalculationTime(time) }));
  },
  setProgress: (currentTime: number, totalTime: number) =>
    set(() => ({
      progress: `${(currentTime / totalTime) * 100}%`,
      currentTime: CalculationTime(currentTime),
      totalTime: CalculationTime(totalTime),
    })),
}));
