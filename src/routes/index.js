import {BrowserRouter as Router, Route, Redirect, withRouter} from 'react-router-dom';
import {routeAuth, routeDashboard} from '../constants/routes';
import Auth from '../pages/auth/auth';
import Dashboard from '../pages/dashboard/dashboard';

const GuestRouter = () => (
    <Router>
        <Redirect from="/" to={routeAuth} />
        <Route exact path={routeAuth} component={Auth} />
    </Router>
)

const PrivateRouter = () => (
    <Router>
        <Redirect from="/" to={routeDashboard} />
        <Route path={routeDashboard} component={Dashboard} />
    </Router>
)

export const AppRouter = withRouter((props) => {
    const { isLoggedIn } = props;
    return isLoggedIn ? (
        <PrivateRouter />
    ) : (
        <GuestRouter />
    );
});