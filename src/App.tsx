import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Seed from "./component/Seed";
import Dashboard from "./component/Dashboard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/seed" Component={Seed} />
           <Route path="/dashboard" Component={Dashboard} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
