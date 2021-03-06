/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";
import Abuse from "./views/Abuse/Abuse";
import Share from "./views/Share/Share";
import Success from "./views/Success/Success";

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/abuse"} exact component={Abuse} />
        <Route path={"/share"} exact component={Share} />
        <Route path={"/success"} exact component={Success} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}
