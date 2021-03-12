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
      <Layout className="layoutContainer">
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          className={collapsed ? "collapseActive" : "collapseDiActive"}
        >
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
            <Menu.Item
              icon={<MailOutlined />}
              key="2"
              className={pathname == "/category" && "ant-menu-item-selected"}
            >
              <NavLink to="/category"> دسته‌ها </NavLink>
            </Menu.Item>
            <Menu.Item
              icon={<AppstoreOutlined />}
              key="4"
              className={pathname == "/product" && "ant-menu-item-selected"}
            >
              <NavLink to="/product"> محصولات </NavLink>
            </Menu.Item>
            <Menu.Item
              key="22"
              icon={<VideoCameraOutlined />}
              className={pathname == "/product/add" && "ant-menu-item-selected"}
            >
              <NavLink to="/product/add"> اضافه کردن محصول </NavLink>
            </Menu.Item>
            <Menu.Item
              key="20"
              icon={<VideoCameraOutlined />}
              className={pathname == "/images" && "ant-menu-item-selected"}
            >
              <NavLink to="/images"> عکس ها </NavLink>
            </Menu.Item>
            <Menu.Item
              key="22"
              icon={<VideoCameraOutlined />}
              className={pathname == "/color" && "ant-menu-item-selected"}
            >
              <NavLink to="/color"> رنگ ها </NavLink>
            </Menu.Item>
            <Menu.Item
              key="22"
              icon={<VideoCameraOutlined />}
              className={pathname == "/discount" && "ant-menu-item-selected"}
            >
              <NavLink to="/discount"> شگفت انگیز </NavLink>
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
            style={{
              margin: "24px 16px",
              paddingTop: 24,
              paddingRight: 24,
              paddingLeft: 24,
              height: "100%",
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
