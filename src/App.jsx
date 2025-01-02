import { BrowserRouter, Routes, Route,useLocation,useNavigate } from "react-router-dom";
import Link from '@mui/material/Link';
import {React,useState} from "react";
import "./App.css";
import AboutUs from "./aboutus";
import Employee from "./employee";
import Products from "./products";
import ContactUs from "./contactus";
import Footer from "./footer";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"; // 引入样式
import { motion } from "motion/react"
import Home from "./home";
import { Player } from 'video-react';
import ReactPlayer from 'react-player'//引入
import LiquidStorage from "./liquid_storage";
import { CSSTransition, TransitionGroup } from "react-transition-group"; // 引入动画库
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu"; // 菜单图标
import logo from './assets/logo.jpg';

const Init = () => {
  const navigate = useNavigate(); // 用于跳转

  return (
    <div className="init-container">
      <video className="videoTag video-css" autoPlay loop muted>
        <source src="ktlh_video.mp4" type="video/mp4" />
      </video>
      <div className="button-container">
        {/* 跳转到 /home 的按钮 */}
        <button
          className="init-button"
          onClick={() => navigate("/home")}
        >
          进入主页
        </button>
      </div>
    </div>
  );
};


const Header = () => {
  const location = useLocation(); // 获取当前路径
  const isInitPage = location.pathname === "/"; // 检查是否是 Init 页面

  const [anchorEl, setAnchorEl] = useState(null); // 控制菜单的状态
  const menuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      className="header"
      style={{
        backgroundColor: isInitPage ? "transparent" : "#fff", // Init 页面透明，其他页面白色
        transition: "background-color 0.3s ease", // 平滑过渡效果
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <div className="left-text">
        <img
          src={logo}
          alt="logo"
          className="scaled-logo"
          style={{marginLeft: "50px"}}
        />
      </div>
      <div className="right-text">
        <Link href="/home" underline="hover" color="inherit">
          首页
        </Link>
        <Link href="/aboutus" underline="hover" color="inherit">
          公司概况
        </Link>
        <Link href="/products" underline="hover" color="inherit">
          产品和解决方案
        </Link>
        <Link href="/employee" underline="hover" color="inherit">
          人才招聘
        </Link>
        <Link href="/contactus" underline="hover" color="inherit">
          联系我们
        </Link>
      </div>
      <div className="phoneside">
        {/* Material-UI 图标按钮 */}
        <IconButton
          aria-label="menu"
          onClick={handleMenuOpen}
          style={{
            background: "linear-gradient(45deg, #62cedf, #008cba)", // 渐变背景
            color: "white", // 图标颜色
            padding: "15px", // 调整按钮的内边距
            position: "fixed", // 固定定位
            top: "25px", // 距离顶部
            right: "30px", // 距离右侧
            zIndex: 1000, // 确保按钮在最上层
            borderRadius: "50%", // 圆形按钮
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // 添加阴影
            transition: "transform 0.3s ease, box-shadow 0.3s ease", // 动画效果
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.2)") // 鼠标悬停放大
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "scale(1.0)") // 鼠标移开还原
          }
        >
          <MenuIcon />
        </IconButton>
        {/* Material-UI 菜单 */}
        <Menu
          anchorEl={anchorEl}
          open={menuOpen}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleMenuClose}>
            <Link href="/home" underline="none" color="inherit">
              首页
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="/aboutus" underline="none" color="inherit">
              公司概况
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="/products" underline="none" color="inherit">
              产品和解决方案
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="/employee" underline="none" color="inherit">
              人才招聘
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="/contactus" underline="none" color="inherit">
              联系我们
            </Link>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

const Layout = () => {
  const location = useLocation(); // 获取当前路径

  // 检查当前是否是 Init 页面
  const isInitPage = location.pathname === "/";

  return (
    <div className="body">
      {/* 仅在非 Init 页面显示 Header */}
      {!isInitPage && <Header />}
      <TransitionGroup>
        <CSSTransition
          key={location.key} // 使用 location.key 确保每次路由切换时触发动画
          timeout={500} // 动画时间
          classNames="fade" // 对应的动画类名
        >
          <Routes location={location}>
            <Route path="/" element={<Init />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/liquid-storage" element={<LiquidStorage />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      {/* 仅在非 Init 页面显示 Footer */}
      {!isInitPage && <Footer />}
    </div>
  );
};


const RootApp = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

export default RootApp;
