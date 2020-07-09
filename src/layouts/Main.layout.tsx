import React, {ReactNode, useState} from "react";
import {Layout, Menu} from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {IDefaultState, Organization} from "../store/states/types";
import {OrganizationLogo} from "../components/OrganizationLogo";

import './Main.layout.scss';
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons/lib";

const { Header, Content, Sider } = Layout;

interface IMenuItem {
    id: string;
    to?: string;
    title: string;
    icon: any;
    children?: IMenuItem[];
}

interface IMainLayoutProps {
    children: ReactNode,
    menuItems: IMenuItem[],
    organization?: Organization,
}

function generateMenu({id, children, to, ...props}: IMenuItem): JSX.Element {
    if (children && children.length) {
        return (
            <SubMenu key={id} {...props}>
                {children.map(child => generateMenu(child))}
            </SubMenu>
        )
    }

    return (
        <Menu.Item key={id} icon={props.icon}>
            <Link to={to}>{props.title}</Link>
        </Menu.Item>
    )
}

function MainLayout({ menuItems, children, organization }: IMainLayoutProps): JSX.Element {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div style={{height: '100%'}}>
            <Layout style={{height: '100%'}}>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    {organization && (
                        <div className={'sidebar__logo'}>
                            <OrganizationLogo organization={organization}/>
                        </div>
                    )}
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        {menuItems.map(menuItem => generateMenu(menuItem))}
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="site-layout-background" style={{ padding: 0, backgroundColor: 'white' }}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })}
                    </Header>
                    <Content>{children}</Content>
                </Layout>
            </Layout>
        </div>
    );
}

export default connect((state: IDefaultState) => ({
    organization: state.core.organization,
}))(MainLayout);

