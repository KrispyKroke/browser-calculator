import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import {Provider} from 'react-redux';
import store from './redux/store';

ReactDOM.render(
<Provider store={store}>
    <div id='wrapper'>
        <App />
    </div>
</Provider>
, document.getElementById('root'));

