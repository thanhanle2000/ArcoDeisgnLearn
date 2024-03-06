import { BrowserRouter, Route, Routes } from "react-router-dom";

import LayoutComponent from "src/Presentation/components/LayoutComponent/Layout";
import NotFound from "src/Presentation/Pages/NotFound";
import Dashboard from "src/Presentation/Pages/Dashboard";
import Analysis from "./Presentation/Pages/Analysis";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LayoutComponent />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/analysis" element={<Analysis />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
