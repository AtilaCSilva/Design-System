import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',
  '&:disabled': {
    cursor: 'not-allowed'
  },
  svg: {
    width: '$4',
    height: '$4'
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$ignite500',
        '&:not(:disabled):hover': {
          backgroundColor: '$ignite300'
        },
        '&:disabled': {
          backgroundColor: '$gray200'
        }
      },
      secondary: {
        color: '$ignite300',
        border: '2px solid $ignite300',
        '&:not(:disabled):hover': {
          backgroundColor: '$ignite500',
          color: '$white'
        },
        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        }
      },
      tertiary: {
        color: '$gray200',
        '&:not(:disabled):hover': {
          color: '$white',
        },
        '&:disabled': {
          color: '$gray600',
        }
      }
    },
    size: {
      sm: {
        padding: '0 $2',
        height: 38
      },
      md: {
        padding: '0 $4',
        height: 46
      }
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
})