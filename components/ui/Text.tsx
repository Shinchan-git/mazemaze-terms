import React from 'react'
import { css } from '@emotion/react'

type Props = {
  children?: React.ReactNode
}

const Text: React.FC<Props> = (props) => {
  return (
    <p css={textStyle}>
      {props.children}
    </p>
  )
}

const textStyle = css`
  font-size: 17px;
  color: #060A1A;
  line-height: 1.7;
  margin: 5px 0 20px 0;

  @media(min-width: 500px) {
    font-size: 18px;
  }
`

export default Text