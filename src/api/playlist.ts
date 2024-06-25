import { AuthInstance } from ".";

export interface musicType {
  id: string;
  title: string;
  singer: string;
  album: string;
  release_date: string;
  genre: string;
  lyrics: string;
  subnail: string;
  music_file: string;
  createdAt: string;
  updatedAt: string;
}

export interface playlistResponseType {
  id: number;
  music_id: number;
  user_id: number;
  createdAt: Date;
  updatedAt: Date;
  music: musicType;
  isLiked: boolean;
}

interface ListResponse {
  playlist: playlistResponseType[];
}

const listApi = async (): Promise<ListResponse> => {
  const response = await AuthInstance.get(`/playlist`);
  return response.data;
};

const delList = async (id: number) => {
  const response = await AuthInstance.delete(`/playlist`, {
    data: { music_id: id },
  });
  return response.data;
};

export { listApi, delList };
