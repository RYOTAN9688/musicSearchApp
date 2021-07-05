import React from 'react';
import SignUp from './SignUp'
import Main from "./Main";
import Login from './Login'
import { AuthProvider } from './AuthService';
import LoggedInRoute from './LoggedInRoute';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <LoggedInRoute exact path="/" component={Main} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                </Switch>
            </Router>
        </AuthProvider >
    )
}
export default App;