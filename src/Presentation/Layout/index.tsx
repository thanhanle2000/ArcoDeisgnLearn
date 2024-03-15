import { useEffect } from "react";
import "@arco-design/web-react/dist/css/arco.css";
import { Layout } from "@arco-design/web-react";
import { Outlet } from "react-router-dom";

const Header = Layout.Header;
const Content = Layout.Content;
const Sider = Layout.Sider;
const Footer = Layout.Footer;

import HeaderComponent from "./Header";
import SiderChildComponent from "./Sider";
import useViewModel from "./LayoutViewModel";
import useLoginViewModel from "src/Presentation/Login/LoginContainerViewModel";
import Breadcrumb from "src/Core/Components/BreadcrumbCpn";

function LayoutComponent() {
    // FROM VIEWMODELS
    const {
        facts,
        getFacts,
        collapsed,
        siderWidth,
        handleCollapse,
        // handleMoving,
        TriggerButton,
        headerItems,
        navigate,
    } = useViewModel();

    const { handleGetUser } = useLoginViewModel();

    // USE EFFECT
    useEffect(() => {
        (async () => {
            const userGot = await handleGetUser();
            if (!userGot?.username) {
                navigate("/login");
            }

            await getFacts();
        })();
    }, []);
    console.log(facts);

    return (
        <Layout className={`min-h-[100vh] bg-[color:var(--color-fill-2)]`}>
            <Header className="bg-[color:var(--color-bg-2)] text-center h-[60px] fixed left-0 top-0 right-0 z-50 border-b border-solid border-b-[color:var(--color-border)]">
                <HeaderComponent items={headerItems} />
            </Header>
            <Layout className="flex pt-[60px] bg-[color:var(--color-fill-2)]">
                <Sider
                    breakpoint="lg"
                    collapsible
                    onCollapse={handleCollapse}
                    collapsed={collapsed}
                    width={siderWidth}
                    // resizeBoxProps={{
                    //     directions: ["right"],
                    //     onMoving: handleMoving,
                    // }}
                    trigger={null}
                    className={`fixed top-0 bottom-0 left-0 pt-[60px]`}
                >
                    <div className="relative h-[calc(100vh_-_60px)]">
                        <SiderChildComponent />
                        {TriggerButton}
                    </div>
                </Sider>
                <Layout
                    className={`pt-4 pe-2 ${
                        collapsed ? "ps-[60px]" : "ps-[290px]"
                    } transition-all`}
                >
                    <Breadcrumb />
                    <Content>
                        <Outlet />
                    </Content>
                    <Footer
                        className={`flex flex-row justify-center items-center my-6`}
                    >
                        Footer
                    </Footer>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default LayoutComponent;
