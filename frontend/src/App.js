import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import PageLoader from './components/pageLoader/PageLoader';
const Home = lazy(() => import('./pages/Home.page'));
const NotFound = lazy(() => import('./pages/NotFound.page'));

function App() {
  return (
    <Switch>
      <Suspense fallback={<PageLoader />}>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Suspense>
    </Switch>
  );
}

export default App;
