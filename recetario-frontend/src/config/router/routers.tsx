import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthScreen from "../../presentation/pages/auth_screen";
import NotFound404Screen from "../../presentation/pages/404Screen";
import HomeScreen from "../../presentation/pages/home_screen";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="*" element={<NotFound404Screen />} />
      </Routes>
    </Router>
  );
};


export default MyRoutes;
