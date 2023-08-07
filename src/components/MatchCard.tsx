import { MatchesQuery } from "~/features/matches/GetMatches.generated";
import { parseDate } from "~/utils/dateTime";
type MatchCardProps = {
  match: MatchesQuery["matches"][number];
};

export default function MatchCard({ match }: MatchCardProps) {
  const startTime = parseDate(match.startTime);
  const endTime = parseDate(match.endTime);

  return (
    <div className="card">
      <h3>
        {match.players[0].firstname} {match.players[0].lastname} vs{" "}
        {match.players[1].firstname} {match.players[1].lastname}
      </h3>
      <table>
        <tbody>
          <tr>
            <td>start:</td>
            <td>{startTime.toLocaleString()}</td>
          </tr>
          <tr>
            <td>end:</td>
            <td>{endTime.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
