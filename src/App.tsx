import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import ErrorBoundary from './util/ErrorBoundary';

const page = lazy(() => import('./pages/page'));

function App() {
  return (
      <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path={routes.HOME} exact component={page} />
                    <Route path={routes.GETTING_STARTED}  component={page} />
                    <Route path={routes.FEATURES} component={page} />
                    <Route path={routes.PRICING}  component={page} />
                    <Route path={routes.CONTACT}component={page} />
                </Switch>
            </Suspense>
      </ErrorBoundary>
  );
}

export default App;
