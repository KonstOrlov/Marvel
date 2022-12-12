import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {MainPage, ComicsPage} from "../pages/index.js"

import AppHeader from "../appHeader/AppHeader";

const App = () => {

  return (
    <Router >
      <div className="app" >
        <AppHeader />
        <main >
          <Switch >
            <Route exact path="/Marvel" >
              <MainPage/>
            </Route >
            <Route exact path="/Marvel/comics">
              <ComicsPage/>
            </Route >
          </Switch >
        </main >
      </div >
    </Router >
  )
}

export default App;