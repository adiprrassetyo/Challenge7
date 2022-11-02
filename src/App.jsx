import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Cars from "./pages/Cars";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
