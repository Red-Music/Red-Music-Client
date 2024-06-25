import { AuthInstance } from ".";
import { musicType } from "./playlist";

const addLike = async (id: string) => {
  const response = await AuthInstance.post(`/like`, { music_id: id });
  return response.data;
};

interface LikeMusic extends musicType {
  like_count: number;
}
interface LikeList {
  musics: LikeMusic[];
}

const likeList = async (): Promise<LikeList> => {
  const response = await AuthInstance.get(`/like`);
  return response.data;
};

export { addLike, likeList };
