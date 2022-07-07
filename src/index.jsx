import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './utils/styles/reset.scss';
import './utils/styles/shared.scss';
import App from './App';
import { UserDataProvider } from './utils/context/UserDataContext';

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
