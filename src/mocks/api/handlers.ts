import { graphql } from "msw";
import playersReponse from "./players.mock.json";
import matchesReponse from "./matches.mock.json";

export const handlers = [
  graphql.query("Players", (_req, res, ctx) => {
    return res(ctx.data(playersReponse));
  }),
  graphql.query("Matches", (_req, res, ctx) => {
    return res(ctx.data(matchesReponse));
  }),
];
