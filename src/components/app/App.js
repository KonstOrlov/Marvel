import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import {MainPage, ComicsPage, Page404, SingleComicPage} from "../pages/index.js"

import AppHeader from "../appHeader/AppHeader";

const App = () => {

  return (
    <Router >
      <div className="app" >
        <AppHeader />
        <main >
          <Routes >
            <Route path="/Marvel" element={<MainPage />} />
            <Route path="/Marvel/comics" element={<ComicsPage />} />
            <Route path="/Marvel/comics/:comicId" element={<SingleComicPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes >
        </main >
      </div >
    </Router >
  )
}

export default App;