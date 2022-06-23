import Head from 'next/head';
import Link from 'next/link';

import { getGameSchedule, Games } from '../api/sjc-data';

import { Container, Item, Date, Team, TextTeam, TextDate, Footer } from './styles';

type GameScheduleProps = {
  data: Games;
}

export default function GameSchedule({ data }: GameScheduleProps) {
  return (
    <Container>
      <Head>
        <title>Partidas</title>
      </Head>

      {data.games.map(({date, hour, teams}) => {
        return (
          <Item key={teams}>
            <Date>
              <TextDate>{date}</TextDate>
              <TextDate>{hour}</TextDate>
            </Date>

            <Team>
              <TextTeam>{teams}</TextTeam>
            </Team>
          </Item>
        )
      })}

      <Link href="/">
        <Footer>
          <div>
            <a>Voltar para o museu</a>
          </div>
        </Footer>
      </Link>
    </Container>
  )
}

export async function getStaticProps() {
  const games = await getGameSchedule();

  const data = { games };
  
  return {
    props: { data }
  };
}