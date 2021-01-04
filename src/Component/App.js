import React from 'react'
import { Provider } from 'react-redux';
import Router1 from './Router'
import { store } from './Redux/Store'
import { ToastContainer } from 'react-toastify';

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
