import TopBar from "./pages/components/TopBar";
import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main";
import MoviesPage from "./pages/Movies";
import SeriesPage from "./pages/Series";
import CelebsPage from "./pages/Celebs";
function App() {
  return (
    <div>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />} />
        <Route exact path="/home" element={<MainPage />}></Route>
        <Route exact path="/movies" element={<MoviesPage />}></Route>
        <Route exact path="/series" element={<SeriesPage />}></Route>
        <Route exact path="/celebs" element={<CelebsPage />}></Route>
        <Route exact path="/browse" element={<MainPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
