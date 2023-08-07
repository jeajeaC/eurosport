import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Player from "./routes/PlayerDetails";

import { usePlayersQuery } from "~/features/players/GetPlayers.generated";
import { useMatchesQuery } from "~/features/matches/GetMatches.generated";

function App() {
  const playersQuery = usePlayersQuery();
  const matchesQuery = useMatchesQuery();

  if (playersQuery.isLoading || matchesQuery.isLoading) {
    return <div>loading...</div>;
  }

  if (playersQuery.isError || matchesQuery.isError) {
    return <div>Oups! An error occured...</div>;
  }

  if (
    typeof playersQuery.data === "undefined" ||
    typeof playersQuery.data?.players === "undefined" ||
    typeof matchesQuery.data === "undefined" ||
    typeof matchesQuery.data?.matches === "undefined"
  ) {
    return <div>Oups! An error occured...</div>;
  }
  return (
    <Routes>
      <Route
        element={
          <Home
            players={playersQuery.data.players}
            matches={matchesQuery.data.matches}
          />
        }
        path="/"
      />
      <Route element={<Player />} path="/:playerId" />
    </Routes>
  );
}

export default App;
