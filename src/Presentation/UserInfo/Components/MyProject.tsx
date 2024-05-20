import { Button } from "@arco-design/web-react";
import WhiteContainer from "src/Core/Components/WhiteContainer";
import AvatarGroupCpn from "./AvatarGroupCpn";

function MyProject() {
    const projects = [
        {
            name: "企业级产品设计系统",
            addInfo: "Arco Design System",
            curiousNumber: 81,
        },
        {
            name: "企业级产品设计系",
            addInfo: "Arco Design System",
            curiousNumber: 82,
        },
        {
            name: "企业级产品设计",
            addInfo: "Arco Design System",
            curiousNumber: 83,
        },
        {
            name: "企业级产品设",
            addInfo: "Arco Design System",
            curiousNumber: 84,
        },
        {
            name: "企业级产品",
            addInfo: "Arco Design System",
            curiousNumber: 85,
        },
        {
            name: "企业级产",
            addInfo: "Arco Design System",
            curiousNumber: 86,
        },
    ];
    return (
        <WhiteContainer>
            <div className="flex flex-col gap-STANDARDMARGINANDPADDING">
                <div className="flex flex-row justify-between items-center">
                    <h2>My project</h2>
                    <Button type="text">More</Button>
                </div>
                <div className="grid grid-cols-12 gap-STANDARDMARGINANDPADDING">
                    {projects.map((project) => (
                        <div className="col-span-4 border rounded-sm">
                            <div className="flex flex-col gap-STANDARDMARGINANDPADDING p-STANDARDMARGINANDPADDING">
                                <span>{project.name}</span>
                                <span>{project.addInfo}</span>
                                <div className="mt-STANDARDMARGINANDPADDING flex flex-row justify-start items-center gap-STANDARDMARGINANDPADDING">
                                    <AvatarGroupCpn />
                                    <span>等 {project.curiousNumber} 人</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </WhiteContainer>
    );
}

export default MyProject;
