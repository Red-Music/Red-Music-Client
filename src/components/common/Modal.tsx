import { uploadMusic, uploadAll } from "@/api/musicUpload";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export const Modal = ({
  openModal,
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [musicFile, setMusicFile] = useState<File | null>(null);
  const [disabled, setDisabled] = useState(true);
  const [value, setValue] = useState({
    title: "",
    singer: "",
    album: "",
    release_date: "",
    genre: "",
    lyrics: "",
    subnail: "",
    music_file: "",
  });

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const { mutate } = useMutation({
    mutationFn: uploadMusic,
    mutationKey: ["uploadMusic"],
    onSuccess: (data) => {
      setValue({ ...value, music_file: data.url });
      setDisabled(false);
    },
  });

  const { mutate: onSubmit } = useMutation({
    mutationFn: uploadAll,
    mutationKey: ["uploadAll"],
    onSuccess: (data) => {
      alert("음악이 추가되었습니다.");
      setOpenModal(false);
    },
  });

  return (
    <>
      {openModal && (
        <div
          className={`fixed top-0 left-0 w-full h-full z-[9999999] bg-500 bg-opacity-70`}
        >
          <div className="max-w-[380px] w-[90vw] bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-solid p-2 flex flex-col gap-1">
            <div className="flex gap-1 items-center">
              <input
                type="file"
                accept="audio/*"
                onChange={(e) => {
                  setMusicFile(e.target.files![0]);
                }}
              />
              <button
                className="bg-300 dark:bg-300-dark min-w-fit p-2 rounded-lg"
                onClick={() => {
                  if (musicFile) mutate(musicFile);
                }}
              >
                음악 업로드
              </button>
            </div>
            <input
              type="text"
              placeholder="제목"
              name="title"
              onChange={onChange}
              disabled={disabled}
              className="border-2 border-gray-300 rounded-md p-2 w-full"
            />
            <input
              type="text"
              placeholder="가수"
              name="singer"
              onChange={onChange}
              disabled={disabled}
              className="border-2 border-gray-300 rounded-md p-2 w-full"
            />
            <input
              type="text"
              placeholder="앨범"
              name="album"
              onChange={onChange}
              disabled={disabled}
              className="border-2 border-gray-300 rounded-md p-2 w-full"
            />
            <input
              type="text"
              placeholder="발매일"
              name="release_date"
              onChange={onChange}
              disabled={disabled}
              className="border-2 border-gray-300 rounded-md p-2 w-full"
            />
            <input
              type="text"
              placeholder="장르"
              name="genre"
              onChange={onChange}
              disabled={disabled}
              className="border-2 border-gray-300 rounded-md p-2 w-full"
            />
            <textarea
              placeholder="가사"
              name="lyrics"
              onChange={onChange}
              disabled={disabled}
              className="border-2 border-gray-300 rounded-md p-2 w-full"
            />
            <input
              type="text"
              placeholder="섬네일"
              name="subnail"
              onChange={onChange}
              disabled={disabled}
              className="border-2 border-gray-300 rounded-md p-2 w-full"
            />
            <button
              onClick={(e) => onSubmit(value)}
              className="bg-blue-500 text-white p-2 rounded-md w-full"
            >
              음악 추가
            </button>
          </div>
        </div>
      )}
    </>
  );
};
