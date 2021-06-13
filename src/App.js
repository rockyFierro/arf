import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import NasaMedia from "./components/NasaMedia";

function App() {

  return (
    <Router>
        <main>
            <Header/>

            <Switch>
                <Route exact path='/'>
                    Hello there...
                </Route>
                <Route path='/nasa'>
                    <NasaMedia/>
                </Route>
            </Switch>
        </main>
    </Router>
  );
}

export default App;
