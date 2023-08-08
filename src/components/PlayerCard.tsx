import type { MatchesQuery } from "~/app/services/matches/queryMatches.generated";
import { PlayersQuery } from "~/app/services/players/queryPlayers.generated";

import { formatDuration, getDiffTime, parseDate } from "~/utils/dateTime";
import { Link } from "react-router-dom";
import Table from "~/components/Table";
import Button from "~/components/Button";
import Card from "~/components/Card";

type PlayerCardProps = {
  player: PlayersQuery["players"][number];
  matches: MatchesQuery["matches"];
};

export default function PlayerCard({ player, matches }: PlayerCardProps) {
  const wins = matches.filter((match) => {
    return match.winner.id === player.id;
  }).length;

  const totalTimePlayed = matches.reduce((acc, cur) => {
    if (cur.players.some((matchPlayer) => matchPlayer.id === player.id)) {
      const startTime = parseDate(cur.startTime);
      const endTime = parseDate(cur.endTime);
      const diffDays = getDiffTime(startTime, endTime);

      return acc + diffDays;
    }
    return acc;
  }, 0);

  const content = {
    age: `${player.stats.age}`,
    height: `${player.stats.height / 100}m`,
    weight: `${player.stats.weight / 1000}kg`,
    points: `${player.stats.points}`,
    wins: `${wins}`,
    loses: `${matches.length - wins}`,
    "total time played": formatDuration(totalTimePlayed),
  };

  return (
    <Card>
      <img className="mx-auto" alt="" src={player.picture.url} />
      <h3 className="font-bold">{`${player.firstname} ${player.lastname}`}</h3>
      <div>
        <Table content={content} tableKey={player.id} />

        <Link to={`/${player.id}`}>
          <Button id={player.id}>Detail of won games</Button>
        </Link>
      </div>
    </Card>
  );
}
