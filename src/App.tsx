import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Player from "./routes/PlayerDetails";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold">
        Learn more about your favorite player
      </h1>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Player />} path="/:playerId" />
      </Routes>
    </>
  );
}

export default App;
