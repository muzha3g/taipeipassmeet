import Home from "./pages/Home";
import ActivityDetails from "./pages/ActivityDetails";
import RoomDetail from "./pages/RoomDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/activity/:id" element={<ActivityDetails />} />
        <Route path="/room/:id" element={<RoomDetail />} />
      </Routes>
    </>
  );
}

export default App;
