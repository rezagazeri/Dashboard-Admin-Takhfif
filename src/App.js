import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import "./scss/app.scss";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);
const DefaultLayout = lazy(() => import("./containers"));

const App = () => {
  return (
    <div>
      <Suspense fallback={loading()}>
        <Switch>
          <Route
            path="/"
            name="Home"
            render={(props) => <DefaultLayout {...props} />}
          />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
