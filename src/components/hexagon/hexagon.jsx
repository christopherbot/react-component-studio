import React from 'react'
import PropTypes from 'prop-types'

import './hexagon.scss'

const Hexagon = ({ width, color, children }) => {
  const height = width / Math.sqrt(3)

  const mainStyles = {
    width: `${width}px`,
    height: `${height}px`,
  }

  const centerStyles = { backgroundColor: color }

  const topBottomStyles = {
    borderLeft: `${width / 2}px solid transparent`,
    borderRight: `${width / 2}px solid transparent`,
  }
  const topStyles = {
    ...topBottomStyles,
    borderBottom: `${height / 2}px solid ${color}`,
  }
  const bottomStyles = {
    ...topBottomStyles,
    borderTop: `${height / 2}px solid ${color}`,
  }

  return (
    <div className="hexagon" style={mainStyles}>
      <div className="hexagon-top" style={topStyles} />
      <div className="hexagon-center" style={centerStyles}>
        { children }
      </div>
      <div className="hexagon-bottom" style={bottomStyles} />
    </div>
  )
}

Hexagon.defaultProps = {
  width: 30,
  color: 'black',
}

Hexagon.propTypes = {
  width: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default Hexagon
