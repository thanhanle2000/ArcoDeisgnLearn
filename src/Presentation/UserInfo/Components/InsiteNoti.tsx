import NodataSVG from "src/Core/Components/SVGs/NodataSVG";
import WhiteContainer from "src/Core/Components/WhiteContainer";
function InsiteNoti() {
    return (
        <WhiteContainer>
            <div className="flex flex-col">
                <h2>In-site Notification</h2>
                <div className="w-full h-[400px] flex flex-col justify-center items-center gap-STANDARDMARGINANDPADDING">
                    <NodataSVG className="w-[92px] h-[92px]" />
                    <span>No Data</span>
                </div>
            </div>
        </WhiteContainer>
    );
}

export default InsiteNoti;
