import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/nav";
import Home from "../pages/Home";
import Write from "../pages/Write";
import Search from "../pages/Search";

export default function index() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
