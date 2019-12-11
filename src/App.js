import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from './pages/Home';
import {Profile} from './pages/Profile';
import {DynamicForm} from './pages/DynamicForm';
import {NoMatch} from './pages/NoMatch';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import {Jumbotron} from "./components/Jumbotron";
import {withRouter} from 'react-router-dom';

function App(props) {


    return (
        <React.Fragment>
            <Router>
                {/*<NavigationBar/>*/}
                {/*<Jumbotron/>*/}

                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/form" component={DynamicForm}/>
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
