import React from 'react';
import { observer } from 'mobx-react'

import Iframe from './Iframe.jsx';

function App({ store: { src, onLoad } }) {
  const style = {
    width: '100%',
    height: '100%',
    border: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  };

  return <div>
    <Iframe src={src} onLoad={onLoad} style={style} />
  </div>
}

export default observer(App);