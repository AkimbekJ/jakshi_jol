import { useRef, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainReviewPage from "./components/MainReviewPage/MainReviewPage";
import BookPage from "./pages/bookPage/BookPage";
import FailurePage from "./pages/failurePage/FailurePage";
import WinPage from "./pages/winPage/WinPage";

const MainRoutes = () => {
  const myRef = useRef(null);

  const handleScrollClick = () => {
    myRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">

              <Header props={handleScrollClick}/>
            <MainReviewPage />
            <BookPage myRef={myRef} />
            <Footer />
          </Route>
          <Route exact path="/failure">
            <FailurePage />
          </Route>
          <Route exact path="/win">
            <WinPage />

          </Route>

        </Switch>
      </BrowserRouter>
    </>

  );
};

export default MainRoutes;
