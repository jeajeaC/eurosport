import PlayerCard from "~/components/PlayerCard";
import { MatchesQuery } from "~/features/matches/GetMatches.generated";
import { PlayersQuery } from "~/features/players/GetPlayers.generated";
type HomeProps = {
  players: PlayersQuery["players"];
  matches: MatchesQuery["matches"];
};
export default function Home({ players, matches }: HomeProps) {
  return (
    <div className="list">
      {players.map((player) => {
        return <PlayerCard key={player.id} player={player} matches={matches} />;
      })}
    </div>
  );
}
