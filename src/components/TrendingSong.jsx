import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import trendImg from "../assets/trend.png";
import { useMusicPlayer } from "../context/MusicPlayerContext";

const TrendingSong = () => {
  const { playSong } = useMusicPlayer();
  const [trendingSong, setTrendingSong] = useState({
    title: "Lost Emotions",
    artist: "Rion Clarke",
    album: "Digital Dreams",
    cover: trendImg,
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    genre: "Electronic",
    plays: "63 Million Plays",
  });

  useEffect(() => {
    const loadTrendingSong = () => {
      const storedTrending = localStorage.getItem("trendingSong");
      if (storedTrending) {
        setTrendingSong(JSON.parse(storedTrending));
      }
    };

    loadTrendingSong();
    window.addEventListener("storage", loadTrendingSong);

    return () => window.removeEventListener("storage", loadTrendingSong);
  }, []);

  return (
    <Container style={{ width: "60vw", margin: "1rem" }}>
      <Row
        className="align-items-center p-4 rounded-4"
        style={{ backgroundColor: "#000000ff" }}
      >
        Trend content here
      </Row>
    </Container>
  );
};

export default TrendingSong;
