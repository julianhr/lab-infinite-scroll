import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { connect } from 'react-redux'

import mdScrollerContainerHeights from './scroller_container_height.md'


const Root = styled.section`
  grid-area: b1;
  display: flex;
  flex-direction: column;
  width: 100%;

  ${props => props.theme.queries.from('md')} {
    grid-row: 2 / span 1;
    grid-column: 1 / span 1
  }
`

class Description extends React.PureComponent {
  static propTypes = {
    scrollerType: PropTypes.string,
  }
  
  getDescription() {
    switch (this.props.scrollerType) {
      case 'intersectionObserver':
        return mdScrollerContainerHeights
    }
  }

  render() {
    return (
      <Root dangerouslySetInnerHTML={{ __html: this.getDescription() }} />
    )
  }
}

const mapStateToProps = ({ scrollerType }) => (
  { scrollerType }
)

export default connect(mapStateToProps)(Description)
