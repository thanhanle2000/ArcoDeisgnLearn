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
import { USECONTEXT_HEIGHT_ID } from "src/Core";

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
        setHeight,
        headerRef,
        breadcrumbRef,
    } = useViewModel();

    // USE EFFECT
    useEffect(() => {
        (async () => {
            if (headerRef.current && breadcrumbRef.current) {
                setHeight([
                    {
                        key: USECONTEXT_HEIGHT_ID.HEADER,
                        height: headerRef.current.offsetHeight,
                    },
                    {
                        key: USECONTEXT_HEIGHT_ID.BREADCRUMB,
                        height: breadcrumbRef.current.offsetHeight,
                    },
                ]);
            }
            await getFacts();
        })();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(facts);

    return (
        <Layout className={`min-h-[100vh] bg-[color:var(--color-fill-2)]`}>
            <Header
                ref={headerRef}
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
                    <div
                        ref={breadcrumbRef}
                        className="bg-[color:var(--color-bg-2)] w-full my-2 px-2 py-3 flex flex-row justify-start items-center"
                    >
                        <Breadcrumb />
                    </div>
                    <Content>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default LayoutComponent;
