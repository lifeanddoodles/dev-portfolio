import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import './styles/index.scss';
import { dom, library } from '@fortawesome/fontawesome-svg-core';
import {
  faDownload,
  faEnvelope,
  faEye
} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

const Header = React.lazy(() => import('./components/main/Header'));
const Footer = React.lazy(() => import('./components/main/Footer'));

library.add(fab, faDownload, faEnvelope, faEye);
dom.watch();

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <main role='main' className='site-main'>
          <Route
            render={({ location }) => (
              <Switch location={location}>
                <Route exact path='/' component={Home} />
                <Route component={ErrorPage} />
              </Switch>
            )}
          />
        </main>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;

// import React from 'react';
// import Home from './Home';

// const App = () => {
//   return <Home name='Alligator' />;
// };
// export default App;
