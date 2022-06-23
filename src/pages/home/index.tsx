import Head from 'next/head';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { TbSoccerField } from 'react-icons/tb';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { GiTrophy, GiSoccerKick, GiSoccerBall } from 'react-icons/gi';

import { Data } from '../api/sjc-data';

import { Avatar } from '../../components/Avatar';

import { Container, Header, Details, Section, Footer, Button } from './styles';

export type HomeProps = {
  infos: Data;
}

export default function Home({ infos }: HomeProps) {
  const { data, status } = useSession();

  return (
    <Container>
      <Head>
        <title>Museu SJC FC Feminino</title>
      </Head>

      <Header>
        {
          status === 'authenticated' ?
          <Avatar
            src={data?.user?.image!}
            alt={data?.user?.name!}
          /> :
          null
        }

        <div>
          <p>{data?.user?.name}</p>
          <Button onClick={() => signOut()}>
            <RiLogoutCircleRLine />
            logout
          </Button>
        </div>
      </Header>

      <Details>
        <p>
          O time de <span>futebol feminino de São José dos Campos</span> começou a ser formado em 2000.
          Depois de vencer várias vezes os Jogos Regionais,
          a equipe ganhou projeção além-fronteiras em 2011
          ao conquistar a Libertadores, disputada naquele ano na cidade,
          tendo eliminado na semifinal Santos, então bicampeão e único ganhador do torneio.
        </p>
      </Details>

      <Section>
        <h3>Títulos em competições</h3>

        {
          infos.titles.map(({title}) =>
            <p key={title}>
              <GiTrophy />
              {title}
            </p>
          )
        }

      </Section>

      <Section>
        <h3>Atletas</h3>

        {
          infos.players.map(({name}) =>
            <p key={name}>
              <GiSoccerKick />
              {name}
            </p>
          )
        }
      </Section>

      <Section>
        <h3>Recordes</h3>

        {
          infos.records.map(({title}) =>
            <p key={title}>
              <TbSoccerField />
              {title}
            </p>
          )
        }
      </Section>

      <Section>
        <h3>Jogos Históricos</h3>

        {
          infos.historical_games.map(({name}) =>
            <p key={name}>
              <GiSoccerBall />
              {name}
            </p>
          )
        }
      </Section>

      <Link href="/game-schedule">
        <Footer>
          <div>
            <a>Acessar calendário de jogos</a>
          </div>
        </Footer>
      </Link>
    </Container>
  )
}