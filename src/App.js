import TopBar from "./pages/components/topBar";
import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";
import MoviesPage from "./pages/movies";
import SeriesPage from "./pages/series";
import CelebsPage from "./pages/celebs";
import PageNotFound from "./pages/components/pageNotFound";
import MyList from "./pages/myList";
function App() {
  if (!localStorage.getItem("watchLater")) {
    localStorage.setItem(
      "watchLater",
      JSON.stringify({ movies: [], series: [] })
    );
  }

  if (!localStorage.getItem("watched")) {
    localStorage.setItem("watched", JSON.stringify({ movies: [], series: [] }));
  }
  return (
    <div>
      <TopBar />
      <Routes>
        <Route exact path="*" element={<PageNotFound />}></Route>
        <Route exact path="/" element={<Navigate to="/home" />} />
        <Route exact path="/home" element={<MainPage />}></Route>
        <Route exact path="/movies" element={<MoviesPage />}></Route>
        <Route exact path="/series" element={<SeriesPage />}></Route>
        <Route exact path="/celebs" element={<CelebsPage />}></Route>
        <Route exact path="/mylist" element={<MyList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
