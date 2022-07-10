import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        //element is the component that will be rendered when the path matches
        the url in the browser hotel component shows the hotel details and the
        list component shows the list of hotels and the home component shows the
        home page
      </Routes>
    </BrowserRouter>
  );
}

export default App;
