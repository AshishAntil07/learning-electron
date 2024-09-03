import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "~/pages/Home";
import FSPage from '~/pages/FS';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/fs" Component={FSPage} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
