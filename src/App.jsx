import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import HumanizePage from "./pages/HumanizePage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/humanize" element={<HumanizePage />} />
      </Routes>
    </Router>
  );
}

export default App;
