// import React from 'react';
// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// import Home from './pages/Home';
// import ThankYou from './pages/ThankYou';
// import ErrorPage from './pages/ErrorPage';
// import Header from './components/main/Header';
// import Footer from './components/main/Footer';
// import './styles/index.scss';
// import { dom, library } from '@fortawesome/fontawesome-svg-core';
// import {
//   faDownload,
//   faEnvelope,
//   faEye
// } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';

// library.add(fab, faDownload, faEnvelope, faEye);
// dom.watch();

// function App() {
//   return (
//     <Router>
//       <Header />
//       <main role='main' className='site-main'>
//         <Route
//           render={({ location }) => (
//             <Switch location={location}>
//               <Route exact path='/' component={Home} />
//               <Route path='/thank-you' component={ThankYou} />
//               <Route component={ErrorPage} />
//             </Switch>
//           )}
//         />
//       </main>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import Home from './Home';

export default () => {
  return <Home name='Alligator' />;
};
