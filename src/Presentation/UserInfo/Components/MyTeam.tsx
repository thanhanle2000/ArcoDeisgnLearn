import { Avatar, Divider } from "@arco-design/web-react";
import WhiteContainer from "src/Core/Components/WhiteContainer";

function MyTeam() {
    const teamMates = [
        {
            avatar: (
                <Avatar size={48} className="bg-CBLUE">
                    A
                </Avatar>
            ),
            name: "火山引擎智能应用团队",
            curiousNumber: 428,
        },
        {
            avatar: (
                <Avatar size={48} className="bg-CBLUE">
                    B
                </Avatar>
            ),
            name: "企业级产品设计团队",
            curiousNumber: 366,
        },
        {
            avatar: (
                <Avatar size={48} className="bg-CBLUE">
                    C
                </Avatar>
            ),
            name: "前端/UE小分队",
            curiousNumber: 241,
        },
        {
            avatar: (
                <Avatar size={48} className="bg-CBLUE">
                    D
                </Avatar>
            ),
            name: "内容识别插件小分队",
            curiousNumber: 143,
        },
    ];
    return (
        <WhiteContainer>
            <div className="flex flex-col gap-STANDARDMARGINANDPADDING">
                <h2>MyTeam</h2>
                <div className="mt-STANDARDMARGINANDPADDING">
                    {teamMates.map((mate, index) => (
                        <div className="flex flex-col">
                            <div className="flex flex-row gap-STANDARDMARGINANDPADDING justify-start items-start">
                                {mate.avatar}
                                <div className="flex flex-col">
                                    <span>{mate.name}</span>
                                    <span>共{mate.curiousNumber}人</span>
                                </div>
                            </div>
                            {index < teamMates.length - 1 && (
                                <Divider className="m-STANDARDMARGINANDPADDING" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </WhiteContainer>
    );
}

export default MyTeam;
