import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Avatar } from "antd";
import "./style.css";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  AppstoreOutlined,
  LoginOutlined,
  ContactsOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { ConfigProvider } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logut } from "../../Action/AuthAction";

const { Header, Sider, Content } = Layout;

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const [openKeys, setOpenKeys] = React.useState(["sub1"]);
  const dispatch = useDispatch();
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const logoutUser = () => {
    dispatch(logut());
  };
  const auth = useSelector((state) => state.auth);

  return (
    <ConfigProvider direction="rtl">
      <Layout style={{ height: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <div className="myAvatar">
            {!collapsed && (
              <Avatar
                shape="square"
                size={64}
                style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
                src={
                  auth.user.profilePicture
                    ? auth.user.profilePicture
                    : "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                }
              />
            )}
          </div>
          <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            theme="dark"
          >
            <Menu.Item
              key="1"
              icon={<ContactsOutlined />}
              className={pathname == "/users" && "ant-menu-item-selected"}
            >
              <NavLink to="/users">کاربران</NavLink>
            </Menu.Item>
            <SubMenu key="sub1" icon={<MailOutlined />} title="دسته‌ها">
              <Menu.Item
                key="2"
                className={pathname == "/category" && "ant-menu-item-selected"}
              >
                <NavLink to="/category"> همه دسته‌ها </NavLink>
              </Menu.Item>
              <Menu.Item key="3">اضافه کردن دسته</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<AppstoreOutlined />}
              title="Navigation Two"
            >
              <Menu.Item key="4">Option 5</Menu.Item>
              <Menu.Item key="5">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="6">Option 7</Menu.Item>
                <Menu.Item key="7">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu
              key="sub4"
              icon={<SettingOutlined />}
              title="Navigation Three"
            >
              <Menu.Item key="8">Option 9</Menu.Item>
              <Menu.Item key="9">Option 10</Menu.Item>
              <Menu.Item key="10">Option 11</Menu.Item>
              <Menu.Item key="11">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="12" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="13" icon={<LoginOutlined />} onClick={logoutUser}>
              خروج
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <i className="trigger" onClick={toggle}>
              {collapsed ? (
                <MenuUnfoldOutlined className="trigger" />
              ) : (
                <MenuFoldOutlined className="trigger" />
              )}
            </i>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default MainLayout;
