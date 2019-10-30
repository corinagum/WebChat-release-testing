import 'core-js/features/array/find-index';
import 'core-js/features/array/find';
import 'core-js/features/array/includes';
import 'core-js/features/array/iterator';
import 'core-js/features/dom-collections';
import 'core-js/features/math/sign';
import 'core-js/features/number/is-finite';
import 'core-js/features/object/assign';
import 'core-js/features/object/values';
import 'core-js/features/promise';
import 'core-js/features/promise/finally';
import 'core-js/features/string/starts-with';
import 'core-js/features/symbol';

import 'react-app-polyfill/ie11';
import 'url-search-params-polyfill';
import 'whatwg-fetch';

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
