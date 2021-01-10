import PrivateLogin from "@hoc//PrivateLogin";
import PublicPage from "@routers/component/PublicPage";
import React, { Suspense } from "react";
import { Switch } from "react-router-dom";

const PrivatePage = React.lazy(() => import("@routers/component/PrivatePage"));

interface Iprops {
  privateLogin: boolean;
}

const App = ({ privateLogin }: Iprops) => {

  return (
    <Switch>
      {privateLogin ? (
        <Suspense fallback={<div></div>}>
          <PrivatePage />
        </Suspense>
      ) : (
          <Suspense fallback={<div></div>}>
            <PublicPage />
          </Suspense>
        )}
    </Switch>
  );
};

export default PrivateLogin(App);
