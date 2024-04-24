import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "src/Data/DataSource/Api/LocalDB/reduxHooks";

interface Props {
    children: React.ReactNode;
}

function AuthChecker({ children }: Props) {
    // NAVIGATE
    const navigate = useNavigate();

    // USER FROM REDUX
    const user = useAppSelector((state) => state?.auth?.user);

    useEffect(() => {
        if (!user.isLoggedIn) {
            navigate("/login");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>{children}</>;
}

export default AuthChecker;
