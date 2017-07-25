import React from 'react';
import { render } from 'react-dom';

import App from './App.jsx';
import store from './store';

const div = document.createElement('div');
document.body.append(div);

render(<App store={store} />, div);