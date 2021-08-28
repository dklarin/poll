import { Switch, Route, Redirect } from "react-router-dom";
import { Edit } from "../components/edit/Edit";
import { Results } from "../components/results/Results";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/edit" />} />
      <Route path="/edit" component={Edit} />
      <Route path="/results" component={Results} />
    </Switch>
  );
};
