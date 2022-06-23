import { useSession } from 'next-auth/react';

import { Data, getSjcData } from './api/sjc-data';

import Login from './login';
import Home, { HomeProps } from './home';

export default function Init({ infos }: HomeProps) {
  const { status } = useSession();

  return (
    <>
      {status === 'authenticated' ? <Home infos={infos} /> : <Login />}
    </>
  );
}

export async function getStaticProps() {
  const {
    titles,
    historical_games,
    players,
    records
  }: Data = await getSjcData();

  const infos = {
    titles,
    historical_games,
    players,
    records
  }

  return {
    props: { infos }
  };
}