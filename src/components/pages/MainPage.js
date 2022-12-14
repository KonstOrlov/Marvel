import {useState} from "react";
import {Helmet} from "react-helmet";

import ErrorBoundary from "../errorBoundary/ErrorBoundary.js";
import RandomChar from "../randomChar/RandomChar.js";
import CharList from "../charList/CharList.js";
import CharInfo from "../charInfo/CharInfo.js";
import CharSearchForm from "../charSearchForm/CharSearchForm.js";

const MainPage = () => {
  const [selectedChar, setChar] = useState(null);

  const onCharSelected = (id) => {
    setChar(id);
  }

  return (
    <>
      <Helmet >
        <meta
          name="description"
          content="Marvel information portal"
        />
        <title >Marvel information portal</title >
      </Helmet >
      <ErrorBoundary >
        <RandomChar />
      </ErrorBoundary >
      <div className="char__content" >
        <ErrorBoundary >
          <CharList onCharSelected={onCharSelected} />
        </ErrorBoundary >
        <div >
          <ErrorBoundary >
            <CharInfo charId={selectedChar} />
          </ErrorBoundary >
          <ErrorBoundary >
            <CharSearchForm />
          </ErrorBoundary >
        </div >
      </div >
    </>
  )
}

export default MainPage;