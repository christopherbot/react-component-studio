import React from 'react'
import PropTypes from 'prop-types'

require('./loadingBar.scss')

const LoadingBar = ({ overrideContainerClass, height, color, animationDuration }) =>
  <div
    className={`
      loading-bar__container
      ${overrideContainerClass || 'loading-bar__container--defaults'}
    `}
    style={{ height }}
  >
    <div className="loading-bar" style={{ backgroundColor: color, animationDuration }} />
  </div>

LoadingBar.defaultProps = {
  height: '100%',
  color: '#0095e2',
  animationDuration: '10s',
}

LoadingBar.propTypes = {
  overrideContainerClass: PropTypes.string,
  height: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  animationDuration: PropTypes.string.isRequired,
}

export default LoadingBar
