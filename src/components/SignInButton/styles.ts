import { styled, } from "../../../stitches.config";

export const Button = styled('button', {
  width: '100%',
  minWidth: 220,
  marginTop: '1rem',
  background: "$black",
  border: 'none',
  padding: '0.875rem',
  borderRadius: 8,
  fontSize: '1rem',
  fontWeight: 'bold',
  color: "$white",

  transition: "all 0.2s",

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',

  '& svg': {
    width: '2rem',
    height: '2rem',
    color: "$white",
  },

  '&.GitHub': {
    background: '$black',
  },
  '&.FaceBook': {
    background: '$blue600',
  },

  '&:hover': {
    opacity: 0.9
  }
})
