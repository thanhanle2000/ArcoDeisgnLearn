import { memo, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LeftDashboardComponent from "./Components/LeftDashboardComponent";
import RightDashboardComponent from "./Components/RightDashboardComponent";

import { ROUTES } from "src/Core";

// eslint-disable-next-line react-refresh/only-export-components
function DashBoardContainer() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate(ROUTES.DASHBOARD);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="grid grid-cols-12 gap-2">
            <LeftDashboardComponent />
            <RightDashboardComponent />
        </div>
    );
}
// eslint-disable-next-line react-refresh/only-export-components
export default memo(DashBoardContainer);
