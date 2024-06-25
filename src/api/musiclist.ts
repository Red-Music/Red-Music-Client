import { AuthInstance } from ".";
import { musicType } from "./playlist";

export interface musiclistResponseType {
  musics: {
    count: number;
    rows: musicType[];
  };
}

const musicList = async (page: number): Promise<musiclistResponseType> => {
  const response = await AuthInstance.get(`/music?page=${page}`);
  return response.data;
};

export { musicList };
