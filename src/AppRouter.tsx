import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotFound from "src/Presentation/NotFound";
import Layout from "src/Presentation/Layout";
import { PRIVATE_ROUTE, LOGIN_ROUTE } from "src/Core";
import Login from "./Presentation/Login";
import { useAppSelector } from "./Data/DataSource/Api/LocalDB/reduxHooks";

function AppRouter() {
    const user = useAppSelector((state) => state.auth.user);
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    {user?.username &&
                        PRIVATE_ROUTE?.map((route, index) => (
                            <Route
                                key={index}
                                path={route?.path}
                                element={route?.element}
                            /> // => Nên tạo 1 constant để export PRIVATE ROUTE như vậy sẽ dễ quản lý hơn
                        ))}
                </Route>

                <Route element={<Login />}>
                    {LOGIN_ROUTE?.map((route, index) => (
                        <Route
                            key={index}
                            path={route?.path}
                            element={route?.element}
                        />
                    ))}
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
