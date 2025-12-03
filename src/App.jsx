import { BrowserRouter as Router, Routes, Route } from "react-router";
import routes from "./routes";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => {
          const Comp = route.component;
          return <Route key={index} path={route.path} element={<Comp />} />;
        })}
      </Routes>
    </Router>
  );
}

export default App;
