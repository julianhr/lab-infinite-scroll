import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'


const Root = styled.article`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 25px 30px;
  flex-shrink: 0;
  background: white;
`

const H2 = styled.h1`
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 10px;
`

const P = styled.p`
  padding-top: 0.9em;
`

const Img = styled.img`
  float: left;
  width: 200px;
  height: 120px;
  padding-right: 40px;
  padding-bottom: 10px;
`

function Card({ title, imgUrl, description }) {
  const pElDescription = description.map((desc, i) =>
    <P key={i}>{desc}</P>
  )

  return (
    <Root>
      <Img src={imgUrl} />
      <H2>{title}</H2>
      {pElDescription}
    </Root>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  description: PropTypes.array.isRequired,
}

export default Card
