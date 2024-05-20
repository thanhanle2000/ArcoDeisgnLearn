import InsiteNoti from "./Components/InsiteNoti";
import LatestNews from "./Components/LatestNews";
import MyProject from "./Components/MyProject";
import MyTeam from "./Components/MyTeam";
import UserInfoHeader from "./Components/UserInfoHeader";

function UserInfoContainer() {
    return (
        <div className="flex flex-col gap-2">
            <UserInfoHeader />
            <div className="grid grid-cols-12 gap-2">
                <div className="col-span-8">
                    <MyProject />
                </div>
                <div className="col-span-4">
                    <MyTeam />
                </div>
            </div>
            <div className="grid grid-cols-12 gap-STANDARDMARGINANDPADDING">
                <div className="col-span-8">
                    <LatestNews />
                </div>
                <div className="col-span-4">
                    <InsiteNoti />
                </div>
            </div>
        </div>
    );
}

export default UserInfoContainer;
