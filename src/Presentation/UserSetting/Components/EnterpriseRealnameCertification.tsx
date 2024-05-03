import { Tag } from "@arco-design/web-react";
import tailwindConfig from "../../../../tailwind.config";

function EnterpriseRealnameCertification() {
    const ercItemList = [
        { label: "Account Type", value: "企业账号" },
        {
            label: "Authentication status",
            value: (
                <Tag color={tailwindConfig?.theme?.extend?.colors?.CGREEN}>
                    Verified
                </Tag>
            ),
        },
        {
            label: "Authentication time",
            value: "1991-12-11 02:10:33",
        },
        {
            label: "Legal Person name",
            value: "赵**",
        },
        {
            label: "Type of legal person certificate",
            value: "中国身份证",
        },
        {
            label: "Legal person certification number",
            value: "282************371",
        },
        {
            label: "Enterprise Name",
            value: "料报真入提例近",
        },
        {
            label: "Enterprise certificate type",
            value: "企业营业执照",
        },
        {
            label: "Organization Code",
            value: "2*******6",
        },
    ];

    return (
        <div className="w-full p-4 bg-[color:var(--color-fill-1)]">
            <div className="grid grid-cols-12 gap-2 overflow-auto max-h-[100px] md:max-h-fit">
                {ercItemList.map((ercItem) => (
                    <div className="col-span-12 md:col-span-6 xl:col-span-4">
                        <div className="flex flex-row justify-start items-center flex-wrap gap-2">
                            <span className="text-nowrap text-ellipsis text-[color:var(--color-text-3)]">
                                {ercItem?.label}:
                            </span>
                            <span className="text-nowrap text-ellipsis">
                                {ercItem?.value}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EnterpriseRealnameCertification;
