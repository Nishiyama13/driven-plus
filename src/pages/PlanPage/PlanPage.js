//import AuthContext from "../../contexts/AuthContext";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function PlanPage() {
    const navigate = useNavigate();

    function goToHome() {
        navigate("/home")
    }

    const { user } = useContext(UserContext);
    return (
        <>
            <h1>PlanPage do(a): {user.name}</h1>
            <button onClick={goToHome}>Home</button>
        </>
    )
}