import { styled, } from "../../../stitches.config";

export const Content = styled('main', {
  height: '100vh',

  '@bp1': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: "$blue900",
  padding: '2rem',

  '@bp1': {
    width: '50%',
    height: '100vh',
  }
});

export const Form = styled('div', {
  marginTop: 120,
  padding: '0 1rem',

  '@bp1': {
    marginTop: 0,
    width: '50%'
  }
});
