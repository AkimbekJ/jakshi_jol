import { useRef, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainReviewPage from "./components/MainReviewPage/MainReviewPage";
import BookPage from "./pages/bookPage/BookPage";
import FailurePage from "./pages/failurePage/FailurePage";
import TestPage from "./pages/testPage/TestPage";
import WinPage from "./pages/winPage/WinPage";

const MainRoutes = () => {
  const ref = useRef();

  const handleScrollClick = () => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header props={handleScrollClick} />
            <MainReviewPage />
            <BookPage ref={ref} />
            <Footer />
          </Route>
          <Route exact path="/failure">
            <FailurePage />
          </Route>
          <Route exact path="/win">
            <WinPage />
          </Route>
          <Route exact path="/test/1">
            <TestPage />
          </Route>
        </Switch>
      </BrowserRouter>
  );
};

export default MainRoutes;
