import { Header } from "@/components/common/Header";
import { AudioController } from "@/components/player/audioController";
import { CdPlayer } from "@/components/player/cdPlayer";

export default function Player() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header title="HOME" />
      <div className="flex flex-1 flex-col justify-evenly ">
        <CdPlayer />
        <AudioController />
      </div>
    </div>
  );
}
