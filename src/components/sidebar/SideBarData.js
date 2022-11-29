import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HelpIcon from "@mui/icons-material/Help";

export const SideBarData = [
  {
    title: "Dashboard",
    icon: <SettingsIcon />,
    link: "/",
  },

  {
    title: "Guruhlar",
    icon: <GroupsIcon />,
    link: "/groups",
  },

  {
    title: "O'quvchilar",
    icon: <PersonIcon />,
    link: "/students",
  },

  {
    title: "Dars jadvali",
    icon: <CalendarMonthIcon />,
    link: "/classschedule",
  },

  {
    title: "Sozlamalar",
    icon: <SettingsIcon />,
    link: "/settings",
  },

  {
    title: "Yordam",
    icon: <HelpIcon />,
    link: "/help",
  },
];
