export type Data = {
  titles: [
    { title: string }
  ];
  players: [
    { name: string }
  ],
  records: [
    { title: string }
  ],
  historical_games: [
    { name: string }
  ];
}

export type Games = {
  games: [
    { date: string, hour: string, teams: string }
  ]
}

const baseUrl = 'http://localhost:3001';

export async function getSjcData<Data>(): Promise<Data> {
  const response = await fetch(`${baseUrl}/db`);

  const data_sjc: Data = await response.json();

  return data_sjc;
}

export async function getGameSchedule<Games>(): Promise<Games> {
  const response = await fetch(`${baseUrl}/games`);

  const games_sjc: Games = await response.json();

  return games_sjc;
}
