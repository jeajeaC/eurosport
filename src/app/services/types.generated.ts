export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Country = {
  __typename?: 'Country';
  code: Scalars['String']['output'];
  picture: Picture;
};

export type Match = {
  __typename?: 'Match';
  endTime: Scalars['String']['output'];
  id: Scalars['String']['output'];
  players: Array<Player>;
  startTime: Scalars['String']['output'];
  winner: Player;
};

export type Picture = {
  __typename?: 'Picture';
  url: Scalars['String']['output'];
};

export type Player = {
  __typename?: 'Player';
  country: Country;
  firstname: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastname: Scalars['String']['output'];
  picture: Picture;
  sex: Sex;
  shortname: Scalars['String']['output'];
  stats: Stats;
};

export type Query = {
  __typename?: 'Query';
  matches: Array<Match>;
  players: Array<Player>;
};

export enum Sex {
  Man = 'MAN',
  Woman = 'WOMAN'
}

export type Stats = {
  __typename?: 'Stats';
  age: Scalars['Int']['output'];
  height: Scalars['Int']['output'];
  points: Scalars['Int']['output'];
  rank: Scalars['Int']['output'];
  weight: Scalars['Int']['output'];
};
