import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Assignment1 from "./components2/Assignment1";
import FormValidations from "./components2/FormValidations";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormValidations />} />
        <Route path="/assignment1" element={<Assignment1 />} />
      </Routes>
    </Router>
  );
}

export default App;
