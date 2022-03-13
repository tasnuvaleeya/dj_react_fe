import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Form from './components/Form';
import { Switch } from 'react-router-dom';


function RouterF() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = "/" exact component={App} ></Route>
        <Route path = {"/login"} exact component={Form} ></Route>
      </Switch>
    </BrowserRouter>
  )
}

// export default Router

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterF />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
