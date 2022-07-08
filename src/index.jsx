import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './utils/styles/reset.scss';
import './utils/styles/shared.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <UserDataProvider>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </UserDataProvider>
//   </React.StrictMode>
// );
