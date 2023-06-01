import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as mobx from 'mobx'
window.mobx = mobx

ReactDOM.render(<App />, document.getElementById('root'));
