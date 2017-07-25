import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';

@observer
class Iframe extends Component {
  
  static propTypes: {
    src: PropTypes.string.isRequired,
    onLoad: PropTypes.func
  };

  componentDidMount () {
    const { refs, props: { onLoad } } = this;
    
    const iframe = ReactDOM.findDOMNode(refs.iframe);
    iframe.addEventListener('load', onLoad);
  }

  render () {
    return (
      <iframe
        ref="iframe"
        {...this.props}
      />
    )
  }
}

export default Iframe
