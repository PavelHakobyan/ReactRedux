import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';//ays komponenty kmiacni mer redaqsy reaktin naxadryalnerin
//ev chi entarki popoxutyan
import { store } from '../src/redux/store';//import enq are store-y store.js -ic

const container = document.getElementById("root")

const root = ReactDOM.createRoot(container);
//patatum enq mer naxadryalnery Provider-i mej ev poxancum enq story` pahestanocy
root.render(
<Provider store={store}>
    <App />
</Provider>
);
