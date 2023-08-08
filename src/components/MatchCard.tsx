import { MatchesQuery } from "~/app/services/matches/queryMatches.generated";
import { parseDate } from "~/utils/dateTime";
import Table from "~/components/Table";
import Card from "~/components/Card";

type MatchCardProps = {
  match: MatchesQuery["matches"][number];
};

export default function MatchCard({ match }: MatchCardProps) {
  const content = {
    "start:": parseDate(match.startTime).toLocaleString(),
    "end:": parseDate(match.endTime).toLocaleString(),
  };
  return (
    <Card>
      <h3>
        {match.players[0].firstname} {match.players[0].lastname} vs{" "}
        {match.players[1].firstname} {match.players[1].lastname}
      </h3>
      <Table content={content} tableKey={match.id} />
    </Card>
  );
}
