import {useState} from "react";

import ErrorBoundary from "../errorBoundary/ErrorBoundary.js";
import RandomChar from "../randomChar/RandomChar.js";
import CharList from "../charList/CharList.js";
import CharInfo from "../charInfo/CharInfo.js";
import decoration from "../../resources/img/vision.png";

const MainPage = () => {
  const [selectedChar, setChar] = useState(null);

  const onCharSelected = (id) => {
    setChar(id);
  }

  return (
    <>
      <ErrorBoundary >
        <RandomChar />
      </ErrorBoundary >
      <div className="char__content" >
        <ErrorBoundary >
          <CharList onCharSelected={onCharSelected} />
        </ErrorBoundary >
        <ErrorBoundary >
          <CharInfo charId={selectedChar} />
        </ErrorBoundary >
      </div >
      <img className="bg-decoration" src={decoration} alt="vision" />
    </>
  )
}

export default MainPage;