import Home from "./pages/Home";
import ActivityDetails from "./pages/ActivityDetails";
import RoomDetail from "./pages/RoomDetail";
import UserRooms from "./pages/UserRooms";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/activity/:eid" element={<ActivityDetails />} />
        <Route path="/activity/:eid/room/:rid" element={<RoomDetail />} />
        <Route path="/user/" element={<UserRooms />} />
      </Routes>
    </>
  );
}

export default App;
