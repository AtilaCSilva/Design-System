import { styled } from "../../styles";

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'baseline',

  '&:has(input:focus)': {
    borderColor: '$ignite300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  }
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: '$regular',
  lineHeight: '$base',
  whiteSpace: 'nowrap',

})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  backgroundColor: 'transparent',
  border: 0,
  width: '100%',
  padding: 0,
  height: '$2',

  '&:focus': {
    outline: 0,
    boxShadow: '0 0 0 2px $ignite300',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})