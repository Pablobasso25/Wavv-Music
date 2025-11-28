import { Container, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import trendImg from "../assets/trend.png";
import { useMusicPlayer } from "../context/MusicPlayerContext";

const TopSongs = ({ album, isPlaylist = false, fromHome = false }) => {
  const { playSong, currentSong, isPlaying } = useMusicPlayer();
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    const loadPlaylist = () => {
      const storedPlaylist =
        JSON.parse(localStorage.getItem("userPlaylist")) || [];
      setPlaylist(storedPlaylist);
    };

    loadPlaylist();

    window.addEventListener("storage", loadPlaylist);
    const customListener = () => loadPlaylist();
    window.addEventListener("playlistUpdated", customListener);

    return () => {
      window.removeEventListener("storage", loadPlaylist);
      window.removeEventListener("playlistUpdated", customListener);
    };
  }, []);

 

  const handleAddToPlaylist = (track) => {
    const songData = {
      id: Date.now(),
      title: track.name,
      artist: album.artists?.[0]?.name || "Artista",
      album: album.name,
      cover: album.image,
      audio: track.preview_url,
      genre: "Music",
      name: track.name,
      duration_ms: track.duration_ms,
    };

    const exists = playlist.some(
      (song) => song.name === track.name && song.album === album.name
    );

    if (exists) {
      toast.warning("⚠️ Esta canción ya está en tu playlist.");
      return;
    }

    const updatedPlaylist = [...playlist, songData];
    setPlaylist(updatedPlaylist);
    localStorage.setItem("userPlaylist", JSON.stringify(updatedPlaylist));
    window.dispatchEvent(new Event("storage"));
    window.dispatchEvent(new Event("playlistUpdated"));

    toast.success(`🎵 "${track.name}" agregada a tu playlist.`);
  };


  const handleRemoveFromPlaylist = (track) => {
    toast.info(
      `🗑️ Eliminando "${track.name}"...`,
      { autoClose: 800 }
    );

    const updatedPlaylist = playlist.filter(
      (song) => !(song.name === track.name && song.album === track.album)
    );

    setPlaylist(updatedPlaylist);
    localStorage.setItem("userPlaylist", JSON.stringify(updatedPlaylist));
    window.dispatchEvent(new Event("storage"));
    window.dispatchEvent(new Event("playlistUpdated"));

    toast.success(`❌ "${track.name}" eliminada de tu playlist.`);
  };

  const isInPlaylist = (trackName) => {
    return playlist.some(
      (song) => song.name === trackName && song.album === album.name
    );
  };

  if (!album || !album.tracks || album.tracks.length === 0) {
    return (
      <Col xs={12}>
        <div className="music-list bg-dark text-white rounded p-3 h-100">
          <h5>⚠️ No hay canciones disponibles</h5>
          <p className="text-secondary">
            Seleccioná un artista del sidebar o agregá uno desde el panel.
          </p>
        </div>
      </Col>
    );
  }

  return (
    <Container style={{ width: "60vw" }}>
      <div
        className="music-list p-3 rounded-4"
        style={{
          backgroundColor: "#0f0f0f",
          height: fromHome ? "calc(80vh - 280px)" : "80vh",
          overflowY: "auto",
        }}
      >
        <div className="header d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">Canciones de {album.name}</h5>
          <span className="text-secondary small">{album.release_date}</span>
        </div>

        <div className="items">
          {album.tracks.map((track, index) => {
            const isCurrentTrack = currentSong?.name === track.name;

              return (
              <div
                key={index}
                className="item d-flex align-items-center justify-content-between p-3 rounded-3 mb-2 cursor-pointer"
                style={{ backgroundColor: "#18181d" }}
                onClick={() => {
                  const songData = {
                    title: track.name,
                    artist: album.artists?.[0]?.name || "Artista",
                    album: album.name,
                    cover: album.image,
                    audio: track.preview_url,
                    genre: "Music",
                    name: track.name,
                  };
                 
