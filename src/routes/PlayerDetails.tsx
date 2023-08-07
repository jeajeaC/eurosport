import { Link, useParams } from "react-router-dom";
import MatchCard from "~/components/MatchCard";
import { useMatchesQuery } from "~/app/services/matches/queryMatches.generated";
import { usePlayersQuery } from "~/app/services/players/queryPlayers.generated";

export default function Player() {
  const { playerId } = useParams();
  const players = usePlayersQuery();
  const matchesQuery = useMatchesQuery();

  const player = players.data?.players.find((player) => playerId === player.id);
  if (matchesQuery.isLoading) {
    return <div>Loading...</div>;
  }
  if (
    typeof matchesQuery.data === "undefined" ||
    typeof matchesQuery.data?.matches === "undefined"
  ) {
    return <div>Oups! An error occured...</div>;
  }

  const wonMatches = matchesQuery.data.matches.filter((match) => {
    return match.winner.id === playerId;
  });
  if (!player) return <div>Oups! An error occured...</div>;

  return (
    <>
      <p>
        This is a recap of each of {player.firstname} {player.lastname}&apos;s
        winning games. <Link to={`/`}>Go back</Link>
      </p>

      <div className="list">
        {wonMatches.map((match) => {
          return <MatchCard key={match.id} match={match} />;
        })}
      </div>
    </>
  );
}
