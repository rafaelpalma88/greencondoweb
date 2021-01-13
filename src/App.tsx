import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Clients from './components/Clients';
import AddClient from './components/AddClient';
import AlterClient from './components/AlterClient';
import {GlobalProvider} from './context/GlobalState';


const App: React.FC = () => {
  return (
    <>
      <GlobalProvider>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Clients</Link>
                </li>
                <li>
                  <Link to="/addclient">Add Client</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/addclient">
                <AddClient />
              </Route>
              <Route path="/alterclient">
                <AlterClient />
              </Route>*
              <Route exact path="/">
                <Clients />
              </Route>
            </Switch>
          </div>
        </Router>
      </GlobalProvider>
    </>
  );
};

export default App;
