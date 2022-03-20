import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Agri-Input Master Maintainance",
    path: "/",
    icon: <AiIcons.AiFillHome color="#fff" />,
    cName: "nav-text",
  },
  {
    title: "Supplier Master Maintainance",
    path: "/",
    icon: <IoIcons.IoMdPeople color="#fff" />,
    cName: "nav-text",
  },
  {
    title: "Agri-Input Purchase Requests",
    path: "/agri-input",
    icon: <IoIcons.IoMdPeople color="#fff" />,
    cName: "nav-text",
  },
];
