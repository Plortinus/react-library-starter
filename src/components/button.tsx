/* eslint-disable react/require-default-props */
/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import reactToWebComponent from 'react-to-webcomponent'
import { Button } from 'antd'
import { ButtonProps } from '../types'
import 'antd/dist/antd.css'

class CosmoButton extends React.Component<ButtonProps> {
  // eslint-disable-next-line react/static-property-placement
  static propTypes: {
    type: PropTypes.Requireable<string>
    text: PropTypes.Requireable<string>
  }

  render() {
    const { type, text } = this.props
    return <Button type={type}>{text}</Button>
  }
}

CosmoButton.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
}

export default CosmoButton

customElements.define(
  'c-button',
  reactToWebComponent(CosmoButton, React, ReactDOM)
)
