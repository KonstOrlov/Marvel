import {Suspense} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import {MainPage, ComicsPage, Page404, SingleComicLayout, SingleCharacterLayout, SinglePage} from "../pages/index.js"

import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';

const App = () => {

  return (
    <Router >
      <div className="app" >
        <AppHeader />
        <main >
          <Suspense fallback={<Spinner />} >
            <Routes >
              <Route path="/Marvel" element={<MainPage />} />
              <Route path="/Marvel/comics" element={<ComicsPage />} />
              <Route path="/Marvel/comics/:id" element={
                <SinglePage Component={SingleComicLayout} dataType='comic' />
              } />
              <Route path="/Marvel/characters/:id" element={
                <SinglePage Component={SingleCharacterLayout} dataType='character' />
              } />
              <Route path="*" element={<Page404 />} />
            </Routes >
          </Suspense >
        </main >
      </div >
    </Router >
  )
}

export default App;