import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import FailurePage from "./pages/failurePage/FailurePage";
import TestPage from "./pages/testPage/TestPage";
import WinPage from "./pages/winPage/WinPage";

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
        <Route exact path="/win">
          <WinPage />
        </Route>
        <Route exact path="/test/:id">
          <TestPage/>
        </Route>      
        </Switch>
    </BrowserRouter>
  );
};

export default MainRoutes;
