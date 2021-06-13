import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import NasaMedia from "./components/NasaMedia";

function App() {

    return (
        <Router>
            <main>
                <Header/>

                <Switch>
                    <Route exact path='/'>
                        <div>
                            <p>
                            Hello there... my name is <h2>Rocky Fierro</h2>.
                                Follow me on
                                    things like the
                            </p>
                            <a href="https://twitter.com/fierro_rocky"> twitter</a>
                                or maybe at
                            <a href="https://www.risktofall.com"> my website</a>
                        </div>
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
