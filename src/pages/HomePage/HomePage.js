//import AuthContext from "../../contexts/AuthContext";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    function goToPlans() {
        navigate("/subscriptions")
    }
    return (
        <>
            <h1>HomePage do(a): {user.name}</h1>
            <button onClick={goToPlans}>Go to PlansPage</button>
        </>
    )
}