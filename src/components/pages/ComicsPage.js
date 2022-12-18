import {Helmet} from "react-helmet";

import AppBanner from "../appBanner/AppBanner.js";
import ComicsList from "../comicsList/ComicsList.js";

const ComicsPage = () => {
  return (
    <>
      <Helmet >
        <meta
          name="description"
          content="Page with list of Marvel comics"
        />
        <title >Comics page</title >
      </Helmet >
      <AppBanner />
      <ComicsList />
    </>
  )
}

export default ComicsPage;