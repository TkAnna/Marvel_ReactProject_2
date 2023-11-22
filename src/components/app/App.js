import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import { ComicsPage, SingleComicPage } from "../pages";
import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";
// dynamic imports at the end
const Page404 = lazy(() => import("../pages/404"));
const MainPage = lazy(() => import("../pages/MainPage"));
const ComicsPage = lazy(() => import("../pages/ComicsPage"));
const SingleComicLayout = lazy(() => import("../pages/SingleComicLayout/SingleComicLayout"));
const SingleCharacterLayout = lazy(() => import("../pages/SingleCharacterLayout/SingleCharacterLayout"));
const SinglePage = lazy(() => import("../pages/SinglePage"));

const App = () => {

  return (
    <Router>
      <div className="App">
        <AppHeader />
        <main>
          {/* spare element when loading dynamic import */}
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/comics" element={<ComicsPage />} />
              <Route path="/comics/:id" element={<SinglePage Component={SingleComicLayout} dataType='comic' />} />
              <Route path="/characters/:id" element={<SinglePage Component={SingleCharacterLayout} dataType='character' />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>

  );

}

export default App;
