//import AuthContext from "../../contexts/AuthContext";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";



export default function PlansPage() {
    const navigate = useNavigate();
    function goToPlan() {
        navigate("/subscriptions/id")
    }

    const { user } = useContext(UserContext);
    return (
        <>
            <h1>PlansPage do(a): {user.name}</h1>
            <button onClick={goToPlan}>Plan</button>
        </>
    )
}