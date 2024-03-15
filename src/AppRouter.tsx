import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotFound from "src/Presentation/NotFound";
import Layout from "src/Presentation/Layout";
import { PRIVATE_ROUTE, PUBLIC_ROUTE } from "src/Core/Constants";
import Login from "./Presentation/Login";

import useViewModel from "src/Presentation/Login/LoginContainerViewModel";
import { User } from "src/Domain/Model/User";

function AppRouter() {
    // // STATE
    const [user, setUser] = useState<User>();
    // FROM VIEWMODEL
    const { handleGetUser } = useViewModel();

    useEffect(() => {
        (async () => {
            const userGot = await handleGetUser();
            setUser(userGot);
        })();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    {user &&
                        PRIVATE_ROUTE?.map((route, index) => (
                            <Route
                                key={index}
                                path={route?.path}
                                element={route?.element}
                            /> // => Nên tạo 1 constant để export PRIVATE ROUTE như vậy sẽ dễ quản lý hơn
                        ))}
                </Route>

                <Route element={<Login />}>
                    {PUBLIC_ROUTE?.map((route, index) => (
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
