import React from 'react'
import { css } from '@emotion/react'

type Props = {
  children?: React.ReactNode
}

const PageTitle: React.FC<Props> = (props) => {
  return (
    <h1 css={titleStyle}>
      {props.children}
    </h1>
  )
}

const titleStyle = css`
  text-align: center;
  font-size: 21px;
  color: #060A1A;
  margin: 20px 0;
  line-height: 1.7;

  @media(min-width: 500px) {
    font-size: 23px;
  }
`

export default PageTitle