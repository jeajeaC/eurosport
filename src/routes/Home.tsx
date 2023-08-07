import PlayerCard from "~/components/PlayerCard";
import { usePlayersQuery } from "~/features/players/queryPlayers.generated";
import { useMatchesQuery } from "~/features/matches/GetMatches.generated";

export default function Home() {
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

  const players = playersQuery.data.players;
  const matches = matchesQuery.data.matches;

  return (
    <div className="list">
      {players.map((player) => {
        return <PlayerCard key={player.id} player={player} matches={matches} />;
      })}
    </div>
  );
}
