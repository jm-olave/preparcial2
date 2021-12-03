import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json";

let locale;
let mensajes;
if(navigator.language.includes("es"))
{
  locale = "es-Es"
  mensajes = localeEsMessages
}
else{
  locale = "en-US"
  mensajes = localeEnMessages;
}
ReactDOM.render(
  <IntlProvider locale= {locale} messages = {mensajes}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
