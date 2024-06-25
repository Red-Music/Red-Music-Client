import { AuthInstance } from ".";
import { musicType } from "./playlist";

interface searchResponseType {
  musics: musicType[];
}
const searchList = async (search: string): Promise<searchResponseType> => {
  const response = await AuthInstance.get(`/search?title=${search}`);
  return response.data;
};

const addPlayList = async (id: string) => {
  const response = await AuthInstance.post(`/playlist`, { music_id: id });
  return response.data;
};

export { searchList, addPlayList };
