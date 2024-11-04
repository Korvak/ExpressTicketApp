import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//pages
import Navbar from './pages/shared/Navbar';
import ExplorePage from './pages/explore/ExplorePage';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar>
        <a href="/"> explore </a>
        <a href="/home"> home </a>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ExplorePage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
