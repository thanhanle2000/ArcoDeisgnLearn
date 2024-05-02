import CertificationRecordTable from "./CertificationRecordTable";
import EnterpriseRealnameCertification from "./EnterpriseRealnameCertification";
import WhetherVerifiedItem from "./WhetherVerifiedItem";

function WhetherVerifiedContainer() {
    const itemList = [
        {
            header: "Enterprise real-name certification",
            content: <EnterpriseRealnameCertification />,
        },
        {
            header: "Certification records",
            content: <CertificationRecordTable />,
        },
    ];
    return (
        <div className="flex flex-col justify-start items-start">
            {itemList.map((item) => (
                <WhetherVerifiedItem
                    key={item?.header}
                    header={item?.header}
                    content={item?.content}
                />
            ))}
        </div>
    );
}

export default WhetherVerifiedContainer;
