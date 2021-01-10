import React, { useEffect, useState } from "react";
import "./styles.scss";
import listNav, { INav } from "./_nav";
import { useHistory } from "react-router";
import { faSignature } from "@fortawesome/free-solid-svg-icons";
const Logo = require("@assets/images/Logo.png");
import { Layout, Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { Sider } = Layout;
import { Link, useLocation } from "react-router-dom";
const { SubMenu } = Menu;
const SiderComponent = ({ toogleSider }) => {
  const history = useHistory();
  const location = useLocation();

  const [openKeys, setOpenKeys] = useState(null);
  const firstPath = location.pathname.split("/")[1] || "";

  useEffect(() => {
    setOpenKeys(dequy(listNav, []));
  }, [firstPath]);
  useEffect(() => {
    setOpenKeys(dequy(listNav, []));
  }, [location]);
  const dequy = (router, open) => {
    let _open = [...open];
    for (let index = 0; index < router.length; index++) {
      const item = router[index];
      const activePath = "/" + firstPath;
      const isActive = item.activePath.indexOf(activePath) != -1;

      if (isActive) {
        if (item.children.length > 0) {
          _open = dequy(item.children, [...open, item.path]);
        } else {
          _open = [...open, item.path];
        }
      }
    }
    return _open;
  };

  const renderMenu = (routers: any) => {
    const result = routers.map((item: any, index) => {
      const _icon = item.flgAwesome ? (
        <FontAwesomeIcon className={"icon-label mr-4"} icon={item.icon} />
      ) : (
          React.createElement(item.icon, { className: "icon-label" })
        );
      //   console.log(_icon);
      if (item.children.length > 0) {
        return (
          <SubMenu
            key={item.path}
            icon={
              <FontAwesomeIcon icon={item.icon} className={"icon-label mr-4"} />
            }
            title={
              <span className="label-menu-item">{item.title['USA']}</span>
            }
          >
            {renderMenu(item.children)}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item icon={_icon} key={item.path}>
            <Link to={item.path} className="item-label">
              {item.title['USA']}
            </Link>
          </Menu.Item>
        );
      }
    });
    return result;
  };

  return (
    <Sider
      className={`siderComponent`}
      trigger={null}
      collapsed={toogleSider}
      width={275}
    >
      <div className={`w-100 mb-5 bg-white py-2 logo ${toogleSider && "collapsed"}`}>
        <img className="mx-auto my-3 logo-img" src={Logo} />
      </div>
      {openKeys && (
        <Menu
          theme="dark"
          mode="inline"
          defaultOpenKeys={openKeys}
          defaultSelectedKeys={openKeys}
        >
          {renderMenu(listNav)}
        </Menu>
      )}
    </Sider>
  );
};

export default SiderComponent;
