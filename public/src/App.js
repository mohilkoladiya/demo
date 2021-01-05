import React from 'react'
import { Provider } from 'react-redux';
import Router1 from './router/Router'
import { ToastContainer } from 'react-toastify';
import {store} from './Store'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router1 />
        <ToastContainer />
      </div>
    </Provider>
  );
}

export default App;
