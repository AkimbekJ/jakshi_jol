import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import FailurePage from "./pages/failurePage/FailurePage";



const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route exact path="/failure">
          <FailurePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoutes;
