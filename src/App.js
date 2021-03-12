import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NewMessage from './components/NewMessage.jsx';
import Login from './components/DeleteMessage';
import ShowMessage from './components/ShowMessage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App(props) {

  return (
    <Router>
        <Switch>
            <Route exact path='/' render = {(props) => {
                return (
                    <NewMessage />
                );
            }} />
            <Route exact path='/delete' render = {(props) => {
                return (
                    <Login />
                )
            }} />
            <Route exact path='/delete' render = {(props) => {
                return (
                    <Login />
                )
            }} />
            <Route path='/message' render = {(props) => {
                return (
                    <ShowMessage />
                )
            }} />
        </Switch>
    </Router>
);
  
}

export default App;