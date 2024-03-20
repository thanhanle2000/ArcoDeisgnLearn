import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotFound from "src/Presentation/NotFound";
import Layout from "src/Presentation/Layout";
import { PRIVATE_ROUTE, LOGIN_ROUTE } from "src/Core";
import Login from "./Presentation/Login";
import AuthChecker from "src/Core/Components/AuthChecker/AuthChecker";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    {PRIVATE_ROUTE?.map((route, index) => (
                        <Route
                            key={index}
                            path={route?.path}
                            element={
                                <AuthChecker>{route?.element}</AuthChecker>
                            }
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
