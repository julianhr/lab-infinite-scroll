import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'


const Root = styled.article`
  display: flex;
  width: 100%;
  background: plum;
`

function Card({ title, imgUrl, description }) {
  const pElDescription = description.map((desc, i) =>
    <p key={i}>desc</p>
  )

  return (
    <Root>
      <div>
        <img src={imgUrl} />
      </div>
      <div>
        <h3>{title}</h3>
        {pElDescription}
      </div>
    </Root>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  description: PropTypes.string.isRequired,
}

export default Card
