import * as React from "react";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Dashboard } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import ShopTwoIcon from "@mui/icons-material/ShopTwo";
import { logout } from "../State/Authentication/Action";
import EventIcon from "@mui/icons-material/Event";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import CategoryIcon from "@mui/icons-material/Category";
import FastfoodIcon from "@mui/icons-material/Fastfood";

const menu = [
  { title: "Dashboard", icon: <Dashboard />, path: "/" },
  { title: "Orders", icon: <ShoppingBagIcon />, path: "/orders" },
  { title: "Menu", icon: <ShopTwoIcon />, path: "/menu" },
  { title: "Food Category", icon: <CategoryIcon />, path: "/category" },
  { title: "Ingredients", icon: <FastfoodIcon />, path: "/ingredients" },
  { title: "Events", icon: <EventIcon />, path: "/event" },
  { title: "Details", icon: <AdminPanelSettingsIcon />, path: "/details" },
  { title: "Logout", icon: <LogoutIcon />, path: "/" },
];

export default function AdminSidebar({ handleClose, open }) {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const isSmallScreen = useMediaQuery("(max-width:1080px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = (item) => {
    // navigate(`/admin/restaurant${item.path}`);
    if (item.title === "Logout") {
      dispatch(logout());
      navigate("/");
    } else {
      setActiveMenu(item.title); // Set active menu
      navigate(`/admin/restaurant${item.path}`);
    }
    handleClose();
  };

  return (
    <Drawer
      sx={{
        width: 270,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 270,
          boxSizing: "border-box",
          backgroundColor: "rgb(15, 118, 110)", // Tailwind's teal-800
          transition: "width 0.3s",
        },
      }}
      anchor={"left"}
      open={open}
      onClose={handleClose}
      variant={isSmallScreen ? "temporary" : "permanent"}
    >
      <div className="flex flex-col h-full p-5 pt-2 relative">
        <ul className="pt-2 mt-5">
          {menu.map((item, index) => (
            <li
              key={index}
              onClick={() => handleNavigate(item)}
              className={`flex items-center gap-x-3 p-2 my-3 text-white text-sm cursor-pointer rounded-md duration-200 font-semibold ${
                item.title === "Logout"
                  ? "bg-red-600 text-white mt-8" // Red color for Logout
                  : item.title === activeMenu
                  ? "bg-orange-600 text-white" // Orange color for active menu (you can adjust based on your needs)
                  : "bg-teal-800 hover:bg-orange-600" // Teal color for menu items
              }`}
            >
              {item.icon}
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </Drawer>
  );
}
