import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Questions from "./Components/Questions";
import Help from "./Components/Help";
import Profile from "./Components/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/help" element={<Help />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

//This is where we put all our components and routing is done.
