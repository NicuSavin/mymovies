import TopBar from "./topBar";
import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";
import MoviesPage from "./pages/movies";
import SeriesPage from "./pages/series";
import CelebsPage from "./pages/celebs";
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
