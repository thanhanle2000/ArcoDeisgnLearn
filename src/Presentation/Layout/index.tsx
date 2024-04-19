import { useEffect } from "react";
import "@arco-design/web-react/dist/css/arco.css";
import { Layout } from "@arco-design/web-react";
import { Outlet } from "react-router-dom";

const Header = Layout.Header;
const Content = Layout.Content;
const Sider = Layout.Sider;

import HeaderComponent from "./Header";
import SiderChildComponent from "./Sider";
import useViewModel from "./LayoutViewModel";
import Breadcrumb from "src/Core/Components/BreadcrumbCpn";
import { ELEMENT_ID } from "src/Core";
// import userUserManageViewModel from "../ListUserManage/ListUserManageViewModel";

function LayoutComponent() {
    // FROM VIEWMODELS
    const {
        facts,
        getFacts,
        collapsed,
        siderWidth,
        handleCollapse,
        triggerButton,
        headerItems,
    } = useViewModel();

    // const { mockUserQuery } = userUserManageViewModel();

    // USE EFFECT
    useEffect(() => {
        (async () => {
            await getFacts();
        })();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(facts);

    return (
        <Layout className={`min-h-[100vh] bg-[color:var(--color-fill-2)]`}>
            <Header
                id={ELEMENT_ID.HEADER}
                className="bg-[color:var(--color-bg-2)] text-center h-HEADERHEIGHT fixed left-0 top-0 right-0 z-50 border-b border-solid border-b-[color:var(--color-border)]"
            >
                <HeaderComponent items={headerItems} />
            </Header>
            <Layout className="flex pt-HEADERHEIGHT bg-[color:var(--color-fill-2)]">
                <Sider
                    breakpoint="lg"
                    collapsible
                    onCollapse={handleCollapse}
                    collapsed={collapsed}
                    width={siderWidth}
                    trigger={null}
                    collapsedWidth={siderWidth}
                    className={`fixed top-0 bottom-0 left-0 pt-HEADERHEIGHT`}
                >
                    <div className="relative h-SIDERHEIGHT [&_.arco-menu-collapse]:w-full">
                        <SiderChildComponent />
                        {triggerButton}
                    </div>
                </Sider>
                <Layout
                    className={`pe-2 ${
                        collapsed
                            ? "ps-CONTENTPADDINGSTARTCOLLAPSE"
                            : "ps-CONTENTPADDINGSTART"
                    } transition-all`}
                >
                    <Breadcrumb />
                    <Content>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default LayoutComponent;
