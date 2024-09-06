import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

import './index.css';


async function enableMocking() {
  const { worker } = await import('./shared/mocks/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
  );
  root.render(
    <React.StrictMode>
      <h1>Hello</h1>
    </React.StrictMode>,
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
