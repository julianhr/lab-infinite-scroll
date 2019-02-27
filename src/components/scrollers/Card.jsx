import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'


const Root = styled.article`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 25px 30px;
  flex-shrink: 0;
`

const H2 = styled.h1`
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 10px;
`

const P = styled.p`
  padding-top: 5px;
`

const Img = styled.img`
  float: left;
  width: 200px;
  height: 120px;
  padding-right: 40px;
  padding-bottom: 10px;
`

function Card({ title, imgUrl, description, forwardedRef, position }) {
  const pElDescription = description.map((desc, i) =>
    <P key={i}>{desc}</P>
  )

  return (
    <Root
      ref={forwardedRef}
      css={{
        background: forwardedRef ? '#f0d5ea' : 'white',
        border: forwardedRef ? '1px solid #a07f99' : null,
      }}
    >
      <Img src={imgUrl} />
      <H2>{`${position}. ${title}`}</H2>
      {pElDescription}
    </Root>
  )
}

Card.propTypes = {
  description: PropTypes.array.isRequired,
  forwardedRef: PropTypes.object,
  imgUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  position: PropTypes.number,
}

export default Card
