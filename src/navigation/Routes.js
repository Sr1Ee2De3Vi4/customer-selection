import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Header from '../components/Header/Header'
import Home from '../pages/Home/Home'
import demo from '../pages/demo/demo'
import Login from '../pages/Login/Login'
import Wedding_eve from '../pages/Wedding_eve/Wedding_eve_desk'
import Wedding from '../pages/Wedding/Wedding'
class Routes extends Component {
    render() {

        return (
            <Router>
                <div>
                        <Header/>
                    </div>
                <Switch>

                    <Route exact path="/" component={Home} />
                    <Route exact path="/Wedding/:index" component={Wedding} />
                     <Route exact path="/demo" component={demo} />
                     <Route exact path="/login" component={Login} />
                    <Route exact path="/wedding_eve" component={Wedding_eve} />

                </Switch>
                {/* <div>
                        <Footer/>
                    </div> */}
            </Router>
        );
    }
}
export default Routes;