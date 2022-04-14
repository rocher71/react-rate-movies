import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path={`${process.env.PUBLIC_URL}/movie/:id/`}
          element={<Detail />}
        />
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        {/* url '/' 에 접속하면 <Home/> component render */}
      </Routes>
    </Router>
  );
}

export default App;
