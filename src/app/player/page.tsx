import { HeadFootLayout } from "@/components/common/HeadFootLayout";
import { AudioController } from "@/components/player/audioController";
import { CdPlayer } from "@/components/player/cdPlayer";
import { Lyrics } from "@/components/player/lyrics";

export default function Player() {
  return (
    <HeadFootLayout title="HOME">
      <CdPlayer />
      <AudioController />
      <Lyrics />
    </HeadFootLayout>
  );
}
