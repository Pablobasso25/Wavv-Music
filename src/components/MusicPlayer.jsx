import React from "react";
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

      <div className="song-info text-center flex-grow-1">
                <img
          className="rounded-3"
          src={currentSong?.cover || trendImg}
          alt={currentSong?.title || "Album cover"}
          style={{ maxWidth: "280px", height: "200px", objectFit: "cover" }}
        />

        <div className="description mb-4">
          <h3 className="fw-bold mb-2">
            {currentSong?.title || "Ripple Echoes"}
          </h3>
          <h5 className="text-white-50 mb-1">
            {currentSong?.artist || "Kael Fischer"}
          </h5>
          <p className="text-secondary small fw-bold">
            {currentSong?.album || "Best of 2024"} •{" "}
            {currentSong?.genre || "Electronic"}
          </p>
        </div>

      </div>

  );
};


export default MusicPlayer;
