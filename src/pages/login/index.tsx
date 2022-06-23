import Head from 'next/head';
import Image from 'next/image';

import { SignInButton } from '../../components/SignInButton';

import logoSjc from '../../../public/sjc.png';

import { Content, Header, Form } from './styles';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login SJC FC Feminino</title>
      </Head>

      <Content>
        <Header>
          <Image
            src={logoSjc}
            alt="Rick"
            width='200'
            height='200'
            layout='fixed'
          />
        </Header>

        <Form>
          <SignInButton provider='GitHub' />
          <SignInButton provider='FaceBook' />
        </Form>
      </Content>
    </>
  );
}
