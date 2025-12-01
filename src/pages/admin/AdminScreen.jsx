// =====================================================
//  ARCHIVO PRINCIPAL - AdminScreen.jsx
// =====================================================
// RESPONSABLE: Pablo
// TAREA: unir  todos los componentes
// =====================================================

import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import NavBar from "../../components/NavBar";
import UsersSection from "./components/UsersSection";
import SongsSection from "./components/SongsSection";
import ArtistsSection from "./components/ArtistsSection";

const AdminScreen = () => {
  // ============================================
  // ESTADOS GLOBALES (compartidos entre componentes)
  // ============================================
  const [users, setUsers] = useState([]);
  const [songs, setSongs] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [savedArtists, setSavedArtists] = useState([]);

  // ============================================
  // CARGA INICIAL DE DATOS
  // ============================================
  useEffect(() => {
    const loadData = () => {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      const storedSongs = JSON.parse(localStorage.getItem("songs")) || [];
      const storedAlbums = JSON.parse(localStorage.getItem("albums")) || [];
      const storedArtists = JSON.parse(localStorage.getItem("artistas")) || [];

      setUsers(storedUsers);
      setSongs(storedSongs);
      setAlbums(storedAlbums);
      setSavedArtists(storedArtists);
    };

    loadData();

    // Escuchar cambios en localStorage (sincronización)
    window.addEventListener("storage", loadData);
    return () => window.removeEventListener("storage", loadData);
  }, []);

  // ============================================
  // RENDER
  // ============================================
  return (
    <>
      <NavBar />
      <Container className="py-5">
        {/* 1️⃣ SECCIÓN USUARIOS - Alvaro */}
        <UsersSection users={users} setUsers={setUsers} />

        {/* 2️⃣ SECCIÓN CANCIONES - Romina */}
        <SongsSection songs={songs} setSongs={setSongs} />

        {/* 3️⃣ SECCIÓN ARTISTAS - Juan */}
        <ArtistsSection
          albums={albums}
          setAlbums={setAlbums}
          savedArtists={savedArtists}
          setSavedArtists={setSavedArtists}
        />
      </Container>
    </>
  );
};

export default AdminScreen;
