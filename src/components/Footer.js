import React from 'react'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}} />
)

Footer.propTypes = {
  timeout: React.PropTypes.bool,
}

export default Footer
