import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginScreen from '../screens/login/login';
import SignupScreen from '../screens/signup/signup';
import ChatScreen from '../screens/chat/chat';

const routerApp = () => {
    return (
        <Router>
            <Route component={LoginScreen} exact path="/" />
            <Route component={SignupScreen} path="/signup" />
            <Route component={ChatScreen} path="/chat" />
        </Router>
    )
}

export default routerApp;