import AuthContext from "./contexts/AuthContext"
import UserContext from "./contexts/UserContext"
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage/SignUpPage"
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage"
import PlansPage from "./pages/PlansPage/PlansPage";
import PlanPage from "./pages/PlanPage/PlanPage";


export default function App() {
  const [token, setToken] = useState("")
  const [user, setUser] = useState({})

  return (

    < AuthContext.Provider value={{ token, setToken }}>
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/subscriptions" element={<PlansPage />} />
            <Route path="/subscriptions/id" element={<PlanPage />} />
          </Routes>
        </BrowserRouter>

      </UserContext.Provider>
    </AuthContext.Provider >
  );
}

