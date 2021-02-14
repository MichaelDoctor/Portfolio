import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import PageLoader from './components/pageLoader/PageLoader';
import './App.css'

const Home = lazy(() => import('./pages/Home.page'));
const Blog1 = lazy(() => import('./pages/Blog1.page'));
const NotFound = lazy(() => import('./pages/NotFound.page'));

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Swift_1" component={Blog1} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default App;
