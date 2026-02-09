import MusicsPage from "./musics/page";
import VideosPage from "./videos/page";

export default function Home() {
  return (
    <>
      <h2>Início</h2>
      <VideosPage />
      <MusicsPage />
    </>
  );
}
