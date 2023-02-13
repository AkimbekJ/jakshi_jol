import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoutes;
