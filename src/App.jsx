import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterScreen from "./pages/Autenticacion/RegisterScreen";
import LoginScreen from "./pages/Autenticacion/LoginScreen";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
