import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";
import sidebarBg from "../../assets/bg2.jpg";
import { Link } from "react-router-dom";

const SideBar = ({ image, collapsed, toggled, handleToggleSidebar }) => {
  return (
    <>
      <ProSidebar
        image={sidebarBg}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            AGV Command Board
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem
              icon={<FaTachometerAlt />}
              //   suffix={<span className="badge red">New</span>}
            >
              Dashboard
              <Link to="/admin" />
            </MenuItem>
            {/* <MenuItem icon={<FaGem />}>Components</MenuItem> */}
          </Menu>
          <Menu iconShape="circle">
            <SubMenu
              //   suffix={<span className="badge yellow">3</span>}
              //   icon={<FaRegLaughWink />}
              icon={<FaGem />}
              title="Features"
            >
              <MenuItem>
                Manage Orders
                <Link to="/admin/manage-orders" />
              </MenuItem>
              <MenuItem> Tính năng 2</MenuItem>
              <MenuItem> Tính năng 3</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
            <a
              href="https://github.com/sondhg/frontend-prj1-son"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                UI Source Code
              </span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </>
  );
};

export default SideBar;
