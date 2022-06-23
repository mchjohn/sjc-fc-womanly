import { styled } from "../../../stitches.config";

export const Container = styled('div', {
  padding: '1rem',
})

export const Item = styled('div', {
  background: '#f6f7fa',
  borderLeftWidth: 4,
  borderLeftStyle: 'solid',
  borderLeftColor: '$yellow',
  marginTop: '1rem',
  padding: '1rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const Date = styled('div', {
  
})

export const Team = styled('div', {
  width: '100%'
})

export const TextDate = styled('p', {
  fontSize: '1rem',
  fontWeight: 900,
  color: '$blue600',
})

export const TextTeam = styled('p', {
  fontSize: '1.2rem',
  fontWeight: 900,
  color: '$blue600',
  textAlign: 'center',
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