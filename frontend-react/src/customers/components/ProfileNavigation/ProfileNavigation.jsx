import React, { useState } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { useDispatch } from "react-redux";
import { logout } from "../../../State/Authentication/Action";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EventIcon from "@mui/icons-material/Event";

const menu = [
  { title: "Orders", icon: <ShoppingBagIcon /> },
  { title: "Favorites", icon: <FavoriteIcon /> },
  { title: "Address", icon: <HomeIcon /> },
  { title: "Payments", icon: <AccountBalanceWalletIcon /> },
  { title: "Notification", icon: <NotificationsIcon /> },
  { title: "Events", icon: <EventIcon /> },
  { title: "Logout", icon: <LogoutIcon /> },
];

const ProfileNavigation = ({ handleClose, open }) => {
  const [activeMenu, setActiveMenu] = useState("Orders");
  const isSmallScreen = useMediaQuery("(max-width:1080px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleNavigate = (item) => {
    navigate(`/my-profile/${item.title.toLowerCase()}`);
    if (item.title === "Logout") {
      handleLogout();
      navigate("/");
    } else {
      setActiveMenu(item.title); // Set active menu
      navigate(`/my-profile/${item.title.toLowerCase()}`);
    }
  };

  return (
    <React.Fragment>
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
        <div className={`flex flex-col h-full p-5 pt-8 relative`}>
          {/* Removed the toggle button */}

          <ul className="pt-6 mt-5">
            {menu.map((item, index) => (
              <li
                key={index}
                onClick={() => handleNavigate(item)}
                className={`flex items-center gap-x-4 p-2 text-black-1000 text-sm cursor-pointer rounded-md duration-200 font-semibold ${
                  index === 2 || index === 6 ? "mt-9" : "mt-2"
                } ${
                  item.title === "Logout"
                    ? "bg-red-600 text-white" // Red color for Logout
                    : item.title === activeMenu
                    ? "bg-orange-600 text-white" // Orange color for active menu
                    : "bg-teal-800 hover:bg-orange-600 text-white"
                }`}
              >
                {item.icon}

                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default ProfileNavigation;
