import "./App.css";
import Home from "./pages/Home";
import ActivityDetails from "./pages/ActivityDetails";
import RoomDetail from "./pages/RoomDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="m-10">
      {/* tailwindcss + daisyUI CDN */}
      <link
        href="https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <script src="https://cdn.tailwindcss.com"></script>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/activity" element={<ActivityDetails />} />
        <Route path="/activity/room" element={<RoomDetail />} />
      </Routes>
    </div>
  );
}

export default App;
