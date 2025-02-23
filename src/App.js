import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import DailyRandomColor from "./dailyRandomColor/DailyRandomColor";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="daily-random-color" element={<DailyRandomColor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
