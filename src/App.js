import { Route, Routes } from "react-router-dom";
import LoginPage from "./containers/LoginPage";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
