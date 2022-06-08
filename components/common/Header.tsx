import React from 'react'
import { css } from '@emotion/react'

const Header: React.FC = () => {
  return (
    <div css={headerStyle}>
      iOSアプリMazemaze
    </div>
  )
}

const headerStyle = css`
  padding: 8px 16px 6px 16px;
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid rgb(220, 220, 220);
  transform: translate3d(0, 0, 0);
  z-index: 100;
  display: flex;
  align-items: center;
`

export default Header