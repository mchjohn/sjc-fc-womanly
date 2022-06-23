import { styled, } from "../../../stitches.config";

export const Container = styled('div', {
  height: '100vh',
  background: "$white",
})

export const Header = styled('header', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  padding: '1rem',

  background: "$blue800",

  '& p': {
    color: '$yellow',
    fontWeight: 600,
    fontSize: '1rem',
    textAlign: 'justify',
  },

  '& div': {
    textAlign: 'center',
    marginLeft: '0.5rem',
  },
});

export const Button = styled('button', {
  outline: 'none',
  border: 'none',
  fontSize: '1rem',
  fontWeight: 100,
  background: "$blue800",
  color: 'rgb(125, 125, 125)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,
  width: 84,

  transition: 'all 0.2s',

  '&:hover': {
    color: 'rgb(100, 100, 100)',
  }
})

export const Details = styled('div', {
  padding: '1rem',

  '& p': {
    color: '$black',
    fontWeight: 400,
    fontSize: '1rem',
    textAlign: 'justify',
  },

  '& span': {
    color: '$yellow',
    fontWeight: 900,
    fontSize: '1.1rem',
  },
});

export const Section = styled('section', {
  padding: '1rem',
  color: "$black",

  '& h3': {
    fontSize: '1.3rem',
    fontWeight: 500,
    background: "$yellow",
    padding: '4px 1rem',
    borderRadius: 8,
  },

  '& p': {
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    marginTop: 8,
    marginLeft: '1rem',
  },

  '& svg': {
    width: '1.2rem',
    height: '1.2rem',
    color: '$yellow',
  },
})

export const Footer = styled('div', {
  padding: 8,
  width: '100%',
  margin: '1rem 0',
  color: "$black",
  cursor: 'pointer',

  transition: 'all 0.2s',

  '& div': {
    padding: 8,
    background: "$yellow",
    borderRadius: 8,
    textAlign: 'center',
  },

  '& a': {
    
    fontSize: '1rem',
    fontWeight: 'bold',
  },

  '&:hover div': {
    background: "$blue600",
    color: '$white',
  }
})
