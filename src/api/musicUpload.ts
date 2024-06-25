import { AuthInstance } from ".";

interface MusicResponse {
  message: string;
  url: string;
}
const uploadMusic = async (musicFile: File): Promise<MusicResponse> => {
  const form = new FormData();
  form.append("file", musicFile);

  const response = await AuthInstance.post(`/file`, form);

  return response.data;
};

interface UploadAllResponse {
  title: string;
  singer: string;
  album: string;
  release_date: string;
  genre: string;
  lyrics: string;
  subnail: string;
  music_file: string;
}
const uploadAll = async (res: UploadAllResponse) => {
  const response = await AuthInstance.post("/music", res);

  return response.data;
};

export { uploadMusic, uploadAll };
