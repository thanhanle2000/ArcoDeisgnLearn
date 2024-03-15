import { memo, useEffect } from "react";
import LeftDashboardComponent from "./Components/LeftDashboardComponent";
import RightDashboardComponent from "./Components/RightDashboardComponent";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
function DashBoardContainer() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/dashboard/workplace");
    }, []);
    return (
        <div className="grid grid-cols-12 gap-4">
            <LeftDashboardComponent />
            <RightDashboardComponent />
        </div>
    );
}
// eslint-disable-next-line react-refresh/only-export-components
export default memo(DashBoardContainer);
