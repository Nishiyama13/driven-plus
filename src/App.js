import AuthContext from "./contexts/AuthContext";
import UserContext from "./contexts/UserContext";
import PlanContext from "./contexts/PlanContext";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import PlansPage from "./pages/PlansPage/PlansPage";
import PlanPage from "./pages/PlanPage/PlanPage";

export default function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  const [plan, setPlan] = useState("");

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
  }, [token]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  useEffect(() => {
    localStorage.setItem("plan", JSON.stringify(plan));
  }, [plan]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <UserContext.Provider value={{ user, setUser }}>
        <PlanContext.Provider value={{ plan, setPlan }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/subscriptions" element={<PlansPage />} />
              <Route path="/subscriptions/:idPlan" element={<PlanPage />} />
            </Routes>
          </BrowserRouter>
        </PlanContext.Provider>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}
