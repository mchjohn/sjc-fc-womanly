import { signIn, useSession } from 'next-auth/react';
import { FaGithubSquare, FaFacebookSquare } from 'react-icons/fa';

import { Button } from './styles';

type SignInButtonProps = {
  provider: 'GitHub' | 'FaceBook';
};

export function SignInButton({ provider }: SignInButtonProps) {
  const { status } = useSession();

  const parseProvider = provider === 'GitHub' ? 'github' : 'facebook';
  
  return (
    <Button
      type="button"
      className={provider}
      disabled={status === 'loading'}
      onClick={() => signIn(parseProvider)}
    >
      {
        provider === 'GitHub' ? <FaGithubSquare /> : <FaFacebookSquare />
      }
      Entrar com {provider}
    </Button>
  )
}