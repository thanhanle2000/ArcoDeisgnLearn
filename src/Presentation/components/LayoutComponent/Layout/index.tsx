import "@arco-design/web-react/dist/css/arco.css";
import { Layout } from "@arco-design/web-react";
import { Outlet } from "react-router-dom";

const Header = Layout.Header;
const Content = Layout.Content;
const Sider = Layout.Sider;

import styles from "./Layout.module.scss";
import HeaderLayoutComponent from "src/Presentation/components/LayoutComponent/Header";
import SiderChildComponent from "src/Presentation/components/LayoutComponent/Sider";
import useViewmodel from "./LayoutViewmodel";

function LayoutComponent() {
    const {
        collapsed,
        siderWidth,
        handleCollapse,
        handleMoving,
        triggerButton,
    } = useViewmodel();

    return (
        <Layout className={`min-h-[100vh] ${styles.layout_basic}`}>
            <Header className="text-center h-[60px] fixed left-0 top-0 right-0 z-50 border-b border-solid border-b-[color:var(--color-border)]">
                <HeaderLayoutComponent />
            </Header>
            <Layout className="flex pt-[60px] mt-[2px]">
                <Sider
                    breakpoint="lg"
                    collapsible
                    onCollapse={handleCollapse}
                    collapsed={collapsed}
                    width={siderWidth}
                    resizeBoxProps={{
                        directions: ["right"],
                        onMoving: handleMoving,
                    }}
                    trigger={triggerButton}
                >
                    <SiderChildComponent />
                </Sider>
                <Content className={`${styles.layout_content}`}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
}

export default LayoutComponent;
