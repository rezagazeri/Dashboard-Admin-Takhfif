import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import "./scss/app.scss";
const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);
const DefaultLayout = lazy(() => import("./containers"));
const Signin = lazy(() => import("./pages/signin"));

const App = () => {
  return (
    <div>
      <Suspense fallback={loading()}>
        <Switch>
          <Route
            exact
            path="/"
            name="Home"
            render={(props) => <DefaultLayout {...props} />}
          />
          <Route exact path="/signin" name="signin" component={Signin} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
