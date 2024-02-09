export interface Props {
  darkMode: boolean;
  setDarkMode: (newValue: boolean) => void;
};

export interface Game {
  id: number;
  cover: {
    id: number;
    url: string;
  };
  name: string;
  platforms?: {
    id: number;
    name: string;
  }[];
  releaseDates?: {
    id: number;
    human: string;
  }[];
  summary: string;
}