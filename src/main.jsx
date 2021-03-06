import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(

    <Router basename="/breaking-bad-reactapp">
      <Provider store={store}>
        <App />
      </Provider>
    </Router>

)
