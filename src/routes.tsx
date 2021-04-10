import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import CategoryPage from './views/CategoryPage/CategoryPage';
import HomePage from './views/HomePage/HomePage';

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/category">
            <CategoryPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
