import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import MainReviewPage from "./components/MainReviewPage/MainReviewPage";
import FailurePage from "./pages/failurePage/FailurePage";
import WinPage from "./pages/winPage/WinPage";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
          <MainReviewPage/>
        </Route>
        <Route exact path="/failure">
          <FailurePage />
        </Route>
        <Route exact path="/win">
          <WinPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoutes;
