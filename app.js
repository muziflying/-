import React from 'react';
import ReactDOM from 'react-dom';

import "./scss/main.scss"

import {Router,Route,hashHistory,Link,IndexRoute} from 'react-router';

import App from './md/App.js';

//import Seach from './md/seach.js';

ReactDOM.render(<App />,document.getElementById('app'))