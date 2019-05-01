import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import VinylTable from './Table';
//import Vinyljudu from './sidebar';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<VinylTable />, document.getElementById('table'));
//ReactDOM.render(<Vinyljudu />, document.getElementById('container'));

serviceWorker.unregister();
