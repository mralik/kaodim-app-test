import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from './pages/Home';
import {Profile} from './pages/Profile';
import {Form} from './pages/Form';
import {NoMatch} from './pages/NoMatch';
import {Layout} from './components/Layout';

function App(props) {

    return (
        <React.Fragment>
            <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/form" component={Form}/>
                        <Layout>
                            <Route path="/profile" component={Profile}/>
                        </Layout>
                        <Route component={NoMatch}/>
                    </Switch>

            </Router>
        </React.Fragment>
    );
}

export default App;
