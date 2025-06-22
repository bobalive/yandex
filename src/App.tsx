import "./App.css";
import Layout from "./components/layout/Layout/Layout";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { Generate } from "./pages/Generate";
import { PAGES } from "./shared/contants/pages";
import { History } from "./pages/History";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={PAGES.MAIN} element={<Main />} />
            <Route path={PAGES.CSV} element={<Generate />} />
            <Route path={PAGES.HISTORY} element={<History />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
