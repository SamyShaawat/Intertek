import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import App from './app/App';
import { registerWebMcpTools } from './app/webmcp';

if (import.meta.env.DEV) {
  void import('react-scan').then(({ scan }) =>
    scan({ enabled: true }),
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

registerWebMcpTools();

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
