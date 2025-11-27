import { Container,  } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const MusicPlayer = () => {
    const {
    currentSong,
    audioRef,
    handleTimeUpdate,

  };

  return (
    <Container
      className="music-player rounded-4 p-4 d-flex flex-column gap-4"
      style={{ width: "20vw", height: "80vh" }}
    >
      {currentSong?.audio && (
        <audio
          ref={audioRef}
          src={currentSong.audio}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleTimeUpdate}
          autoPlay
        />
      )}
    

  )
}

export default MusicPlayer;
