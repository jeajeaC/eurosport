import type { PlayersQuery } from "~/features/players/queryPlayers.generated";
import type { MatchesQuery } from "~/features/matches/GetMatches.generated";

import { formatDuration, getDiffTime, parseDate } from "~/utils/dateTime";
import { Link } from "react-router-dom";

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

  return (
    <div className="card">
      <img alt="" src={player.picture.url} />
      <h3>{`${player.firstname} ${player.lastname}`}</h3>
      <div>
        <table>
          <tbody>
            <tr>
              <td>age :</td>
              <td>{player.stats.age}</td>
            </tr>
            <tr>
              <td>height</td>
              <td>{player.stats.height / 100} m</td>
            </tr>
            <tr>
              <td>weight</td>
              <td>{player.stats.weight / 1000} kg</td>
            </tr>
            <tr>
              <td>points :</td>
              <td>{player.stats.points}</td>
            </tr>
            <tr>
              <td>points :</td>
              <td>{player.stats.rank}</td>
            </tr>
            <tr>
              <td>wins :</td>
              <td>{wins}</td>
            </tr>
            <tr>
              <td>total time played :</td>
              <td>{formatDuration(totalTimePlayed)}</td>
            </tr>
          </tbody>
        </table>
        <Link to={`/${player.id}`}>
          <button id={player.id}>Detail of won games</button>
        </Link>
      </div>
    </div>
  );
}
