import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },
       // Dashboard start

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/dashboard",
  },
                // client side start
  {
    navlabel: true,
    subheader: "Client Side",
  },
  {
    id: uniqueId(),
    title: "Inciden Register",
    icon: IconTypography,
    href: "/ui/typography",
  },
  {
    id: uniqueId(),
    title: "My Profile",
    icon: IconCopy,
    href: "/ui/shadow",
  },

  // these are login and register pages

  // {
  //   navlabel: true,
  //   subheader: 'Auth',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Login',
  //   icon: IconLogin,
  //   href: '/auth/login',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Register',
  //   icon: IconUserPlus,
  //   href: '/auth/register',
  // },


           // Admin side start
  {
    navlabel: true,
    subheader: "Admin Side",
  },
  {
    id: uniqueId(),
    title: "Incident management",
    icon: IconMoodHappy,
    href: "/admin-Page",
  },
  {
    id: uniqueId(),
    title: "Assign Incidents",
    icon: IconAperture,
    href: "/manage-officerPage",
  },
  {
    id: uniqueId(),
    title: "Officer Registration",
    icon: IconAperture,
    href: "/officer-registrationPage",
  },


             // Officer side start
  {
    navlabel: true,
    subheader: "Officer Side",
  },


  // {
  //   id: uniqueId(),
  //   title: "Icons",
  //   icon: IconMoodHappy,
  //   href: "/icons",
  // },

  {
    id: uniqueId(),
    title: "Asigned Incidents",
    icon: IconAperture,
    href: "/inc-asignedPage",
  },
  {
    id: uniqueId(),
    title: "Incident Detail",
    icon: IconAperture,
    href: "/inc-detailPage",
  },
  {
    id: uniqueId(),
    title: "Manage Incidents",
    icon: IconAperture,
    href: "/inc-statusPage",
  },

  // for test purpose
  {
    id: uniqueId(),
    title: "Sample Page",
    icon: IconAperture,
    href: "/sample-page",
  },
];

export default Menuitems;
